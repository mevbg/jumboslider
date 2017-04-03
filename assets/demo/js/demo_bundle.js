// =========================| Demo scripts |========================= //



//--------------------------| DOM Ready

jQuery(document).ready(function($) {

  'use script';

  // Initialize JumboSlider for the Jumbotron demo
  $.jumboslider();

  // Initialize JumboSlider for galleries
  $('.gallery').jumboslider();

  // Initialize JumboSlider for arrows demo
  $('#demo-arrows').jumboslider({
    arrows: false
  });

  // Initialize JumboSlider for pagination demo
  $('#demo-pagination').jumboslider({
    pagination: false
  });

  // Initialize JumboSlider for loop demo
  $('#demo-loop').jumboslider({
    loop: true
  });

  // Initialize JumboSlider for loop demo
  $('#custom-slide-btn').click(function() {
    var value = Math.round($('#custom-item-input').val()),
      pos = value >= 1 && value <= 10 ? value : null;

    if (pos) {
      $('#demo-loop').jumboslider().slideTo(pos);
    }
  });
  $('#demo-loop').jumboslider({
    loop: true
  });

});