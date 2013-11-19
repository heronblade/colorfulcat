$(document).ready(function() {

	//image popups
	$('.portfolio-images a.port-popup').Chocolat();

	//variables
	var windowHeight = $(window).height();

	//On page load make the home div the width and height of the current window, also resize the portfolio div
	resizeHomeDiv();
	portfolioAnchorTags();
	// resizePort();

	$(window).resize(function() { resizeHomeDiv(); checkPortfolioNav(); resizePort(); portfolioAnchorTags(); resizeAbout(); });
	$(window).scroll(function() { checkPortfolioNav(); });
	$(window).load(function() { resizePort(); resizeAbout(); });

	function resizeHomeDiv() {
		var windowHeight = $(window).height();
		var windowWidth = $(window).width();
		$('#home').css({'height': windowHeight, 'width': windowWidth});

		var fromTopHome = $('.down-from-home').offset().top * 1;
		var x = windowHeight - fromTopHome - 57;
		$('.down-from-home').css({'margin-top': x, 'z-index': 10});
	}

	function resizeAbout() {
		var wellHeight = $('.well').height();
		$('#about').height(wellHeight + 100);
	}

	function resizePort() {
		//have to figure out the current height of each of the divs, then add it all up
		var peopleHeight = $('#people').outerHeight(true);
		var animalHeight = $('#animals').outerHeight(true);
		var placesHeight = $('#places-things').outerHeight(true);
		var tallest = Math.max(peopleHeight, animalHeight, placesHeight);
		tallest = tallest + 300;

		if ($(window).width() < 768) {
			var actualHeight = peopleHeight + animalHeight + placesHeight + 300;
			$('#portfolio').css('height', actualHeight);
		} else {
			$('#portfolio').css('height', tallest);
		}
	}

	function portfolioAnchorTags() {
		if ($(window).width() < 768) {
			$('.port-nav-anchor').removeClass('disabled');
		} else {
			$('.port-nav-anchor').addClass('disabled');
		}
	}

	$(function() {
		$('a[href*=#]:not([href=#])').click(function() {
			if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') || location.hostname == this.hostname) {

				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
				if (target.length) {
					$('html,body').animate({
						scrollTop: target.offset().top
					}, 1000);
					return false;
				}
			}
		});
	});


	//when modal button is clicked, hide everything except for the description and order buttons
	//
	$('.modal-orig-print input').on('click', function() {
		$('.btn-etsy').removeAttr('disabled');
		$('.btn-paypal').removeAttr('disabled');
	});

	$('.btn-paypal').on('click', function() {
		$('.modal-size').show();
	});

	$('.modal-size input').on('click', function() {
		$('.modal-paper').show();
	});

	$('.modal-paper input').on('click', function() {
		$('.modal-paypal').show();
	});


	//All PayPal variables

	var afr_wom_8_10 = "-----BEGIN PKCS7-----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-----END PKCS7-----";
	var afr_wom_11_14 = "";
	var app_8_10
	var app_11_14
	var bab_don_8_10
	var bab_don_11_14
	var bea_wal_8_10
	var bea_wal_11_14
	var bir_tre_8_10
	var bir_tre_11_14
	var blu_win_8_10
	var blu_win_11_14
	var bri_8_10
	var bri_11_14
	var cow_in_pas_8_10
	var cow_in_pas_11_14
	var dol_5_7
	var dol_8_12
	var dol_9_12
	var epc_8_10
	var epc_11_14
	var gol_5_7
	var gol_8_12
	var gol_9_12
	var gre_win_8_10
	var gre_win_11_14
	var hea_sou_8_10
	var hea_sou_9_12
	var hea_sou_11_14
	var jel_9_12
	var jel_11_15
	var kar_8_10
	var kar_11_14
	var kha_8_12
	var kha_11_14
	var kov_orig
	var kov_8_10
	var kov_11_14
	var leo_9_12
	var leo_11_14
	var lig_blu_win_8_10
	var lig_blu_win_11_14
	var oce_8_10
	var oce_11_14
	var owl_8_12
	var owl_10_15
	var peo_5_7
	var peo_8_12
	var peo_9_12
	var pep_str_8_10
	var pep_str_11_14
	var pet_rab_orig
	var pet_rab_8_10
	var pet_rab_9_12
	var pet_rab_11_14
	var pon_ser_8_8
	var pon_ser_12_12
	var pop_orig
	var pop_8_10
	var pop_11_14
	var pum_pat_orig
	var pum_pat_8_10
	var 
	var 
	var 



});