/**
 * @file Contains code to convert custom markdown to HTML.
 * @since 0.0.1
 * @module wiki.js
 * @version 0.0.1
 * @author Jonathan D. Lettvin <jlettvin@gmail.com>
 * @license GPL-3.0
 *
 * wiki.js implements a wiki markdown language for converting text to HTML.
 *
 * jsdoc  wiki.js
 * jshint wiki.js
 */

/*jshint globalstrict: false*/

//_____________________________________________________________________________

$(document).ready(function () {
    /**
     * @function anonymous self-executing.
     */

  /**
   * @var {dictionary} basic_patterns - an ordered associative array
   * containing an ordering index as a key and a list of strings.
   * The list of strings has:
   *    name:           a pattern name used for debugging
   *    regexp:         a pattern string for identifying replace candidates
   *    replacement:    a template for replacing
   *    source:         a sample  input to test functionality
   *    expect:         a sample output to test functionality
   */
  var basic_patterns = {
    // Forbid index 0 and use only counting numbers
    1 : ['paragraphs',
         /\n{2,}/,
         '\n<p \/>\n',
         '\n\n\n\n',
         '\n<p />\n' ],

    // Eliminate multiple empty lines?
    2 : ['empties',
         /\\\\\n([\n\s])*/gim,
         '',
         'TODO',
         'TODO'],

    // === h3 ===  == h2 ==  = h1 =
    3 : ['subsubsection',
         /^\s*===\s*([^=]+)\s*===$/gim,
         '<header align="center"><u><b id="header3">$1<\/b><\/u><\/header>',
          '===L3===',
          '<header align="center"><u><b id="header3">L3</b></u></header>'],
    4 : ['subsection',
         /^\s*==\s*([^=]+)\s*==$/gim,
        '<header align="center"><u><b id="header2">$1<\/b><\/u><\/header>',
        '==L2==',
        '<header align="center"><u><b id="header2">L2</b></u></header>'],

    5 : ['section',
         /^\s*=\s*([^=]+)\s*=$/gim,
        '<header align="center"><u><b id="header1">$1<\/b><\/u><\/header>',
        '=L1=',
        '<header align="center"><u><b id="header1">L1</b></u></header>'],

    // !_underline_!   !=bold=!   !/italic/!   !-strikethrough-!
    6 : ['underline',
         /!_\s*(.*)\s*_!/,
         '<u>$1<\/u>',
         '!_underline_!',
         '<u>underline</u>'],

    7 : ['bold',
         /!=\s*(.*)\s*=!/,
         '<b>$1<\/b>',
         '!=bold=!',
         '<b>bold</b>'],

    8 : ['italic',
         /!\/\s*(.*)\s*\/!/,
         '<i>$1<\/i>',
         '!/italic/!',
         '<i>italic</i>'],

    9 : ['strike',
         /!-\s*(.*)\s*-!/,
         '<strike>$1<\/strike>',
         '!-strike-!',
         '<strike>strike</strike>'],

    // ![url title]!
    10 : ['url',
         /!\[\s*(http[s]?:\/\/)?(\S+)\s*(.*)\s*\]!/,
        '<a href="http:\/\/$2">$3<\/a>',
        '![http://lettvin.com]!',
        '<a href="http://lettvin.com"></a>'],

    // 3-space, 2-space indent markup +
    11 : ['indent 3',
          /^___/gim,
          '&nbsp;&nbsp;&nbsp;',
          '___Indent paragraph.',
          '&nbsp;&nbsp;&nbsp;Indent paragraph.'],

    12 : ['indent 2',
          /^__/gim,
          '&nbsp;&nbsp;',
          '__Indent paragraph.',
          '&nbsp;&nbsp;Indent paragraph.'],

    // 3-caret, 2-caret linebreak markup +
    13 : ['newline past',
          /\^\^\^/gim,
          '<br clear="all" \/>',
          'Break^^^line',
          'Break<br clear="all" />line'],

    14 : ['newline',
          /\^\^/gim,
          '<br \/>',
          'Break^^line',
          'Break<br />line'],

    // image with reference URL and caption
    15 : ['image(url+caption)',
          /!\{\s*(http[s]?:\/\/)(\S+)\s+\s*(http[s]?:\/\/)(\S+)\s+(.*)\s*\}!/,
          '<a href="$3$4"><figure>' +
          '<img src="$1$2" width="90" height="90"><\/img>' +
          '<figcaption>$5<\/figcaption>' +
          '<\/figure><\/a>',
          'TODO',
          'TODO'],

    // image with caption
    16 : ['image(caption)',
          /!\{\s*(http[s]?:\/\/)?(\S+)\s*(.*)\s*\}!/,
          '<figure>' +
          '<img src="$1$2" width="90" height="90"><\/img>' +
          '<figcaption>$3<\/figcaption>' +
          '<\/figure>',
          'TODO',
          'TODO']

  };

  //___________________________________________________________________________
  /**
   * @var {dictionary} added_patterns - extension markdown conversions.
   */
  var added_patterns = {
      // TODO make unit tests for added_patterns
  };

  //___________________________________________________________________________
  /**
   * @var {function} append - method to add conversion patterns.
   * @param {array} pattern - conversion pattern to append.
   */
  var append = function (pattern) {
    var me = 'window.wiki.append[FAIL]: TODO ';
    if (pattern.length != 5) console.log(me + 'name, re, to, input, output');

    added_patterns[Object.keys(added_patterns).length] = pattern;

    var input = pattern[3], expect = pattern[4];
    var output = markdown(input);
    if (expect != output) {
        console.log(me, input);
        console.log(me, expect);
        console.log(me, output);
    }
  };

  //___________________________________________________________________________
  /**
   * @function HERE
   * @param {function} f - A function to lex for text content in a comment.
   * @returns unicode normalization form C representation of translation.
   *
   * PHP-style HEREDOC enabling multi-line text fields.
   */
  var HERE = function (f) {
      return f.toString().split('\n').slice(1,-1).join('\n').normalize('NFC');
  };

  //___________________________________________________________________________
  /**
   * @function tag
   * @param {string} name - a valid HTML tag name.
   * @param {string} text - text to enclose in a tag.
   * @returns tag wrapped text.
   *
   * generates <tag>text</tag>.
   */
  var tag = function (name, text) { return '<'+name+'>'+text+'</'+name+'>'; };

  //___________________________________________________________________________
  /**
   * @function checkBoxes
   * @param {string} line - a line beginning with '@'.
   * @returns HTML implementing a checklist.
   *
   * generates a simple table row using checkBox rules:
   * This function makes a checklist out of lines starting with '@'.
   * {contents} will follow the translated markdown.
   *   '@ {contents}' becomes an empty checkbox.
   *   '@+{contents}' becomes a checked box.
   *   '@-{contents}' becomes a box with an x instead of check.
   *   '@1{contents}' becomes a box with a circled 1 (same for 0-9).
   * other characters are simply used as is in the checkbox.
   */
  var checkBoxes = function (line) {
        var c = line.substr(1,1);
        var d;
        if(     c >= '0' && c <= '9') d = c; //$digit[$c];
        else if(c=='+') d = '<b style="background-color:white; color:#00AA00;">&#x2714;</b>';
        else if(c=='-') d = '<b style="background-color:white; color:red;">&#x2718;</b>';
        else            d = c; //""; //"&#x20de;";
        var s = line.substr(2).trim();
        return '<tr><td>'+d+'</td><td style="background-color:white">'+s+'</td></tr>';
  };

  //___________________________________________________________________________
  /**
   * @function listpre
   * @param {string} source - original text to be split into lines.
   * @param {string} found - a debugger object to hold progress info
   * @returns source with conversions performed on <ul><ol><pre><table>.
   *
   * @todo Improve this algorithm and implement nesting.
   * This function handles all lists and <pre>{contents}</pre> use.
   *   '* item'       => <ul><li>item</li></ul>
   *   '# item'       => <ol><li>item</li></ol>
   *   '@ item'       => (see checkBoxes)
   *   '  item'       => <pre>\nitem\n</pre>
   * NOTE: table in this function implement checkBoxes.
   * Tables using the "^|..." markdown are handled in the tables method.
   */
  var listpre = function (source, found) {
        var target = [];
        var pre = false;
        var bul = false;
        var num = false;
        var chk = false;
        var tbl = '<table style="border:1px solid red;color:black;">';
        var buffer = source.split("\n");
        var have = new Set();
        for (var no = 0; no < buffer.length; ++no) {
            line = buffer[no];
            if(line.match(/^ /)) {
                have.add('preformatted');
                if ( chk ) { target.push('</table>\n'); chk = false; }
                if ( num ) { target.push(   '</ol>\n'); num = false; }
                if ( bul ) { target.push(   '</ul>\n'); bul = false; }
                if (!pre ) { target.push(   '<pre>'  ); pre =  true; }
            } else if(line.match(/^\*/)) {
                have.add('bulleted');
                if ( chk ) { target.push('</table>\n'); chk = false; }
                if ( num ) { target.push(   '</ol>\n'); num = false; }
                if ( pre ) { target.push(   '<pre>\n'); pre = false; }
                if (!bul ) { target.push(    '<ul>\n'); bul =  true; }
            } else if(line.match(/^\#/)) {
                have.add('numbered');
                if ( chk ) { target.push('</table>\n'); chk = false; }
                if ( pre ) { target.push(   '<pre>\n'); pre = false; }
                if ( bul ) { target.push(   '</ul>\n'); bul = false; }
                if (!num ) { target.push(    '<ol>\n'); num =  true; }
            } else if(line.match(/^\@/)) {
                have.add('checklist');
                if ( pre ) { target.push(  '</pre>\n'); pre = false; }
                if ( bul ) { target.push(   '</ul>\n'); bul = false; }
                if ( num ) { target.push(   '/<ol>\n'); num = false; }
                if (!chk ) { target.push(    tbl+'\n'); chk =  true; }
            } else {
                if ( chk ) { target.push('</table>\n'); chk = false; }
                if ( pre ) { target.push(  '</pre>\n'); pre = false; }
                if ( bul ) { target.push(   '</ul>\n'); bul = false; }
                if ( num ) { target.push(   '</ol>\n'); num = false; }
            }
            //var trim1 = pre ? rtrim(line.substr(1)) : line.substr(1).trim();
            var trim1 = line.substr(1); //.trim();
            if     (!pre ) trim1 = trim1.trim();
            
            if     ( pre ) target.push(trim1);
            else if( num ) target.push(tag('li', trim1));
            else if( bul ) target.push(tag('li', trim1));
            else if( chk ) target.push(checkBoxes(line));
            else          target.push(line.trim());
        }
        // Wrap up markdown
        if (pre) { target.push(  '</pre>\n'); pre = false; }
        if (bul) { target.push(   '</ul>\n'); bul = false; }
        if (num) { target.push(   '</ol>\n'); num = false; }
        if (chk) { target.push('</table>\n'); chk = false; }
        if (typeof found != "undefined") {
            found.push.apply(found, Array.from(have));
        }
        return target.join('\n');
  };
  
  //___________________________________________________________________________
  //TODO Imitate this PHP snippet from Desktop/server/nvie/index.php
  // except use '&' in place of '@'
  /*
@book{CajalHistology,
  author        = {Santiago Ram\'{o}n y Cajal},
  title         = {Histology of the Nervous System of Man and Vertebrates},
  publisher     = {Oxford},
  pages         = {145},
  isbn          = {ISBN 0-19-507401-7},
  year          = {1995},
  note          = {English translation by Swanson and Swanson, original completed in 1904}
}
   */

  /*
        // reference content
        $source = preg_replace_callback(
            '|\n@(\S+)\s*\{(\S+)\s*,\s*(.*)\s*\n\}|msU',
            array($reference, 'body'),
            $source);

        // reference pointer
        $source = preg_replace_callback(
            '|@(\w+)(\W)|msU',
            array($reference, 'cite'),
            $source);
   */
  /*
  function reference(arg) {
    return
        '<hr />' +
        'type '      + arg[1].toString() + '<br />' +
        'name '      + arg[2].toString() + '<br />' +
        'body<br />' + arg[3].toString() + '<br />';
  }
   */

  //___________________________________________________________________________
  var Citation = function () {
    this.citation = {};
    this.order = [];
  
    //_________________________________________________________________________
    var body = function (arg) {
      var N = count(this.citation);
      var type = arg[1];  // Ignored for now
      var name = arg[2];
      var body = arg[3];
  
      // This retains the order of parts as given.
      // TODO enforce ordering of specific parts if desired.
      body = body.replace(/^\s*\w+\s*=\s*\{(.*)\}\,*\s*$\n/gim, ' $1');
      this.citation[name] = body;
      return '';
    };
  
    /*
    //_________________________________________________________________________
    public function cite($arg) {
      // This function makes twitter handles difficult.
      // Use &#64; in place of @.
      name = arg[1];
      stop = arg[2];
      if (array_key_exists($name, $this.citation)) {
        $key = array_search($name, $this.order);
        if (!$key) {
          $key = count($this.order) + 1;
          $this.order[$key] = $name;
        }
        return "<sup>[" + key + "]</sup>" + stop;
      }
      return "[Missing citation " + name + "]" + stop;
    }
  
    //_________________________________________________________________________
    public function show($arg) {
      $ret = '';
      if (count($this.order))
        $ret .= "<div align=\"center\"><big>$arg</big></div>\n";
      foreach($this.order as $key=>$name)
        $ret .= "<br />[$key] " . $this.citation[$name];
      return $ret;
    }
  */
  };
  var citation = new Citation();

  var entities = {};

  //___________________________________________________________________________
  /**
   * @var {function} markdown - method to perform conversions.
   * @param {array} source - original pre-markdown text.
   * @param {string} found - a debugger object to hold progress info.
   */
  var markdown = function (source, found) {
    /*
        $pattern = '|<!ENTITY\s*(\S*)\s*"([^"]*)">|sU';
        preg_match_all($pattern, $text, $result, PREG_SET_ORDER);
     */
    var target = source;
    var before = target;
    if (typeof found == "undefined") {
        target = target.replace(/\\\n/g, ' ');
    } else {
      target = target.replace(/\\\n/g, ' ');
      if (before != target) found.push('wrap');
    }
    /* special case */
    //target.replace('\n{2,}', '\n<p />\n');

    var combined = [basic_patterns, added_patterns];
    for (var p in combined) {
        var patterns = combined[p];
        for (var key in patterns) {
            var triple = patterns[key];
            var name = triple[0], re = triple[1], to = triple[2];
            if (typeof found == "undefined") {
                target = target.replace(re, to);
            } else {
                before = target;
                target = target.replace(re, to);
                if (before != target) found.push(name);
            }
        }
    }
    target = listpre(target, found);
    /* @todo
     * here is where citations should be ingested, referenced, etc...
     * Use &book{index} as a reference.
     * Use &book{index field = {content}, field = {content} } as source.
     * Use &references; late in the markdown to express citations.
     * Implement specialty entity parsing for &references;
     * Use abbrevs by creating specialty entities:
     *   
     */
    /* @todo
     * Implement this entity translation in javascript.
     *   Example: <!ENTITY jdl  "Jonathan D. Lettvin">
     *   Then: &jdl; is translated to Jonathan D. Lettvin.
     * This function should probably precede all others.
     * original in Desktop/server/nvie/index.php

    private function getentities($text) {
        $pattern = '|<!ENTITY\s*(\S*)\s*"([^"]*)">|sU';
        preg_match_all($pattern, $text, $result, PREG_SET_ORDER);
        return $result;
    }

    function entify($text) {
        return
            preg_replace(
                '|>|', '&gt',
                preg_replace(
                    '|<|', '&lt;',
                    preg_replace(
                        '|&|', '&amp;',
                        $text)));
    }
     */
    return target;
  };

  // Make markdown function visible.
  if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = markdown;
    //console.log("wiki.js as MAIN");
  } else {
    window.wiki = {markdown:markdown, append:append};
    window.markdown = markdown;
    window.wikiappend = append;
    //console.log("wiki.js as MODULE");
    //export {markdown, append};
  }

  document.wiki = {};
  document.wiki.markdown = markdown;

  //MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
  if (typeof module !== 'undefined' && !module.parent) {
    var main = function () {

      var FP = ['[FAIL]', '[PASS]']; 

      //_______________________________________________________________________
      var FAIL_PASS = function (source, expect, basic_patterns) {
        var found = [];
        var target = markdown(source, found);
        var fails = (target != expect);
        if (fails) {
          console.log(result + '\tsource: ' + source);
          console.log('\texpect: ' + expect);
          console.log('\ttarget: ' + target);
        } else {
          if (found == []) found.push('NONE');
          console.log(FP[+!fails] + ' ' + found.join());
        }
        return +fails;
      };
  
      //_______________________________________________________________________
      var unit1 = function () {
        console.log('_______ UNIT 1: ' + '_'.repeat(60));
        var suite = {
          "section":
          ["=L1=", '<header align="center"><u><b id="header1">L1</b></u></header>'],
          "subsection":
          ["==L2==", '<header align="center"><u><b id="header2">L2</b></u></header>'],
          "subsubsection":
          ["===L3===", '<header align="center"><u><b id="header3">L3</b></u></header>'],
          "indent 3":
          ["___Indent paragraph.", '&nbsp;&nbsp;&nbsp;Indent paragraph.'],
          "newline past":
          ["Break^^^line", 'Break<br clear="all" />line'],
          "newline":
          ["Break^^line", 'Break<br />line'],
          "paragraphs":
          ["\n\n\n\n", '\n<p />\n'],
          "preformatted":
          [" some\n code", '<pre>\nsome\ncode\n</pre>\n'],
          "bold":
          ["!=bold=!", '<b>bold</b>'],
          "italic":
          ["!/italic/!", '<i>italic</i>'],
          "underline":
          ["!_underline_!", '<u>underline</u>'],
          "strike":
          ["!-strike-!", '<strike>strike</strike>'],
          "url":
          ["![http://lettvin.com]!", '<a href="http://lettvin.com"></a>']
        };
        var fails = 0;
        //for (var test in basic_patterns) fails +=
            //FAIL_PASS(test[3], test[4], basic_patterns);
        for(var test in suite) fails +=
            FAIL_PASS(suite[test][0], suite[test][1], basic_patterns);
        var result = FP[+(fails === 0)];
        console.log(result + '\tunit1: ' + fails.toString() + ' FAILS.');
        return fails;
      };
  
      //_______________________________________________________________________
      var unit2 = function () {
        console.log('_______ UNIT 2: ' + '_'.repeat(60));
        var suite = {
          "line\\\nwrap": 'line wrap',
          "@  Check unmarked\n@+ Check accepted\n@- Check rejected":
'<table style="border:1px solid red;color:black;">\n' +
'\n' +
'<tr><td> </td><td style="background-color:white">Check unmarked</td></tr>\n' +
'<tr><td><b style="background-color:white; color:#00AA00;">&#x2714;</b></td><td style="background-color:white">Check accepted</td></tr>\n' +
'<tr><td><b style="background-color:white; color:red;">&#x2718;</b></td><td style="background-color:white">Check rejected</td></tr>\n' +
'</table>\n',
          "# hello world": '<ol>\n' +
            '\n' +
            '<li>hello world</li>\n' +
            '</ol>\n',
          "* hello world": '<ul>\n' +
            '\n' +
            '<li>hello world</li>\n' +
            '</ul>\n',
        };
        var fails = 0;
        for(var test in suite) fails +=
            FAIL_PASS(test, suite[test], basic_patterns);
        var result = FP[+(fails === 0)];
        console.log(result + '\tunit2: ' + fails.toString() + ' FAILS.');
        return fails;
      };

      //_______________________________________________________________________
      var unit3 = function () {
        console.log('_______ UNIT 3: ' + '_'.repeat(60));
        var fails = 0;
        var suite = HERE(function(){/*
@book{Svaetichin,
    title         = {The S-Potential},
    author        = {Boris D. Drujan et al.},
    year          = {1982},
    month         = {January},
    isbn          = {9780845101131}
}
Waxman reference@WaxmanAxons.
Failed reference@NoReferenceGiven.
Svaetichin reference@Svaetichin.

@book{CajalHistology,
  author        = {Santiago Ram\'{o}n y Cajal},
  title         = {Histology of the Nervous System of Man and Vertebrates},
  publisher     = {Oxford},
  pages         = {145},
  isbn          = {ISBN 0-19-507401-7},
  year          = {1995},
  note          = {English translation by Swanson and Swanson, original completed in 1904}
}
@article{LettvinSeenMovement,
    author        = {Jerome Y. Lettvin et. al.},
    title         = {How seen movement appears in the frog's optic nerve},
    journal       = {Federation Proceedings},
    year          = {1959},
    month         = {march},
    volume        = {18},
    number        = {1},
    pages         = {393 and 354}
}
@book{WaxmanAxons,
    editor        = {Stephen G. Waxman},
    title         = {Physiology and Pathobiology of Axons},
    isbn          = {ISBN 0-89004-215-2}
}
*/});
        return fails;
      };
  
      //_______________________________________________________________________
      var fails = unit1() + unit2() + unit3();
      var result = FP[+(fails === 0)];
      console.log(result + '\ttotal: ' + fails.toString() + ' FAILS.');
    };

    //XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
    main();
  }

});
