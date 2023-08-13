$.getJSON("js/lang.json", function(json) {
  //Lenguaje por defecto de la página (espanol) sessionStorage.setItem("lang", "idioma")"
  if (!localStorage.getItem("lang")) {
      localStorage.setItem("lang", "es");
  }
  var lang = localStorage.getItem("lang");
  var doc = json;
  $('.lang').each(function(index, element) {
      $(this).text(doc[lang][$(this).attr('key')]);
  }); //Each

  $('.translate').click(function() {
      localStorage.setItem("lang", $(this).attr('id'));
      var lang = $(this).attr('id');
      var doc = json;
      $('.lang').each(function(index, element) {
          $(this).text(doc[lang][$(this).attr('key')]);
      }); //Each
  }); //Click
}); //Get json