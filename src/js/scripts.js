(function($, window, document, undefined) {

  'use strict';

  $(function() {


    /*
      Simple mobile navigation
    */
    // Mobile
    var select = document.getElementById('mobile-nav');
    select.onchange = function() {
      let hash = this.getElementsByTagName('option')[this.selectedIndex].value;
      $('body').animate({
        scrollTop: $('#' + hash).position().top
      }, 300, function() {
        window.location.hash = hash;
      });
    };

    //Desktop
    $('.nav.desktop a').click(function(e) {
      e.preventDefault();
      let hash = this.hash;
      $('body').animate({
        scrollTop: $(hash).position().top
      }, 300, function() {
        window.location.hash = hash;
      });
    });



  });

})(jQuery, window, document);
