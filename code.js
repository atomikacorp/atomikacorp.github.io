var counter = 0;
    function addFields() {
        counter++;
        var div = document.createElement('div');
        div.className = 'input-field';
        div.innerHTML = '<p> ' + counter + ':</p>\
                         <input type="text" placeholder="Nombres" />\
                         <input type="text" placeholder="Apellidos" />\
                         <input type="text" placeholder="8795328" />\
                         <input type="text" placeholder="Médico Radiológico" />\
                         <input type="text" placeholder="M ó F" />';
        document.getElementById('inputForm').appendChild(div);
    }

    var titles = document.getElementsByClassName("subt");
    for (var i = 0; i < titles.length; i++) {
      titles[i].addEventListener("click", function() {
        var content = this.nextElementSibling;
        if (content.style.display === "none") {
          content.style.display = "block";
        } else {
          content.style.display = "none";
        }
      });
    }