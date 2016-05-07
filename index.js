//(function() {
function HAIKU(f) { return f.toString().split('\n').slice(1,-1).join('\n'); }

//alert(document.haiku.JLettvin.Sin["English|English"]);
//_____________________________________________________________________________
// Feature detection.
  var browser = {
      'opera':              { 'test': is.opera,    'accept': true  },
      'google chrome':      { 'test': is.chrome,   'accept': true  },
      'firefox':            { 'test': is.firefox,  'accept': true  },
      'microsoft edge':     { 'test': is.edge,     'accept': true  },
      'apple safari':       { 'test': is.safari,   'accept': true  },
      'microsoft ie':       { 'test': is.ie,       'accept': false },
  };
  var browser_accept = false;
  var browser_source = 'untested browser';
  var browsers = [];

  $.each(browser, function(key, value) { browsers.push(key); });

  for (var check of browsers) {
      if (browser[check].test()) {
          browser_source = check;
          browser_accept = browser[check].accept;
          break;
      }
  }

  if (browser_accept) {
    var instructions_target = document.getElementById('DIRECTIONS');
    instructions_target.innerHTML = "" +
        "Hover on a language to show a translation." + 
        "  Click on a language to make it the default";
  } else {
    var haiku_text_target = document.getElementById('HAIKU_TEXT');
    haiku_text_target = browser_source +
      " doesn't support this haiku. Try one of<br />" +
      "[" + browsers.join(" ") + "]";
  }

//_____________________________________________________________________________
  if (browser_accept) {

    ;(function() {
      var width = 6;                  // Specify horizontal language count
      var data = document.haiku;
      var space = document.haiku;
      space.code = {}

      var code = space.code;
      var CODE = 'document.haiku.code.';
      var SPAN3LEFT = ' colspan="3" align="left" ';
      var SPAN3RIGHT = ' colspan="3" align="right" ';
      var jlettvin = space.JLettvin;
      var haiku = jlettvin.Sin;
  //var haiku = document.haiku.JLettvin.Sin;
      var keys = [], languages = 0;
      for (keys[languages++] in haiku) {}
      document.haiku.speaking = 'English|English';
      document.haiku.showing = true;

      code.display = function(key) {
        // This function copies a hidden haiku to the display table cell.
        var pair = key.split('|');
        var English = pair[0];
        var language = pair[1];
        var showing = pair[+!document.haiku.showing];
        var source = document.haiku.JLettvin.Sin[key];
        var target = document.getElementById('HAIKU_TXT');
        if (typeof source == "undefined") {
            target.innerHTML = "Translation needed.";
        } else {
            target.innerHTML = source.trim() || "Translation needed.";
        }
        document.getElementById('current').innerHTML = showing;
      }

      // These funs handle mouse hover display changes.  CSS handles bgcolor.
      code.mouseEnter = function(key) {                    code.display(key); }
      code.mouseClick = function(key) {        document.haiku.speaking = key; }
      code.mouseLeave = function(key) {
          var pair = document.haiku.speaking.split('|');
          console.log(key);
          code.display(document.haiku.speaking);
      }

      code.fillTable = function() {
        // Generate the menu on-the-fly from language names (id value of haiku)
        var table = '<table align="center">';
        table += '<tr height="40pt">';
        table += '<th id="current"' + SPAN3LEFT + 'bgcolor="white"></th>';
        table += '<th id="switch" ' + SPAN3RIGHT + '></th>';
        table += '</tr>';
        for (var row of _.range(0, languages, width)) {
          // Make a new table row
          table += '<tr>';
          for (var col of _.range(width)) {
            var I = row + col;
            if (I >= languages) break;  // Quit if no more languages.
            var id = keys[I];
            var ID = '(\'' + id + '\')';
            var pair = id.split('|');
            var showing = pair[+document.haiku.showing];
            var onEnter = ' onmouseenter="' + CODE + 'mouseEnter' + ID + '"';
            var onLeave = ' onmouseleave="' + CODE + 'mouseLeave' + ID + '"';
            var onClick =      ' onclick="' + CODE + 'mouseClick' + ID + '"';
            var onMouse = onEnter + onLeave + onClick;
            table += '<td class="Language" ' + onMouse + '>';
            table += showing + '</td>';
          }
          table += '</tr>';
        }
        table += '</table>';

        $('.MENU').html(table);       // Fill the menu with the generated table
      }

      code.fillTable();
      code.display(document.haiku.speaking); // Initialize display for default
    })();
  }
