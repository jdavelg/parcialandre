
$(window).load(function(){
    $('.preloader').fadeOut("slow");    
});

var map = '';
var center;

function initialize() {
    var mapOptions = {
      zoom: 16,
      center: new google.maps.LatLng(13.758468, 100.567481),
      scrollwheel: false
    };
  
    map = new google.maps.Map(document.getElementById('map-canvas'),  mapOptions);

    google.maps.event.addDomListener(map, 'idle', function() {
        calculateCenter();
    });
  
    google.maps.event.addDomListener(window, 'resize', function() {
        map.setCenter(center);
    });
}

function calculateCenter() {
  center = map.getCenter();
}

function loadGoogleMap(){
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&' + 'callback=initialize';
    document.body.appendChild(script);
}

$(function(){


    $('.navbar-collapse a').click(function(){
        $(".navbar-collapse").collapse('hide');
    });

 
  $('#portfolio a').nivoLightbox({
        effect: 'fadeScale',
    });


  wow = new WOW(
  {
    mobile: false
  });
  wow.init();


  loadGoogleMap();


  function initParallax() {
    $('#home').parallax("100%", 0.3);
    $('#team').parallax("100%", 0.3);
    $('#contact').parallax("100%", 0.1);

  }
  initParallax();

});

