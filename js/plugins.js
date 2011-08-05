
// usage: log('inside coolFunc', this, arguments);
// paulirish.com/2009/log-a-lightweight-wrapper-for-consolelog/
window.log = function(){
  log.history = log.history || [];   // store logs to an array for reference
  log.history.push(arguments);
  arguments.callee = arguments.callee.caller;  
  if(this.console) console.log( Array.prototype.slice.call(arguments) );
};


// place any jQuery/helper plugins in here, instead of separate, slower script files.

// el - A dom element to render the clock in
// opts - A dict of options

function Clock(el, opts) {
    var options = {
        // The clock will be updated every tickInterval ms
        // lower numbers => smoother animation
        tickInterval: 100,
        // startColor - the color when the minute has just started
        startColor: [0, 255, 0],
        // endColor - the color when the minute has ended
        endColor: [255, 0, 0], 
        // Type: default tick (d), or tick on element (minute) (m)
        type : 'd'
    }

    // Override default options
    for(var key in opts) {  
        options[key] = opts[key];
    }

    function interpolateColor(start, end, pct) {
        return  start + Math.floor((end - start) * pct);
    }

    function rgb(pct) {
        var r = interpolateColor(options['startColor'][0], options['endColor'][0], pct);
        var g = interpolateColor(options['startColor'][1], options['endColor'][1], pct);
        var b = interpolateColor(options['startColor'][2], options['endColor'][2], pct);
        return "rgb("+r+","+g+","+b+")";
    }

    // This is where the magic happens (default)
    function tick(el) {
        // Bootstrap the container element
        var hours = "<span name='clock.hours'></span>";
        var minutes = "<span name='clock.minutes'></span>";
        el.innerHTML = hours + " : " + minutes;

        var d = new Date();
        var hours = el.firstChild;
        var minutes = el.lastChild;

        hours.innerHTML = d.getHours();
        minutes.innerHTML = d.getMinutes();
        var pct = d.getSeconds() / 59;
        minutes.style.color = rgb(pct);
    }

    function tickElemMinutes() {
        var d = new Date();
        var pct = d.getSeconds() / 59;
        el.style.color = rgb(pct);
    }
    
    if(options.type == 'm') {
        (function loop(){
            tickElemMinutes();
            setTimeout(loop, options.tickInterval);
        })();  
    } else { 
        (function loop(){
            tick();
            setTimeout(loop, options.tickInterval);
        })();
    }
}


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
    
        var toolConfig = { position: 'bottom, center'};

        $("#twitter").attr('title', tcontent);
        $("#fb").attr('title', fcontent);
        $("#linkedin").attr('title', lcontent);
        $("#github").attr('title', gcontent);

        $("#twitter").tooltip(toolConfig);
        $("#fb").tooltip(toolConfig);
        $("#linkedin").tooltip(toolConfig);
        $("#github").tooltip(toolConfig);

   }
   

})(jQuery);
