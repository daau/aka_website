/*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery to collapse the navbar on scroll
function collapseNavbar() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
}

$(window).scroll(collapseNavbar);
$(document).ready(collapseNavbar);

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
  if ($(this).attr('class') != 'dropdown-toggle active' && $(this).attr('class') != 'dropdown-toggle') {
    $('.navbar-toggle:visible').click();
  }
});

// Google Maps Scripts
function initMap() {
  // Get the HTML target
  var mapDiv = document.getElementById('map');

  // Insert the google maps widget
  var map = new google.maps.Map(mapDiv, {
    center: {lat: 43.7886339, lng: -79.4474867},
    zoom: 10,
    disableDefaultUI: true,
    zoomControl: true,
    scrollwheel: false
  });
  // Map infoWindows

  var infowindow_downtown = new google.maps.InfoWindow({
    content: 'Address:<br> 394 Bloor St W, Toronto, ON M5S 1X4' +
    '<br>Phone:<br> (647) 748-8868'
  });

  var infowindow_markham = new google.maps.InfoWindow({
    content: 'Address:<br> 3235 Highway 7, Markham, ON L3R 3P9' +
    '<br>Phone:<br> (905) 604-4880'
  });

  // Add markers
  var marker_downtown = new google.maps.Marker({
    position: {lat: 43.6661334, lng: -79.4072586},
    map: map,
    title: 'Downtown'
  });

  var marker_markham = new google.maps.Marker({
    position: {lat: 43.8489313, lng: -79.3477742},
    map: map,
    title: 'Markham'
  });

  // Add marker event handler
  marker_downtown.addListener('click', function() {
    infowindow_downtown.open(map, marker_downtown);
  });

  marker_markham.addListener('click', function() {
    infowindow_markham.open(map, marker_markham);
  });
}
