$(document).ready(function() {
	// carrousel
	var reference = $(".diapo li:first-child");
	var nbElement = $(".diapo li").length - 1;
	var height = reference.height();
	var pause = 0;
	var tabLi = new Array();
	var iSelect = 0;
	$(".diapo").css("height", (reference.height() * nbElement));
	
	lire();



	// navigation
	for (var i = 0; i <= nbElement; i++)
	{
		$('.carrousel-selecteur').append('<div id='+i+'></div>');
		if (i % 2 == 0)
		{
			$('#'+i).addClass('color-orange');
		}
		else
		{
			$('#'+i).addClass('color-bleu');
		}
	}



	// navigation au click
	for (var i = 0; i <= nbElement; i++) {
		tabLi[i] = i;
	}
	var cpt = 0;
	$('#'+cpt).addClass('carrousel-selecteur-hover');
	
	$(".bouton-prec-conteneur .bouton").click(function()  {
		iSelect = cpt;
		if (cpt > 0) {
			cpt--;
		}
		else {
			cpt = nbElement;
		}
		$('.diapo').animate({marginTop:- (height * cpt) },1000);
		if (interval) {
			if (pause == 0) 
			{

				clearInterval(interval);
				lire();
			};
			$('#'+cpt).addClass('carrousel-selecteur-hover');
			$('#'+(iSelect)).removeClass('carrousel-selecteur-hover');
		}
	});
	$(".bouton-suiv-conteneur .bouton").click(function() {
		iSelect = cpt;
		if (cpt < nbElement) {
			cpt++;	
		}
		else {
			cpt = 0;
		}
		$('.diapo').animate({marginTop:- (height * cpt)},1000);
		if (interval) {
			if (pause == 0) 
			{
				clearInterval(interval);
				lire();
			};
			$('#'+cpt).addClass('carrousel-selecteur-hover');
			$('#'+(iSelect)).removeClass('carrousel-selecteur-hover');
		}
	});



	// bouton start et pause
	$('.carrousel-lecture').addClass('bouton-lecture');
	$('.bouton-lecture').addClass('pause');
	
	$('.bouton-lecture').click(function () {
		if (pause == 0) 
		{
			clearInterval(interval);
			$('.bouton-lecture').removeClass('pause');
			$('.bouton-lecture').addClass('play');
			pause = 1;
		}
		else
		{
			lire();
			$('.bouton-lecture').removeClass('play')
			$('.bouton-lecture').addClass('pause');
			pause = 0;
		}
	});



	// slide automatique
	function lire() {
		interval = setInterval(function(){
			iSelect = cpt;
			cpt++;
			if (cpt > nbElement) {
				cpt = 0;
			}
			$('#'+cpt).addClass('carrousel-selecteur-hover');
			$('#'+(iSelect)).removeClass('carrousel-selecteur-hover');
			$('.diapo').animate({marginTop:- (height * cpt)},1000);
		}, 3500);
	}
});