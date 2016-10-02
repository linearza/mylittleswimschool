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

    // Desktop
    $('.nav.desktop a').click(function(e) {
      e.preventDefault();
      let hash = this.hash;
      $('body').animate({
        scrollTop: $(hash).position().top
      }, 300, function() {
        window.location.hash = hash;
      });
    });

    // Contact form
    var $contactForm = $('#contact-form'),
      $submitButton = $('#contact-form input[type=submit]');
    $contactForm.submit(function(e) {
      e.preventDefault();
      $.ajax({
        url: '//formspree.io/vanwijk.mc@gmail.com',
        method: 'POST',
        data: $(this).serialize(),
        dataType: 'json',
        beforeSend: function() {
          $submitButton.prop('disabled', true);
          $submitButton.before('<div class="alert sending">Sending message…</div>');
        },
        success: function() {
          $contactForm.find('.alert.sending').remove();
          $submitButton.before('<div class="alert sent">Message sent!</div>');
          $submitButton.prop('disabled', false);
          setTimeout(function() {
            $contactForm.find('.alert.sent').remove();
          }, 5000);
        },
        error: function(err) {
          $contactForm.find('.alert.sending').remove();
          $submitButton.before('<div class="alert error">Oops, there was an error:' + err + '. Please contact me directly at daniella@mylittleswimschool.co.za</div>');
          $submitButton.prop('disabled', false);
        }
      });
    });



  });

})(jQuery, window, document);
