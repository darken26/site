


$(document).ready(function() {
   (function($) { 
	  $.ajax({
		url : '/page1',
		contentType: 'text/plain',
		async : true,
		success: function(data){
			$("#pages").append(data);
		}
	  }
	  );
      $("#more_btn").live('click', function(){
		$("#pages").html('');
		//#("#ajax").show();
		$.ajax({
			url : '/page2',
			async : true,
			contentType : 'text/plain',
			success: function(data){
				//$("#ajax").hide();
				$("#pages").html(data);
			}
		});
	  });
	   $("#back_btn").live('click', function(){
		$("#pages").html('');
		$.ajax({
			url : '/page1',
			async : true,
			contentType : 'text/plain',
			success: function(data){
				$("#pages").html(data);
			}
		});
	  });
   })(jQuery);
    

});



