$.getJSON("js/lang.json", function(json) {
  //Lenguaje por defecto de la página (espa;ol xd) sessionStorage.setItem("lang", "idioma")"
  if (!localStorage.getItem("lang")) {
      localStorage.setItem("lang", "es");
      document.getElementById("cv_pdf").style = "https://github.com/homeroresendiz/resume/blob/main/pdf/esCV_Homero.pdf";
  }
  var lang = localStorage.getItem("lang");
  var doc = json;
  $('.lang').each(function(index, element) {
      $(this).text(doc[lang][$(this).attr('key')]);
  }); //Each

  switch (lang) {
      case 'es':
          document.getElementById("cv_pdf").href = "https://github.com/homeroresendiz/resume/blob/main/pdf/esCV_Homero.pdf";
          break;
      case 'en':
          document.getElementById("cv_pdf").href = "https://github.com/homeroresendiz/resume/blob/main/pdf/enCV_Homero.pdf";
          break;
  }

  $('.translate').click(function() {
      localStorage.setItem("lang", $(this).attr('id'));
      var lang = $(this).attr('id');
      var doc = json;
      switch (lang) {
          case 'es':
              document.getElementById("cv_pdf").href = "https://github.com/homeroresendiz/resume/blob/main/pdf/esCV_Homero.pdf";
              break;
          case 'en':
              document.getElementById("cv_pdf").href = "https://github.com/homeroresendiz/resume/blob/main/pdf/enCV_Homero.pdf";
              break;
      }
      $('.lang').each(function(index, element) {
          $(this).text(doc[lang][$(this).attr('key')]);
      }); //Each
  }); //Click
}); //Get json