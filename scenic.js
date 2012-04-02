/**
  Scenic v 0.1
  Drew Tempelmeyer (drewtemp@gmail.com)
  ============================================
  Scenic is a beautiful and elegant image viewer for your
  beautiful images. Code responsibly.
*/
(function($) {

  $.fn.scenic = function( options ) {

    var settings = $.extend({
      'theme': 'default'
    }, options);

    // Set a listener for the escape key to close scenic
    $(document).keyup(function(e) {
      switch(e.keyCode) {
        case 27: // Esc key
          $.fn.scenic.close();
          break;
        case 37: // left arrow key
          $.fn.scenic.previous();
          break;
        case 39: // right arrow key
          $.fn.scenic.next();
          break;
      }
    });


    // Listen for window resize
    $(window).resize(function() { $.fn.scenic._resize(); });

    // Listener to close Scenic when the current image is clicked (or parent element)
    $('#scenic ul li.active').live('click', function() { $.fn.scenic.close(); });

    // Listener to navigate to the previous image
    $('#scenic ul li.previous').live('click', function() { $.fn.scenic.previous(); });

    // Listener to navigate to the next image
    $('#scenic ul li.next').live('click', function() { $.fn.scenic.next(); });

    var index = 0;
    return this.each(function() {
      var $this = $(this);
      $this.data('scenic-theme', settings.theme);
      $this.data('scenic-index', index);
      index++;

      // Listen to all click events to trigger the Scenic viewer
      $this.live('click', function(e) {
        e.preventDefault();
        $.fn.scenic.open($(this));
      });

    });
  };

  /**
  Return true if Scenic is active. false otherwise
  */
  $.fn.scenic.isVisible = function() {
    return $('#scenic').length > 0;
  };

  /**
  Close Scenic and remove all corresponding elements
  */
  $.fn.scenic.close = function() {
    if ($.fn.scenic.isVisible()) {
      var $scenic = $('#scenic');
      $scenic.fadeOut(200, function() {
        $scenic.remove();
        $('body.scenic-view').removeClass('scenic-view');
      });
    }
  };

  /**
  Open Scenic and create ALL OF THE THINGS
  */
  $.fn.scenic.open = function( element ) {
    var rel        = element.attr('rel');
    var theme      = element.data('scenic-theme');
    var index      = element.data('scenic-index');
    // Set up the parent div
    var $scenicDiv = $('<div />').attr({
      'class' : theme,
      'id'    : 'scenic'
    });
    var $scenicUl = $('<ul />');

    $('a[rel="' + rel + '"]').each(function() {
      var $a = $(this);
      // I love parenthesis!
      $scenicUl.append($('<li />').append($('<span />').append($('<img />').attr({ 'src': $a.attr('href'), 'title': $a.attr('title') }))));
    });

    // Finally append Scenic to the end of the body
    $('body').addClass('scenic-view').append($scenicDiv.append($scenicUl));

    var $scenicLis = $('#scenic ul li');

    $($scenicLis.get(index)).addClass('active');
    $($scenicLis.get(index)).find('div').append('<p>what up</p>');

    // If there is a previous image, add the previous class
    if (index > 0)
      $($scenicLis.get(index - 1)).addClass('previous');

    // If there is a next image, add the next class
    if (index != $scenicLis.length - 1)
      $($scenicLis.get(index + 1)).addClass('next');

    $.fn.scenic._resize();
  };

  /**
  Show the previous image
  */
  $.fn.scenic.previous = function() {
    if (!$('#scenic ul li:first-child').hasClass('active')) {
      var $prev = $('#scenic ul li.previous').prev('li');
      $('#scenic ul li.next').removeClass('next');
      $('#scenic ul li.active').removeClass('active').addClass('next');
      $('#scenic ul li.previous').removeClass('previous').addClass('active');

      if ($prev.length)
        $prev.addClass('previous');
    }
  };

  /**
  Move to the next image
  */
  $.fn.scenic.next = function() {
    if (!$('#scenic ul li:last-child').hasClass('active')) {
      var $next = $('#scenic ul li.next').next('li');
      $('#scenic ul li.previous').removeClass('previous');
      $('#scenic ul li.active').removeClass('active').addClass('previous');
      $('#scenic ul li.next').removeClass('next').addClass('active');

      if ($next.length)
        $next.addClass('next');
    }
  };

  /**
  PRIVATE METHOD
  Resizes Scenic on open and window resize
  */
  $.fn.scenic._resize = function() {
    if ($.fn.scenic.isVisible()) {
      $('#scenic ul li span').css('line-height', $(window).height() + 'px');
    }
  };

})(jQuery);
