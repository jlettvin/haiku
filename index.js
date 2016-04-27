//(function() {
function display(language) {
  // This function copies a hidden haiku to the display table cell.
  var source = document.getElementById(language);
  var target = document.getElementById('HAIKU_TXT');
  target.innerHTML = source.innerHTML.trim() || "Translation needed.";
}

// These functions handle mouse hover display changes.  CSS handles bgcolor.
function mouseEnter(language) {                  display(language); }
function mouseLeave(language) {   display(document.haiku.speaking); }
function mouseClick(language) { document.haiku.speaking = language; }

//requirejs.config({"baseUrl": ""});
//requirejs(['haiku.js']);
//$(document).ready(function() {
  //var haiku = document.haiku;
  var haiku = $('.haiku');        // Fetch list of all hidden text
  var languages = haiku.length;   // Count the languages
  var width = 6;                  // Specify horizontal language count

  document.haiku = {};
  document.haiku.speaking = 'English';

  // Generate the menu on-the-fly from language names (id value of haiku)
  var table = '<table align="center">';
  for (var row of _.range(0, languages, width)) {
    // Make a new table row
    table += '<tr>';
    for (var col of _.range(width)) {
      var I = row + col;
      var language = I;
      if (language >= languages) break;  // Quit if no more languages.
      var element = haiku[language];
      var id = element.id;
      var onEnter = ' onmouseenter="mouseEnter(\'' + id + '\')"';
      var onLeave = ' onmouseleave="mouseLeave(\'' + id + '\')"';
      var onClick =      ' onclick="mouseClick(\'' + id + '\')"';
      var onMouse = onEnter + onLeave + onClick;
      table += '<td class="Language" ' + onMouse + '>' + id + '</td>';
    }
    table += '</tr>';
  }
  table += '</table>';

  $('.MENU').html(table);         // Fill the menu with the generated table

  display(document.haiku.speaking); // Initialize display for default language.
//});
//})();
