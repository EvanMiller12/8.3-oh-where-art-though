var $ = require('jquery');

function setupAjax(loggedInUser){
  $.ajaxSetup({
      beforeSend: function(xhr){
        xhr.setRequestHeader("X-Parse-Application-Id", "tiygvl");
        xhr.setRequestHeader("X-Parse-REST-API-Key", "slumber");
        if(loggedInUser){
          xhr.setRequestHeader("X-Parse-Session-Token", loggedInUser.sessionToken);
        }
      }
  });
}
setupAjax();
