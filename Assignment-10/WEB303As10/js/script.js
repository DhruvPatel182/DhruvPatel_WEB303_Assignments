$( document ).ready(function() {
   
    var drop = document.getElementById('dropdown');
    for (let x = 0; x < countries.length; i++) {
        drop.innerHTML += '<option value="' + countries[x].code + '">' + countries[x].name + '</option>';
    }   
   });
