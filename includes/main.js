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
	var payPal = {
		"afr_wom_8_10" : "-----BEGIN PKCS7-----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-----END PKCS7-----",
		"afr_wom_11_14" : "-----BEGIN PKCS7-----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-----END PKCS7-----",
		"app_8_10" : "-----BEGIN PKCS7-----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-----END PKCS7-----",
		"app_11_14" : "-----BEGIN PKCS7-----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-----END PKCS7-----",
		"bab_don_8_10" : "",
		"bab_don_11_14" : "",
		"bea_wal_8_10" : "",
		"bea_wal_11_14" : "",
		"bir_tre_8_10" : "",
		"bir_tre_11_14" : "",
		"blu_win_8_10" : "",
		"blu_win_11_14" : "",
		"bri_8_10" : "",
		"bri_11_14" : "",
		"cow_in_pas_8_10" : "",
		"cow_in_pas_11_14" : "",
		"dol_5_7" : "",
		"dol_8_12" : "",
		"dol_9_12" : "",
		"epc_8_10" : "",
		"epc_11_14" : "",
		"gol_5_7" : "",
		"gol_8_12" : "",
		"gol_9_12" : "",
		"gre_win_8_10" : "",
		"gre_win_11_14" : "",
		"hea_sou_8_10" : "",
		"hea_sou_9_12" : "",
		"hea_sou_11_14" : "",
		"jel_9_12" : "",
		"jel_11_15" : "",
		"kar_8_10" : "",
		"kar_11_14" : "",
		"kha_8_12" : "",
		"kha_11_14" : "",
		"kov_orig" : "",
		"kov_8_10" : "",
		"kov_11_14" : "",
		"leo_9_12" : "",
		"leo_11_14" : "",
		"lig_blu_win_8_10" : "",
		"lig_blu_win_11_14" : "",
		"oce_8_10" : "",
		"oce_11_14" : "",
		"owl_8_12" : "",
		"owl_10_15" : "",
		"peo_5_7" : "",
		"peo_8_12" : "",
		"peo_9_12" : "",
		"pep_str_8_10" : "",
		"pep_str_11_14" : "",
		"pet_rab_orig" : "",
		"pet_rab_8_10" : "",
		"pet_rab_9_12" : "",
		"pet_rab_11_14" : "",
		"pon_ser_8_8" : "",
		"pon_ser_12_12" : "",
		"pop_orig" : "",
		"pop_8_10" : "",
		"pop_11_14" : "",
		"pum_pat_orig" : "",
		"pum_pat_8_10" : "",
		"pum_pat_11_14" : "",
		"red_win_8_10" : "",
		"red_win_11_14" : "",
		"ril_8_10" : "",
		"ril_11_14" : "",
		"sea_8_10" : "",
		"sea_9_12" : "",
		"sea_11_14" : "",
		"suc_8_10" : "",
		"suc_11_14" : "",
		"swi_the_fox_5_7" : "",
		"swi_the_fox_8_12" : "",
		"swi_the_fox_9_12" : "",
		"thr_lam_8_10" : "",
		"thr_lam_11_14" : "",
		"wat_lil_14_4" : "",
		"yel_ski_8_11" : "",
		"yel_ski_11_15" : ""
	};




});