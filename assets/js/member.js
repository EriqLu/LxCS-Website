var requestURL = '':

var getPoints = function() {
    var netid = $('#netid').val();
      if(netid.length > 0) {
         $.ajax({
            url: requestURL,
            type: 'get'
            data: 'netid' + encodeURIComponent(netid),
            success: function(data) {
              var temp = Mustache.render($('#pointTemplate').html(), data);
              $('#stats').html(template);
              
              },
              
              error: function() {
                  $('#stats').html(' <p> Something seems not right. Please let us know so we can fix the problem. Sorry for this inconvience. </p>');
              }
            });
            $('#stats').html('<p> Loading </p>');
            
         } else {
                $('#stats').html('<p> Please enter a valid netid. </p>');
              }
                return false;
  }
  
  $(function() {
    $('#points-form').submit(getPoints);
    
    });
