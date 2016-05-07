/**
 * @file Contains code to populate labeled HTML fields.
 * @since 0.0.1
 * @module index.js
 * @version 0.0.1
 * @author Jonathan D. Lettvin <jlettvin@gmail.com>
 * @license GPL-3.0
 *
 * jsdoc  index.js
 * jshint index.js
 */

/*jshint globalstrict: false*/

$(document).ready(function () {
    /**
     * @function anonymous self-executing.
     */

    //___________________________________________________________________________
    // Browser detection.
    // Unfortunately, feature detection will not do.
    // MSIE simply doesn't function well enough to support our needs.

    /**
     * @var {dictionary} browser
     * Contains a list of browsers and their detection/acceptance.
     *
     * This dictionary requires the module
     * {@link cdnjs.cloudflare.com/ajax/libs/is_js/0.8.0/is.min.js}.
     * The "is" library implements functions that aid in identifying browsers.
     */
    var browser = {
        'opera':              { 'test': is.opera,    'accept': true  },
        'google chrome':      { 'test': is.chrome,   'accept': true  },
        'firefox':            { 'test': is.firefox,  'accept': true  },
        'microsoft edge':     { 'test': is.edge,     'accept': true  },
        'apple safari':       { 'test': is.safari,   'accept': true  },
        'microsoft ie':       { 'test': is.ie,       'accept': false },
        };

    /**
     * @var {array} browsers - * a list of browser names to use as keys.
     *
     * Before modifying the browser map, collect all the listed keys.
     */
    var browsers = Object.keys(browser);
    var check;

    /**
     * @var {bool} browser.accept - flags this browser as usable by haiku.
     * @var {string} browser.name - identifies the browser.
     * These variables are stored in the browser variable.
     */
    browser.accept = false;
    browser.name = 'untested browser';

    // Perform the browser detection using the cdnjs is.js library functions.
    for (var i in browsers) {
        var name = browsers[i];
        if (browser[name].test()) {
            browser.name = name;
            browser.accept = browser[name].accept;
            break;
        }
    }

    // Report on acceptance by replacing DIRECTIONS with instructions.
    if (browser.accept) {
      document.getElementsByClassName('DIRECTIONS')[0].innerHTML = "" +
          "Hover on a language to show a translation." + 
          "  Click on a language to make it the default";
    } else {
      document.getElementsByClassName('HAIKU_TEXT')[0].innerHTML = "" +
          browser.name +
          " doesn't support this haiku. Try one of<br />" +
          "[" + browsers.join(" ") + "]";
    }

    //___________________________________________________________________________
    // If an acceptable browser was found, populate the document and
    // prepare event responses.
    if (browser.accept) {

       // Prepare a namespace to make functions visible to event handlers.
       document.haiku.code = {};

       /**
        * @var {int} columns - maximum column count.
        * @var {dictionary} data - source of texts keyed by language.
        * @var {object} code - common point for event access to functions.
        * @var {string} CODE - common point string for event handlers.
        * @var {string} SPAN3LEFT - attributes for displaying language.
        * @var {string} SPAN3RIGHT - attributes for displaying controls.
        * @var {dictionary} jlettvin - collection of collection of translations.
        * @var {dictionary} haiku - collection of translations.
        * @var {array} keys - sequence of "English|dialect" keys to haiku.
        * @var {int} languages - count of languages found in haiku.
        */
        var columns         = 6;                  // Specify horizontal language count
        var data          = document.haiku;
        var code          = data.code;
        var CODE          = 'document.haiku.code.';
        var SPAN3LEFT     = ' colspan="3" align="left" bgcolor="white"';
        var SPAN3RIGHT    = ' colspan="3" align="right" ';
        var jlettvin      = data.JLettvin;
        var haiku         = jlettvin.Sin;
        var keys          = [];
        var languages     = 0;

        keys = Object.keys(haiku);
        languages = keys.length;

        // Prepare default language and whether to use dialect in table cells.
        document.haiku.speaking   = 'English|English';
        document.haiku.dialect    = true;

        /**
         * @var {function} code.display - copies text from haiku to table cell.
         * @function document.haiku.code.display
         * @param {string} key - "language|dialect" key for haiku dictionary.
         */
        code.display = function (key) {
          /**
           * @var {array} pair - [English, dialect] from "English|dialect".
           * @var {string} dialect - Opposite of paired language in table cell.
           * @var {string} source - NFC translation of text from haiku.
           * @var {object{ target - HTML cell in which to place text.
           */
          var pair        = key.split('|');  // 0:English, 1:dialect
          var dialect     = pair[+!document.haiku.dialect];
          var source      = document.haiku.JLettvin.Sin[key];
          var target      = document.getElementsByClassName('HAIKU_TXT')[0];

          // Get existing translation, or declare that a translation is needed.
          target.innerHTML = "Translation needed.";
          if (typeof source != "undefined") {
              target.innerHTML = source.trim() || "Translation needed.";
          }

          // Show what language is current.
          document.getElementById('current').innerHTML = dialect;
        };

        /**
         * @var {function} code.mouseEnter
         * @var {function} code.mouseClick
         * @var {function} code.mouseLeave
         * @function document.haiku.code.mouseEnter
         * @function document.haiku.code.mouseClick
         * @function document.haiku.code.mouseLeave
         *
         * Put functions where events can call them.
         * These funs handle mouse hover display changes.
         * CSS handles display attributes.
         */
        code.mouseEnter = function (key) {                code.display(key); };
        code.mouseClick = function (key) {   document.haiku.speaking = key ; };
        code.mouseLeave = function (key) {
            /**
             * @var {array} pair - [English, dialect] from "English|dialect".
             */
            var pair = document.haiku.speaking.split('|');
            code.display(document.haiku.speaking);
            //console.log(key);
        };

        /**
         * @var {function} code.fillTable
         * @function document.haiku.code.fillTable
         *
         * Generate menu on-the-fly from language names (keys from dictionary)
         */
        code.fillTable = function () {
          /**
           * @var {string} table - Text to put in table main display cell.
           */
          var table    = '<table align="center">';
          table       += '<tr height="40pt">';
          table       += '<th id="current"' + SPAN3LEFT  + '></th>';
          table       += '<th id="switch" ' + SPAN3RIGHT + '></th>';
          table       += '</tr>';
          var rows = _.range(0, languages, columns);
          var cols = _.range(columns);
          for (var y in rows) {
            var row = rows[y];

            // Make a new table row
            table += '<tr>';
            for (var x in cols) {
              var col = cols[x];
              /**
               * @var {int} I - row + col where row increments by column-count.
               * @var {string} id - "English|dialect" key
               * @var {string} ID - arglist for mouse event function from id.
               * @var {array} pair - [English, dialect] from "English|dialect".
               * @var {string} dialect - portion of pair to put in table cell.
               * @var {string} onEnter - HTML event attribute string.
               * @var {string} onClick - HTML event attribute string.
               * @var {string} onLeave - HTML event attribute string.
               * @var {string} onMouse - combined HTML event attribute strings.
               */
              var I = row + col;
              if (I >= languages) break;  // Quit if no more languages.

              var id      = keys[I];
              var ID      = '(\'' + id + '\')';
              var pair    = id.split('|');  // 0:English, 1:dialect
              // Display language name in either English or native alphabet
              // document.haiku.showing can be toggled.
              var dialect = pair[+document.haiku.dialect];
              var onEnter = ' onmouseenter="' + CODE + 'mouseEnter' + ID + '"';
              var onClick =      ' onclick="' + CODE + 'mouseClick' + ID + '"';
              var onLeave = ' onmouseleave="' + CODE + 'mouseLeave' + ID + '"';
              var onMouse = onEnter + onLeave + onClick;

              // Fill table cell.
              table += '<td class="Language" ' + onMouse + '>';
              table += dialect + '</td>';
            }
            table += '</tr>';
          }
          table += '</table>';

          // Fill the menu with the generated table
          $('.MENU').html(table);
        };

        /** Initialize display for default. */
        code.fillTable();
        code.display(document.haiku.speaking);
    }
});
