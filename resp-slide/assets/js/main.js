$(document).ready(function() {
$(".btn-pref .btn").click(function () {
    $(".btn-pref .btn").removeClass("btn-primary").addClass("btn-default");
    // $(".tab").addClass("active"); // instead of this do the below 
    $(this).removeClass("btn-default").addClass("btn-primary");   
});
});

// for slider
$(document).ready(function() {
  $('#media').carousel({
    pause: true,
    interval: false,
  });
});

$(document).bind('mobileinit',function(){
          $.mobile.changePage.defaults.changeHash = false;
          $.mobile.hashListeningEnabled = false;
          $.mobile.pushStateEnabled = false;
      });