// Resize Customizer
  jQuery(function($) {
    if($('#customize-controls').length) {
    
    // Add buttons
    $('#sub-accordion-section-custom_css > li.customize-section-description-container.section-meta.customize-info > div > h3').append('<button type="button" class="size-btn" id="size-1">Size 1</button><button class="size-btn" type="button" id="size-2">Size 2</button><button type="button" class="size-btn" id="size-3">Size 3</button>');

      $('.size-btn').css({
        'font-size':'17px',
        'margin-right':'5px',
        'border-radius': '5px'
      });

      // Set customizer initial width
      $('.wp-full-overlay.expanded').css("margin-left", "385px");
          $('.wp-full-overlay-sidebar').css("min-width", "385px");

      // Size 1
      $('#size-1').click(function() {
          $('.wp-full-overlay.expanded').css("margin-left", "385px");
          $('.wp-full-overlay-sidebar').css("min-width", "385px");
      });

      // Size 2
      $('#size-2').click(function() {
          $('.wp-full-overlay.expanded').css("margin-left", "600px");
          $('.wp-full-overlay-sidebar').css("min-width", "600px");
      });

      // Size 3
      $('#size-3').click(function() {
          $('.wp-full-overlay.expanded').css("margin-left", "800px");
          $('.wp-full-overlay-sidebar').css("min-width", "800px");
      });
    }
});
