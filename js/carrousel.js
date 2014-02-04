$(document).ready(function() {
	// carrousel
	var reference = $(".diapo li:first-child");
	var nbElement = $(".diapo li").length - 1;
	var height = reference.height();
	var pause = 0;
	var navVisible = 0;
	var tabLi = new Array();
	var iSelect = 0;
	$(".diapo").css("height", (reference.height() * nbElement));


	/******** slide automatique *********/
	lire();
	
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



	/******** navigation *********/
	$('.carrousel-selecteur-languette').click(function() {
	    if (navVisible == 0)
	    {
	    	affNavigation('151px');
	    	navVisible = 1;
	    	$('.carrousel-selecteur-languette').text(':');
	    }
	    else
	    {
	    	affNavigation('0');
	    	navVisible = 0;
	    	$('.carrousel-selecteur-languette').text('"');
	    }
	});

	$('.carrousel-conteneur').on('mouseenter', function() {
		if (navVisible == 0)
		{
			$('.carrousel-selecteur-languette').text('"');
		}
	}).on('mouseleave', function(){
		if (navVisible == 0) {
			$('.carrousel-selecteur-languette').text('');
		}
	});

	function affNavigation(pixel)
	{
		$('.carrousel-selecteur').animate({left:pixel},1000);
		$('.carrousel-selecteur-languette').animate({left:pixel},1000);
	}

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



	/******** navigation au click *********/
	for (var i = 0; i <= nbElement; i++) {
		tabLi[i] = i;
	}
	var cpt = 0;
	$('#'+cpt).addClass('carrousel-selecteur-hover');
	
	$(".bouton-prec-conteneur .bouton").click(function() {
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



	/******** Bouton play/pause *********/
	affBoutonLecture();

	$('.bouton-lecture').click(function () {
		if (pause == 0) 
		{
			clearInterval(interval);
			$('.bouton-lecture').text('1');
			pause = 1;
		}
		else
		{
			lire();
			$('.bouton-lecture').text('2');
			pause = 0;
		}
	});

	$('.carrousel-conteneur').on('mouseenter', function() {
	    affBoutonLecture();
	}).on('mouseleave', function(){
		if (pause == 0) {
			delBoutonLecture();
		}
	});

	function affBoutonLecture() {
		$('.carrousel-lecture').addClass('bouton-lecture');
		if (pause == 0)
		{
			$('.bouton-lecture').text('2');
		}
		else
		{
			$('.bouton-lecture').text('1');
		}
	}

	function delBoutonLecture() {
		$('.carrousel-lecture').removeClass('bouton-lecture');
	}
});