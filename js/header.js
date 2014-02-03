jQuery(document).ready(function($){
	
	var detectViewPort = function(){
		var taille = $('body').width();
		$('#header-border').css('width', taille);
	};
		
	$(window).resize(function() {
		detectViewPort();
	});
	
	detectViewPort();
});