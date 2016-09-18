(function($, window, document, undefined) {

  'use strict';

  $(function() {


    /*
      Simple mobile navigation
    */
    var select = document.getElementById('mobile-nav');

    select.onchange = function() {
      window.location.hash = this.getElementsByTagName('option')[this.selectedIndex].value;
    };

  });

})(jQuery, window, document);
