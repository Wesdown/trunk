jQuery(document).ready(function($){
	var ecranHeight = jQuery(document).height();
	var bodyHeight = $('body').height();
	var footerHeight = $('#footer').height() + $('#pre-footer-orange').height();
	var headerHeight = $('#header').height();
	var total = 0;

	detectViewHeight();
	
	function detectViewHeight()
	{
		if (ecranHeight > bodyHeight)
		{
			total = ecranHeight - footerHeight*2 - headerHeight - 12;
			$('#contenu').css('height', total + 'px');
		}
	}

	$(window).resize(function() {
		detectViewHeight();
	});
});