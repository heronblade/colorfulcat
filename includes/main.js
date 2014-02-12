$(document).ready(function() {

	//image popups
	$('.portfolio-images a.port-popup').Chocolat();

	//variables
	var windowHeight = $(window).height();

	//On page load make the home div the width and height of the current window, also resize the portfolio div
	resizeHomeDiv();
	portfolioAnchorTags();

	$(window).resize(function() { resizeHomeDiv(); resizePort(); portfolioAnchorTags(); });
	$(window).load(function() { resizePort(); });

	function resizeHomeDiv() {
		var windowHeight = $(window).height() + 1000;
		var windowWidth = $(window).width();
		$('#home').css({'height': windowHeight, 'width': windowWidth});

		// var fromTopHome = $('.down-from-home').offset().top * 1;
		// var x = windowHeight - fromTopHome - 557;
		// $('.down-from-home').css({'margin-top': x, 'z-index': 10});
	}

	function resizeAbout() {
		var well1 = $('.well1').height();
		var well2 = $('.well2').height();
		var well3 = $('.well3').height();
		var both = well1 + well2 + well3;
		$('#about').height(both + 420);
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

	$('.order-btn').on('click', function() {
		var target = $(this).data('target');
		var origVsPrint = $(target + ' .modal-body').children('.modal-orig-print').size();

		if (origVsPrint === 0) {
			$('.btn-etsy').removeAttr('disabled');
			$('.btn-paypal').removeAttr('disabled');
		}

		$('.modal-paypal').hide();
	})

	$('.modal-orig-print').on('click', function() {
		$('.btn-etsy').removeAttr('disabled');
		$('.btn-paypal').removeAttr('disabled');
	});

	$('.btn-paypal').on('click', function() {
		$('.modal-size').show();
		$('.modal-paypal').show();
	});


	//When question mark's clicked, show the next span
	//Hide them all first though
		// $('.shipping-question-answered').hide();
		// $('.refund-exchange-question-answered').hide();
		// $('.policies-question-answered').hide();
		// $('.materials-question-answered').hide();

		// $('.shipping-question').on('click', function() {
		// 	if ($('.shipping-question-answered').css('display') == 'none') {
		// 		$('.shipping-question-answered').show();
		// 		var aboutHeight = $('#about').height();
		// 		var newHeight = aboutHeight + 100;
		// 		$('#about').height(newHeight);
		// 	} else {
		// 		$('.shipping-question-answered').hide();
		// 		var aboutHeight = $('#about').height();
		// 		var newHeight = aboutHeight - 100;
		// 		$('#about').height(newHeight);
		// 	}
		// });

		// $('.refund-exchanges-question').on('click', function() {
		// 	if ($('.refund-exchange-question-answered').css('display') == 'none') {
		// 		$('.refund-exchange-question-answered').show();
		// 		var aboutHeight = $('#about').height();
		// 		var newHeight = aboutHeight + 100;
		// 		$('#about').height(newHeight);
		// 	} else {
		// 		$('.refund-exchange-question-answered').hide();
		// 		var aboutHeight = $('#about').height();
		// 		var newHeight = aboutHeight - 100;
		// 		$('#about').height(newHeight);
		// 	}
		// });

		// $('.policies-question').on('click', function() {
		// 	if ($('.policies-question-answered').css('display') == 'none') {
		// 		$('.policies-question-answered').show();
		// 		var aboutHeight = $('#about').height();
		// 		var newHeight = aboutHeight + 100;
		// 		$('#about').height(newHeight);
		// 	} else {
		// 		$('.policies-question-answered').hide();
		// 		var aboutHeight = $('#about').height();
		// 		var newHeight = aboutHeight - 100;
		// 		$('#about').height(newHeight);
		// 	}
		// });

		// $('.materials-question').on('click', function() {
		// 	if ($('.materials-question-answered').css('display') == 'none') {
		// 		$('.materials-question-answered').show();
		// 		var aboutHeight = $('#about').height();
		// 		var newHeight = aboutHeight + 100;
		// 		$('#about').height(newHeight);
		// 	} else {
		// 		$('.materials-question-answered').hide();
		// 		var aboutHeight = $('#about').height();
		// 		var newHeight = aboutHeight - 150;
		// 		$('#about').height(newHeight);
		// 	}
		// });



	//Scrolling images into view
	$(window).scroll(checkPortfolioHeight);

	function checkPortfolioHeight() {
		var scrollTop = $(window).scrollTop();
		var portfolioOffset = $('#portfolio').offset().top;
		var distance = (portfolioOffset - scrollTop) + 100;

		if ((scrollTop + 400) >= portfolioOffset) {
			setTimeout(addColor, 500);
		}
	}

	function addColor() {

		var windowWidth = $(window).width();
		var windowHeight = $(window).height();

		//get an array of all thumbnails
		var thumbs = $('.thumbnail').get();
		var thumbCount = thumbs.length;

		for (var i = 0; i < thumbCount; i++) {
			var currentThumb = thumbs[i];

			var image = $(currentThumb).find('img');

			var space = isScrolledIntoView(image);

			if (space) {
				currentThumb.style.webkitFilter = 'grayscale(0%)';
			} else {
				currentThumb.style.webkitFilter = 'grayscale(100%)';
			}
		}

		function isScrolledIntoView(elem) {
			var docViewTop = $(window).scrollTop();
			var docViewBottom = docViewTop + $(window).height();

			var elemTop = $(elem).offset().top;
			var elemBottom = elemTop + $(elem).height();

			if (elemBottom <= docViewBottom) {
				return true;
			} else {
				return false;
			}
		}
	}






	// Original vs Print Etsy
		$('.poppy-orig').on('click', function() {
			var paypalForm = '<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank"><input type="hidden" name="cmd" value="_xclick"><input type="hidden" name="business" value="DDFZEXCEVEJQG"><input type="hidden" name="lc" value="US"><input type="hidden" name="item_name" value="Poppy"><input type="hidden" name="item_number" value="pop"><input type="hidden" name="button_subtype" value="services"><input type="hidden" name="currency_code" value="USD"><input type="hidden" name="shipping" value="5.00"><input type="hidden" name="bn" value="PP-BuyNowBF:btn_buynow_SM.gif:NonHosted"><div class="paypal-options"><div class="paypal-options-sizes"><input type="hidden" name="on0" value="Sizes">Sizes<select name="os0"><option value="orig">Original $175 USD</option></select></div><div class="paypal-options-paper-type"><input type="hidden" name="on1" value="Paper Type">Paper Type<select name="os1"><option value="Watercolor">Watercolor </option><option value="Photo Paper">Photo Paper </option></select></div></div><input type="hidden" name="currency_code" value="USD"><input type="hidden" name="option_select0" value="orig"><input type="hidden" name="option_amount0" value="175"><input type="hidden" name="option_index" value="0"><input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynow_SM.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"><img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"></form>';
			$('.poppy-etsy-btn').attr('href', 'http://www.etsy.com/listing/165057267/poppy-painting-original-watercolor?ref=shop_home_active');
			$('.poppy-modal-paypal').html(paypalForm);
		});

		$('.poppy-print').on('click', function() {
			var paypalForm = '<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank"><input type="hidden" name="cmd" value="_xclick"><input type="hidden" name="business" value="DDFZEXCEVEJQG"><input type="hidden" name="lc" value="US"><input type="hidden" name="item_name" value="Poppy"><input type="hidden" name="item_number" value="pop"><input type="hidden" name="button_subtype" value="services"><input type="hidden" name="currency_code" value="USD"><input type="hidden" name="shipping" value="5.00"><input type="hidden" name="bn" value="PP-BuyNowBF:btn_buynow_SM.gif:NonHosted"><div class="paypal-options"><div class="paypal-options-sizes"><input type="hidden" name="on0" value="Sizes">Sizes<select name="os0"><option value="8x10">8x10 $25 USD</option><option value="11x14">11x14 $35 USD</option></select></div><div class="paypal-options-paper-type"><input type="hidden" name="on1" value="Paper Type">Paper Type<select name="os1"><option value="Watercolor">Watercolor </option><option value="Photo Paper">Photo Paper </option></select></div></div><input type="hidden" name="currency_code" value="USD"><input type="hidden" name="option_select0" value="8x10"><input type="hidden" name="option_amount0" value="25"><input type="hidden" name="option_select1" value="11x14"><input type="hidden" name="option_amount1" value="35"><input type="hidden" name="option_index" value="0"><input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynow_SM.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"><img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"></form>';
			$('.poppy-etsy-btn').attr('href', 'http://www.etsy.com/listing/164843491/flower-painting-print-from-original?ref=shop_home_active');
			$('.poppy-modal-paypal').html(paypalForm);
		});

		$('.pumpking-patch-orig').on('click', function() {
			var paypalForm = '<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank"><input type="hidden" name="cmd" value="_xclick"><input type="hidden" name="business" value="DDFZEXCEVEJQG"><input type="hidden" name="lc" value="US"><input type="hidden" name="item_name" value="Pumpking Patch"><input type="hidden" name="item_number" value="pum-pat"><input type="hidden" name="button_subtype" value="services"><input type="hidden" name="currency_code" value="USD"><input type="hidden" name="shipping" value="5.00"><input type="hidden" name="bn" value="PP-BuyNowBF:btn_buynow_SM.gif:NonHosted"><div class="paypal-options"><div class="paypal-options-sizes"><input type="hidden" name="on0" value="Sizes">Sizes<select name="os0"><option value="orig">Original $200 USD</option></select></div><div class="paypal-options-paper-type"><input type="hidden" name="on1" value="Paper Type">Paper Type<select name="os1"><option value="Watercolor">Watercolor </option><option value="Photo Paper">Photo Paper </option></select></div></div><input type="hidden" name="currency_code" value="USD"><input type="hidden" name="option_select0" value="orig"><input type="hidden" name="option_amount0" value="200"><input type="hidden" name="option_index" value="0"><input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynow_SM.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"><img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"></form>';
			$('.pumpking-patch-etsy-btn').attr('href', 'http://www.etsy.com/listing/165278304/pumpkin-painting-original-watercolor?ref=shop_home_active');
			$('.pumpkin-patch-paypal').html(paypalForm);
		});

		$('.pumpking-patch-print').on('click', function() {
			var paypalForm = '<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank"><input type="hidden" name="cmd" value="_xclick"><input type="hidden" name="business" value="DDFZEXCEVEJQG"><input type="hidden" name="lc" value="US"><input type="hidden" name="item_name" value="Pumpking Patch"><input type="hidden" name="item_number" value="pum-pat"><input type="hidden" name="button_subtype" value="services"><input type="hidden" name="currency_code" value="USD"><input type="hidden" name="shipping" value="5.00"><input type="hidden" name="bn" value="PP-BuyNowBF:btn_buynow_SM.gif:NonHosted"><div class="paypal-options"><div class="paypal-options-sizes"><input type="hidden" name="on0" value="Sizes">Sizes<select name="os0"><option value="8x10">8x10 $25 USD</option><option value="11x14">11x14 $35 USD</option></select></div><div class="paypal-options-paper-type"><input type="hidden" name="on1" value="Paper Type">Paper Type<select name="os1"><option value="Watercolor">Watercolor </option><option value="Photo Paper">Photo Paper </option></select></div></div><input type="hidden" name="currency_code" value="USD"><input type="hidden" name="option_select0" value="8x10"><input type="hidden" name="option_amount0" value="25"><input type="hidden" name="option_select1" value="11x14"><input type="hidden" name="option_amount1" value="35"><input type="hidden" name="option_index" value="0"><input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynow_SM.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"><img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"></form>';
			$('.pumpking-patch-etsy-btn').attr('href', 'http://www.etsy.com/listing/164830342/pumpkin-painting-print-from-original?ref=shop_home_active');
			$('.pumpkin-patch-paypal').html(paypalForm);
		});

		$('.green-window-orig').on('click', function() {
			var paypalForm = '<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank"><input type="hidden" name="cmd" value="_xclick"><input type="hidden" name="business" value="DDFZEXCEVEJQG"><input type="hidden" name="lc" value="US"><input type="hidden" name="item_name" value="Green Window"><input type="hidden" name="item_number" value="gre-win"><input type="hidden" name="button_subtype" value="services"><input type="hidden" name="currency_code" value="USD"><input type="hidden" name="shipping" value="5.00"><input type="hidden" name="bn" value="PP-BuyNowBF:btn_buynow_SM.gif:NonHosted"><div class="paypal-options"><div class="paypal-options-sizes"><input type="hidden" name="on0" value="Sizes">Sizes<select name="os0"><option value="orig">Original $200 USD</option></select></div><div class="paypal-options-paper-type"><input type="hidden" name="on1" value="Paper Type">Paper Type<select name="os1"><option value="Watercolor">Watercolor </option><option value="Photo Paper">Photo Paper </option></select></div></div><input type="hidden" name="currency_code" value="USD"><input type="hidden" name="option_select0" value="orig"><input type="hidden" name="option_amount0" value="200"><input type="hidden" name="option_index" value="0"><input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynow_SM.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"><img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"></form>';
			$('.green-window-etsy-btn').attr('href', 'http://www.etsy.com/listing/163510960/window-painting-original-watercolor?ref=shop_home_active');
			$('.green-window-paypal').html(paypalForm);
		});

		$('.green-window-print').on('click', function() {
			var paypalForm = '<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank"><input type="hidden" name="cmd" value="_xclick"><input type="hidden" name="business" value="DDFZEXCEVEJQG"><input type="hidden" name="lc" value="US"><input type="hidden" name="item_name" value="Green Window"><input type="hidden" name="item_number" value="gre-win"><input type="hidden" name="button_subtype" value="services"><input type="hidden" name="currency_code" value="USD"><input type="hidden" name="shipping" value="5.00"><input type="hidden" name="bn" value="PP-BuyNowBF:btn_buynow_SM.gif:NonHosted"><div class="paypal-options"><div class="paypal-options-sizes"><input type="hidden" name="on0" value="Sizes">Sizes<select name="os0"><option value="8x10">8x10 $25 USD</option><option value="11x14">11x14 $35 USD</option></select></div><div class="paypal-options-paper-type"><input type="hidden" name="on1" value="Paper Type">Paper Type<select name="os1"><option value="Watercolor">Watercolor </option><option value="Photo Paper">Photo Paper </option></select></div></div><input type="hidden" name="currency_code" value="USD"><input type="hidden" name="option_select0" value="8x10"><input type="hidden" name="option_amount0" value="25"><input type="hidden" name="option_select1" value="11x14"><input type="hidden" name="option_amount1" value="35"><input type="hidden" name="option_index" value="0"><input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynow_SM.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"><img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"></form>';
			$('.green-window-etsy-btn').attr('href', 'http://www.etsy.com/listing/163515823/window-painting-print-from-original?ref=shop_home_active');
			$('.green-window-paypal').html(paypalForm);
		});

		$('.red-window-orig').on('click', function() {
			var paypalForm = '<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank"><input type="hidden" name="cmd" value="_xclick"><input type="hidden" name="business" value="DDFZEXCEVEJQG"><input type="hidden" name="lc" value="US"><input type="hidden" name="item_name" value="Red Window"><input type="hidden" name="item_number" value="gre-win"><input type="hidden" name="button_subtype" value="services"><input type="hidden" name="currency_code" value="USD"><input type="hidden" name="shipping" value="5.00"><input type="hidden" name="bn" value="PP-BuyNowBF:btn_buynow_SM.gif:NonHosted"><div class="paypal-options"><div class="paypal-options-sizes"><input type="hidden" name="on0" value="Sizes">Sizes<select name="os0"><option value="orig">Original $200 USD</option></select></div><div class="paypal-options-paper-type"><input type="hidden" name="on1" value="Paper Type">Paper Type<select name="os1"><option value="Watercolor">Watercolor </option><option value="Photo Paper">Photo Paper </option></select></div></div><input type="hidden" name="currency_code" value="USD"><input type="hidden" name="option_select0" value="orig"><input type="hidden" name="option_amount0" value="200"><input type="hidden" name="option_index" value="0"><input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynow_SM.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"><img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"></form>';
			$('.red-window-etsy-btn').attr('href', 'http://www.etsy.com/listing/165483112/window-painting-original-watercolor?ref=shop_home_active');
			$('.red-window-paypal').html(paypalForm);
		});

		$('.red-window-print').on('click', function() {
			var paypalForm = '<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank"><input type="hidden" name="cmd" value="_xclick"><input type="hidden" name="business" value="DDFZEXCEVEJQG"><input type="hidden" name="lc" value="US"><input type="hidden" name="item_name" value="Red Window"><input type="hidden" name="item_number" value="red-win"><input type="hidden" name="button_subtype" value="services"><input type="hidden" name="currency_code" value="USD"><input type="hidden" name="shipping" value="5.00"><input type="hidden" name="bn" value="PP-BuyNowBF:btn_buynow_SM.gif:NonHosted"><div class="paypal-options"><div class="paypal-options-sizes"><input type="hidden" name="on0" value="Sizes">Sizes<select name="os0"><option value="8x10">8x10 $25 USD</option><option value="11x14">11x14 $35 USD</option></select></div><div class="paypal-options-paper-type"><input type="hidden" name="on1" value="Paper Type">Paper Type<select name="os1"><option value="Watercolor">Watercolor </option><option value="Photo Paper">Photo Paper </option></select></div></div><input type="hidden" name="currency_code" value="USD"><input type="hidden" name="option_select0" value="8x10"><input type="hidden" name="option_amount0" value="25"><input type="hidden" name="option_select1" value="11x14"><input type="hidden" name="option_amount1" value="35"><input type="hidden" name="option_index" value="0"><input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynow_SM.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"><img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"></form>';
			$('.red-window-etsy-btn').attr('href', 'http://www.etsy.com/listing/164841917/window-painting-print-from-original?ref=shop_home_active');
			$('.red-window-paypal').html(paypalForm);
		});


		$('.fairy-tale-chapter-3-orig').on('click', function() { 
			var paypalForm = '<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank"><input type="hidden" name="cmd" value="_xclick"><input type="hidden" name="business" value="DDFZEXCEVEJQG"><input type="hidden" name="lc" value="US"><input type="hidden" name="item_name" value="Fairy Tale Chapter 3"><input type="hidden" name="item_number" value="fairy-tale-chapter-3"><input type="hidden" name="button_subtype" value="services"><input type="hidden" name="currency_code" value="USD"><input type="hidden" name="shipping" value="5.00"><input type="hidden" name="bn" value="PP-BuyNowBF:btn_buynow_SM.gif:NonHosted"><div class="paypal-options"><div class="paypal-options-sizes"><input type="hidden" name="on0" value="Sizes">Sizes<select name="os0"><option value="orig">Original $450 USD</option></select></div></div><input type="hidden" name="currency_code" value="USD"><input type="hidden" name="option_select0" value="orig"><input type="hidden" name="option_amount0" value="450"><input type="hidden" name="option_index" value="0"><input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynow_SM.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"><img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"></form>';
			$('.fairy-tale-chapter-3-btn').attr('href', 'https://www.etsy.com/listing/177587385/original-french-town-painting-original?ref=shop_home_active_19');
			$('.fairy-tale-chapter-3-paypal').html(paypalForm);
		});

		$('.fairy-tale-chapter-3-print').on('click', function() {
			var paypalForm = '<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank"><input type="hidden" name="cmd" value="_xclick"><input type="hidden" name="business" value="DDFZEXCEVEJQG"><input type="hidden" name="lc" value="US"><input type="hidden" name="item_name" value="Fairy Tale Chapter 3"><input type="hidden" name="item_number" value="fairy-tale-chapter-3"><input type="hidden" name="button_subtype" value="services"><input type="hidden" name="currency_code" value="USD"><input type="hidden" name="shipping" value="5.00"><input type="hidden" name="bn" value="PP-BuyNowBF:btn_buynow_SM.gif:NonHosted"><div class="paypal-options"><div class="paypal-options"><div class="paypal-options-sizes"><input type="hidden" name="on0" value="Sizes">Sizes<select name="os0"><option value="8x12">8x12 $30 USD</option><option value="13x19">13x19 $50 USD</option><option value="20x30">20x30 $85 USD</option></select></div><div class="paypal-options-paper-type"><input type="hidden" name="on1" value="Paper Type">Paper Type<select name="os1"><option value="Watercolor">Watercolor </option><option value="Photo Paper">Photo Paper </option></select></div></div></div><input type="hidden" name="currency_code" value="USD"><input type="hidden" name="option_select0" value="8x12"><input type="hidden" name="option_amount0" value="35"><input type="hidden" name="option_select1" value="13x19"><input type="hidden" name="option_amount1" value="50"><input type="hidden" name="option_select2" value="20x30"><input type="hidden" name="option_amount2" value="85"><input type="hidden" name="option_index" value="0"><input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynow_SM.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"><img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"></form>';
			$('.fairy-tale-chapter-3-btn').attr('href', 'https://www.etsy.com/listing/177585803/french-town-painting-print-from-original?ref=shop_home_feat_1');
			$('.fairy-tale-chapter-3-paypal').html(paypalForm);
		});

		$('.cherries-orig').on('click', function() { 
			var paypalForm = '<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank"><input type="hidden" name="cmd" value="_xclick"><input type="hidden" name="business" value="DDFZEXCEVEJQG"><input type="hidden" name="lc" value="US"><input type="hidden" name="item_name" value="Cherries"><input type="hidden" name="item_number" value="cherries"><input type="hidden" name="button_subtype" value="services"><input type="hidden" name="currency_code" value="USD"><input type="hidden" name="shipping" value="5.00"><input type="hidden" name="bn" value="PP-BuyNowBF:btn_buynow_SM.gif:NonHosted"><div class="paypal-options"><div class="paypal-options"><div class="paypal-options-sizes"><input type="hidden" name="on0" value="Sizes">Sizes<select name="os0"><option value="orig">5x7 $95 USD</option></select></div></div></div><input type="hidden" name="currency_code" value="USD"><input type="hidden" name="option_select0" value="orig"><input type="hidden" name="option_amount0" value="95"><input type="hidden" name="option_index" value="0"><input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynow_SM.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"><img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"></form>';
			$('.cherries-btn').attr('href', 'https://www.etsy.com/listing/178104682/sale-original-cherry-painting-original?ref=shop_home_active_4');
			$('.cherries-paypal').html(paypalForm);
		});

		$('.cherries-print').on('click', function() {
			var paypalForm = '<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank"><input type="hidden" name="cmd" value="_xclick"><input type="hidden" name="business" value="DDFZEXCEVEJQG"><input type="hidden" name="lc" value="US"><input type="hidden" name="item_name" value="Cherries"><input type="hidden" name="item_number" value="cherries"><input type="hidden" name="button_subtype" value="services"><input type="hidden" name="currency_code" value="USD"><input type="hidden" name="shipping" value="5.00"><input type="hidden" name="bn" value="PP-BuyNowBF:btn_buynow_SM.gif:NonHosted"><div class="paypal-options"><div class="paypal-options"><div class="paypal-options-sizes"><input type="hidden" name="on0" value="Sizes">Sizes<select name="os0"><option value="5x7">5x7 $15 USD</option><option value="8x12">8x12 $30 USD</option><option value="9x12">9x12 $30 USD</option></select></div><div class="paypal-options-paper-type"><input type="hidden" name="on1" value="Paper Type">Paper Type<select name="os1"><option value="Watercolor">Watercolor </option><option value="Photo Paper">Photo Paper </option></select></div></div></div><input type="hidden" name="currency_code" value="USD"><input type="hidden" name="option_select0" value="5x7"><input type="hidden" name="option_amount0" value="15"><input type="hidden" name="option_select1" value="8x12"><input type="hidden" name="option_amount1" value="30"><input type="hidden" name="option_select2" value="9x12"><input type="hidden" name="option_amount2" value="30"><input type="hidden" name="option_index" value="0"><input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynow_SM.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"><img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"></form>';
			$('.cherries-btn').attr('href', 'https://www.etsy.com/listing/170903855/fruit-painting-print-from-original?ref=shop_home_active_9');
			$('.cherries-paypal').html(paypalForm);
		});

		$('.frozen-leaves-orig').on('click', function() { 
			var paypalForm = '<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank"><input type="hidden" name="cmd" value="_xclick"><input type="hidden" name="business" value="DDFZEXCEVEJQG"><input type="hidden" name="lc" value="US"><input type="hidden" name="item_name" value="Frozen Leaves"><input type="hidden" name="item_number" value="frozen-leaves"><input type="hidden" name="button_subtype" value="services"><input type="hidden" name="currency_code" value="USD"><input type="hidden" name="shipping" value="5.00"><input type="hidden" name="bn" value="PP-BuyNowBF:btn_buynow_SM.gif:NonHosted"><div class="paypal-options"><div class="paypal-options"><div class="paypal-options-sizes"><input type="hidden" name="on0" value="Sizes">Sizes<select name="os0"><option value="orig">5x7 $95 USD</option></select></div></div></div><input type="hidden" name="currency_code" value="USD"><input type="hidden" name="option_select0" value="orig"><input type="hidden" name="option_amount0" value="95"><input type="hidden" name="option_index" value="0"><input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynow_SM.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"><img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"></form>';
			
			$('.frozen-leaves-btn').attr('href', 'https://www.etsy.com/listing/178115493/sale-original-winter-painting-original?ref=shop_home_active_5');
			$('.frozen-leaves-paypal').html(paypalForm);
		});

		$('.frozen-leaves-print').on('click', function() {
			var paypalForm = '<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank"><input type="hidden" name="cmd" value="_xclick"><input type="hidden" name="business" value="DDFZEXCEVEJQG"><input type="hidden" name="lc" value="US"><input type="hidden" name="item_name" value="Frozen Leaves"><input type="hidden" name="item_number" value="frozen-leaves"><input type="hidden" name="button_subtype" value="services"><input type="hidden" name="currency_code" value="USD"><input type="hidden" name="shipping" value="5.00"><input type="hidden" name="bn" value="PP-BuyNowBF:btn_buynow_SM.gif:NonHosted"><div class="paypal-options"><div class="paypal-options"><div class="paypal-options-sizes"><input type="hidden" name="on0" value="Sizes">Sizes<select name="os0"><option value="5x7">8x12 $15 USD</option><option value="8x12">13x19 $30 USD</option><option value="9x12">20x30 $30 USD</option></select></div><div class="paypal-options-paper-type"><input type="hidden" name="on1" value="Paper Type">Paper Type<select name="os1"><option value="Watercolor">Watercolor </option><option value="Photo Paper">Photo Paper </option></select></div></div></div><input type="hidden" name="currency_code" value="USD"><input type="hidden" name="option_select0" value="5x7"><input type="hidden" name="option_amount0" value="15"><input type="hidden" name="option_select1" value="8x12"><input type="hidden" name="option_amount1" value="30"><input type="hidden" name="option_select2" value="9x12"><input type="hidden" name="option_amount2" value="30"><input type="hidden" name="option_index" value="0"><input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynow_SM.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"><img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"></form>';
			$('.frozen-leaves-btn').attr('href', 'https://www.etsy.com/listing/170903021/winter-painting-print-from-original?ref=shop_home_active_10');
			$('.frozen-leaves-paypal').html(paypalForm);
		});

		$('.anatomy-study-print').on('click', function() {
			var paypalForm = '<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank"><input type="hidden" name="cmd" value="_xclick"><input type="hidden" name="business" value="DDFZEXCEVEJQG"><input type="hidden" name="lc" value="US"><input type="hidden" name="item_name" value="Anatomy Study"><input type="hidden" name="item_number" value="anatomy-study"><input type="hidden" name="button_subtype" value="services"><input type="hidden" name="currency_code" value="USD"><input type="hidden" name="shipping" value="5.00"><input type="hidden" name="bn" value="PP-BuyNowBF:btn_buynow_SM.gif:NonHosted"><div class="paypal-options"><div class="paypal-options"><div class="paypal-options-sizes"><input type="hidden" name="on0" value="Sizes">Sizes<select name="os0"><option value="8x12">8x12 $30 USD</option><option value="13x19">13x19 $50 USD</option><option value="20x30">20x30 $85 USD</option></select></div><div class="paypal-options-paper-type"><input type="hidden" name="on1" value="Paper Type">Paper Type<select name="os1"><option value="Watercolor">Watercolor </option><option value="Photo Paper">Photo Paper </option></select></div></div></div><input type="hidden" name="currency_code" value="USD"><input type="hidden" name="option_select0" value="8x12"><input type="hidden" name="option_amount0" value="35"><input type="hidden" name="option_select1" value="13x19"><input type="hidden" name="option_amount1" value="50"><input type="hidden" name="option_select2" value="20x30"><input type="hidden" name="option_amount2" value="85"><input type="hidden" name="option_index" value="0"><input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynow_SM.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"><img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"></form>';
			$('.anatomy-study-btn').attr('href', 'https://www.etsy.com/listing/177798009/classical-anatomy-drawing-print-from?ref=shop_home_active_17');
			$('.anatomy-study-paypal').html(paypalForm);
		});

}); //document.ready