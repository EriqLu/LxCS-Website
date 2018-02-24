$(document).ready(function()){
  $.getJSON("..?assests/js/alumni.json", function(data) {
      var temp = Mustache.render($('#alumniiTemplate').html(), data);
        $('#featuredAlumni').html(template);
        });

});
