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

        var tcontent = "Follow me on twitter!";
        var fcontent = "Want to friend me on Facebook?  Go here!";
        var lcontent = "Add me to your network please!";
        var gcontent = "Check out my code here if you're interested";
        $("#twitter").attr('title', tcontent);
        $("#fb").attr('title', fcontent);
        $("#linkedin").attr('title', lcontent);
        $("#github").attr('title', gcontent);

        $("#twitter").tooltip();
        $("#fb").tooltip();
        $("#linkedin").tooltip();
        $("#github").tooltip();

   }
   

})(jQuery);
