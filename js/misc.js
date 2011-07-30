(function($) {
   $.hoverEffect = function(elem) {
         $(elem)
        .live('mouseover.icons', function(e) {
            $(this).css('opacity', '0.5');
            })
        .live('mouseout.icons', function(e) {
            $(this).css('opacity', '1');
            });
   }
   
   $.bindIconToolTips = function(){
        
   }

})(jQuery);
