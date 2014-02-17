$(document).ready(function() {

	//image popups
	// $('.portfolio-images a.port-popup').Chocolat();
	$('.portfolio-images a.port-popup').magnificPopup({type:'image'});

	//variables
	var windowHeight = $(window).height();

	//On page load make the home div the width and height of the current window, also resize the portfolio div
	resizeHomeDiv();
	portfolioAnchorTags();

	$(window).resize(function() { resizeHomeDiv(); portfolioAnchorTags(); });
	$(window).load(function() { addLefters(); addRighters(); });

	function resizeHomeDiv() {
		var windowHeight = $(window).height() + 1500;
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

	function portfolioAnchorTags() {
		if ($(window).width() < 768) {
			$('.port-nav-anchor').removeClass('disabled');
		} else {
			$('.port-nav-anchor').addClass('disabled');
		}
	}

	function addLefters() {
		var oceanStudyHeight = $('#ocean-study').height();
		$('.ocean-study-lefter').css('height', oceanStudyHeight);
	}

	function addRighters() {
		var oceanStudyHeight = $('#ocean-study').height();
		$('.ocean-study-righter').css('height', oceanStudyHeight);
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

		$('.sparrow-orig').on('click', function() {
			var paypalForm = '<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank"><input type="hidden" name="cmd" value="_xclick"><input type="hidden" name="business" value="DDFZEXCEVEJQG"><input type="hidden" name="lc" value="US"><input type="hidden" name="item_name" value="Sparrow"><input type="hidden" name="item_number" value="sparrow"><input type="hidden" name="button_subtype" value="services"><input type="hidden" name="currency_code" value="USD"><input type="hidden" name="shipping" value="5.00"><input type="hidden" name="bn" value="PP-BuyNowBF:btn_buynow_SM.gif:NonHosted"><div class="paypal-options"><div class="paypal-options"><div class="paypal-options-sizes"><input type="hidden" name="on0" value="Sizes">Sizes<select name="os0"><option value="orig">8x12 $125 USD</option></select></div></div></div><input type="hidden" name="currency_code" value="USD"><input type="hidden" name="option_select0" value="orig"><input type="hidden" name="option_amount0" value="125"><input type="hidden" name="option_index" value="0"><input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynow_SM.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"><img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"></form>';
			$('.sparrow-paypal').html(paypalForm);
			$('.sparrow-btn').hide();
		});

		$('.sparrow-print').on('click', function() {
			var paypalForm = '<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank"><input type="hidden" name="cmd" value="_xclick"><input type="hidden" name="business" value="DDFZEXCEVEJQG"><input type="hidden" name="lc" value="US"><input type="hidden" name="item_name" value="Sparrow"><input type="hidden" name="item_number" value="sparrow"><input type="hidden" name="button_subtype" value="services"><input type="hidden" name="currency_code" value="USD"><input type="hidden" name="shipping" value="5.00"><input type="hidden" name="bn" value="PP-BuyNowBF:btn_buynow_SM.gif:NonHosted"><div class="paypal-options"><div class="paypal-options"><div class="paypal-options-sizes"><input type="hidden" name="on0" value="Sizes">Sizes<select name="os0"><option value="5x7">5x7 $15 USD</option><option value="8x10">8x10 $25 USD</option><option value="9x12">9x12 $30 USD</option><option value="11x14">11x14 $40 USD</option><option value="13x19">13x19 $50 USD</option><option value="16x20">16x20 $60 USD</option></select></div><div class="paypal-options-paper-type"><input type="hidden" name="on1" value="Paper Type">Paper Type<select name="os1"><option value="Watercolor">Watercolor </option><option value="Photo Paper">Photo Paper </option></select></div></div></div><input type="hidden" name="currency_code" value="USD"><input type="hidden" name="option_select0" value="5x7"><input type="hidden" name="option_amount0" value="15"><input type="hidden" name="option_select0" value="8x10"><input type="hidden" name="option_amount0" value="25"><input type="hidden" name="option_select0" value="9x12"><input type="hidden" name="option_amount0" value="30"><input type="hidden" name="option_select0" value="11x14"><input type="hidden" name="option_amount0" value="40"><input type="hidden" name="option_select0" value="13x19"><input type="hidden" name="option_amount0" value="50"><input type="hidden" name="option_select0" value="16x20"><input type="hidden" name="option_amount0" value="60"><input type="hidden" name="option_index" value="0"><input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynow_SM.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"><img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"></form>';
			$('.sparrow-btn').attr('href', 'https://www.etsy.com/listing/175212818/sparrow-painting-print-from-original?ref=shop_home_active_22');
			$('.sparrow-paypal').html(paypalForm);
			$('.sparrow-btn').show();
		});

		$('.icy-waters-orig').on('click', function() {
			var paypalForm = '<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank"><input type="hidden" name="cmd" value="_xclick"><input type="hidden" name="business" value="DDFZEXCEVEJQG"><input type="hidden" name="lc" value="US"><input type="hidden" name="item_name" value="Icy Waters"><input type="hidden" name="item_number" value="icy-waters"><input type="hidden" name="button_subtype" value="services"><input type="hidden" name="currency_code" value="USD"><input type="hidden" name="shipping" value="5.00"><input type="hidden" name="bn" value="PP-BuyNowBF:btn_buynow_SM.gif:NonHosted"><div class="paypal-options"><div class="paypal-options"><div class="paypal-options-sizes"><input type="hidden" name="on0" value="Sizes">Sizes<select name="os0"><option value="orig">$200 USD</option></select></div></div></div><input type="hidden" name="currency_code" value="USD"><input type="hidden" name="option_select0" value="orig"><input type="hidden" name="option_amount0" value="200"><input type="hidden" name="option_index" value="0"><input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynow_SM.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"><img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"></form>';
			$('.icy-waters-btn').attr('href', '');
			$('.icy-waters-paypal').html(paypalForm);
			$('.icy-waters-btn').hide();
		});

		$('.icy-waters-print').on('click', function() {
			var paypalForm = '<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank"><input type="hidden" name="cmd" value="_xclick"><input type="hidden" name="business" value="DDFZEXCEVEJQG"><input type="hidden" name="lc" value="US"><input type="hidden" name="item_name" value="Sparrow"><input type="hidden" name="item_number" value="sparrow"><input type="hidden" name="button_subtype" value="services"><input type="hidden" name="currency_code" value="USD"><input type="hidden" name="shipping" value="5.00"><input type="hidden" name="bn" value="PP-BuyNowBF:btn_buynow_SM.gif:NonHosted"><div class="paypal-options"><div class="paypal-options"><div class="paypal-options-sizes"><input type="hidden" name="on0" value="Sizes">Sizes<select name="os0"><option value="5x7">5x7 $15 USD</option><option value="8x10">8x10 $25 USD</option><option value="9x12">9x12 $30 USD</option><option value="11x14">11x14 $40 USD</option></select></div><div class="paypal-options-paper-type"><input type="hidden" name="on1" value="Paper Type">Paper Type<select name="os1"><option value="Watercolor">Watercolor </option><option value="Photo Paper">Photo Paper </option></select></div></div></div><input type="hidden" name="currency_code" value="USD"><input type="hidden" name="option_select0" value="5x7"><input type="hidden" name="option_amount0" value="15"><input type="hidden" name="option_select0" value="8x10"><input type="hidden" name="option_amount0" value="25"><input type="hidden" name="option_select0" value="9x12"><input type="hidden" name="option_amount0" value="30"><input type="hidden" name="option_select0" value="11x14"><input type="hidden" name="option_amount0" value="40"><input type="hidden" name="option_index" value="0"><input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynow_SM.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"><img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"></form>';
			$('.icy-waters-btn').attr('href', 'https://www.etsy.com/listing/176754141/orca-painting-print-from-original?ref=shop_home_active_23');
			$('.icy-waters-paypal').html(paypalForm);
			$('.icy-waters-btn').show();
		});

		$('.horse-shoe-orig').on('click', function() {
			var paypalForm = '<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank"><input type="hidden" name="cmd" value="_xclick"><input type="hidden" name="business" value="DDFZEXCEVEJQG"><input type="hidden" name="lc" value="US"><input type="hidden" name="item_name" value="Horseshoe Crab"><input type="hidden" name="item_number" value="horseshoe-crab"><input type="hidden" name="button_subtype" value="services"><input type="hidden" name="currency_code" value="USD"><input type="hidden" name="shipping" value="5.00"><input type="hidden" name="bn" value="PP-BuyNowBF:btn_buynow_SM.gif:NonHosted"><div class="paypal-options"><div class="paypal-options"><div class="paypal-options-sizes"><input type="hidden" name="on0" value="Sizes">Sizes<select name="os0"><option value="orig">11x14 $200 USD</option></select></div></div></div><input type="hidden" name="currency_code" value="USD"><input type="hidden" name="option_select0" value="orig"><input type="hidden" name="option_amount0" value="200"><input type="hidden" name="option_index" value="0"><input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynow_SM.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"><img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"></form>';
			$('.horse-shoe-btn').attr('href', '');
			$('.horse-shoe-paypal').html(paypalForm);
			$('.horse-shoe-btn').hide();
		});

		$('.horse-shoe-print').on('click', function() {
			var paypalForm = '<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank"><input type="hidden" name="cmd" value="_xclick"><input type="hidden" name="business" value="DDFZEXCEVEJQG"><input type="hidden" name="lc" value="US"><input type="hidden" name="item_name" value="Horseshoe Crab"><input type="hidden" name="item_number" value="horseshoe-crab"><input type="hidden" name="button_subtype" value="services"><input type="hidden" name="currency_code" value="USD"><input type="hidden" name="shipping" value="5.00"><input type="hidden" name="bn" value="PP-BuyNowBF:btn_buynow_SM.gif:NonHosted"><div class="paypal-options"><div class="paypal-options"><div class="paypal-options-sizes"><input type="hidden" name="on0" value="Sizes">Sizes<select name="os0"><option value="5x7">5x7 $15 USD</option><option value="8x10">8x10 $25 USD</option><option value="9x12">9x12 $30 USD</option><option value="11x14">11x14 $40 USD</option></select></div><div class="paypal-options-paper-type"><input type="hidden" name="on1" value="Paper Type">Paper Type<select name="os1"><option value="Watercolor">Watercolor </option><option value="Photo Paper">Photo Paper </option></select></div></div></div><input type="hidden" name="currency_code" value="USD"><input type="hidden" name="option_select0" value="5x7"><input type="hidden" name="option_amount0" value="15"><input type="hidden" name="option_select0" value="8x10"><input type="hidden" name="option_amount0" value="25"><input type="hidden" name="option_select0" value="9x12"><input type="hidden" name="option_amount0" value="30"><input type="hidden" name="option_select0" value="11x14"><input type="hidden" name="option_amount0" value="40"><input type="hidden" name="option_index" value="0"><input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynow_SM.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"><img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"></form>';
			$('.horse-shoe-btn').attr('href', 'https://www.etsy.com/listing/176640033/horseshoe-crab-print-from-original?ref=shop_home_active_1');
			$('.horse-shoe-paypal').html(paypalForm);
			$('.horse-shoe-btn').show();
		});

		$('.shark-eye-shell-orig').on('click', function() {
			var paypalForm = '<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank"><input type="hidden" name="cmd" value="_xclick"><input type="hidden" name="business" value="DDFZEXCEVEJQG"><input type="hidden" name="lc" value="US"><input type="hidden" name="item_name" value="Shark Eye Shell"><input type="hidden" name="item_number" value="shark-eye-shell"><input type="hidden" name="button_subtype" value="services"><input type="hidden" name="currency_code" value="USD"><input type="hidden" name="shipping" value="5.00"><input type="hidden" name="bn" value="PP-BuyNowBF:btn_buynow_SM.gif:NonHosted"><div class="paypal-options"><div class="paypal-options"><div class="paypal-options-sizes"><input type="hidden" name="on0" value="Sizes">Sizes<select name="os0"><option value="orig">9x12 $150 USD</option></select></div></div></div><input type="hidden" name="currency_code" value="USD"><input type="hidden" name="option_select0" value="orig"><input type="hidden" name="option_amount0" value="150"><input type="hidden" name="option_index" value="0"><input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynow_SM.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"><img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"></form>';
			$('.shark-eye-shell-btn').attr('href', '');
			$('.shark-eye-shell-paypal').html(paypalForm);
			$('.shark-eye-shell-btn').hide();
		});

		$('.shark-eye-shell-print').on('click', function() {
			var paypalForm = '<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank"><input type="hidden" name="cmd" value="_xclick"><input type="hidden" name="business" value="DDFZEXCEVEJQG"><input type="hidden" name="lc" value="US"><input type="hidden" name="item_name" value="Shark Eye Shell"><input type="hidden" name="item_number" value="shark-eye-shell"><input type="hidden" name="button_subtype" value="services"><input type="hidden" name="currency_code" value="USD"><input type="hidden" name="shipping" value="5.00"><input type="hidden" name="bn" value="PP-BuyNowBF:btn_buynow_SM.gif:NonHosted"><div class="paypal-options"><div class="paypal-options"><div class="paypal-options-sizes"><input type="hidden" name="on0" value="Sizes">Sizes<select name="os0"><option value="5x7">5x7 $15 USD</option><option value="8x10">8x10 $25 USD</option><option value="9x12">9x12 $30 USD</option><option value="11x14">11x14 $40 USD</option></select></div><div class="paypal-options-paper-type"><input type="hidden" name="on1" value="Paper Type">Paper Type<select name="os1"><option value="Watercolor">Watercolor </option><option value="Photo Paper">Photo Paper </option></select></div></div></div><input type="hidden" name="currency_code" value="USD"><input type="hidden" name="option_select0" value="5x7"><input type="hidden" name="option_amount0" value="15"><input type="hidden" name="option_select0" value="8x10"><input type="hidden" name="option_amount0" value="25"><input type="hidden" name="option_select0" value="9x12"><input type="hidden" name="option_amount0" value="30"><input type="hidden" name="option_select0" value="11x14"><input type="hidden" name="option_amount0" value="40"><input type="hidden" name="option_index" value="0"><input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynow_SM.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"><img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"></form>';
			$('.shark-eye-shell-btn').attr('href', 'https://www.etsy.com/listing/176630594/seashell-painting-3-print-from-original?ref=shop_home_active_2');
			$('.shark-eye-shell-paypal').html(paypalForm);
			$('.shark-eye-shell-btn').show();
		});

		$('.sea-scallop-orig').on('click', function() {
			var paypalForm = '<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank"><input type="hidden" name="cmd" value="_xclick"><input type="hidden" name="business" value="DDFZEXCEVEJQG"><input type="hidden" name="lc" value="US"><input type="hidden" name="item_name" value="Sea Scallop"><input type="hidden" name="item_number" value="sea-scallop"><input type="hidden" name="button_subtype" value="services"><input type="hidden" name="currency_code" value="USD"><input type="hidden" name="shipping" value="5.00"><input type="hidden" name="bn" value="PP-BuyNowBF:btn_buynow_SM.gif:NonHosted"><div class="paypal-options"><div class="paypal-options"><div class="paypal-options-sizes"><input type="hidden" name="on0" value="Sizes">Sizes<select name="os0"><option value="orig">9x12 $150 USD</option></select></div></div></div><input type="hidden" name="currency_code" value="USD"><input type="hidden" name="option_select0" value="orig"><input type="hidden" name="option_amount0" value="150"><input type="hidden" name="option_index" value="0"><input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynow_SM.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"><img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"></form>';
			$('.sea-scallop-btn').attr('href', '');
			$('.sea-scallop-paypal').html(paypalForm);
			$('.sea-scallop-btn').hide();
		});

		$('.sea-scallop-print').on('click', function() {
			var paypalForm = '<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank"><input type="hidden" name="cmd" value="_xclick"><input type="hidden" name="business" value="DDFZEXCEVEJQG"><input type="hidden" name="lc" value="US"><input type="hidden" name="item_name" value="Sea Scallop"><input type="hidden" name="item_number" value="sea-scallop"><input type="hidden" name="button_subtype" value="services"><input type="hidden" name="currency_code" value="USD"><input type="hidden" name="shipping" value="5.00"><input type="hidden" name="bn" value="PP-BuyNowBF:btn_buynow_SM.gif:NonHosted"><div class="paypal-options"><div class="paypal-options"><div class="paypal-options-sizes"><input type="hidden" name="on0" value="Sizes">Sizes<select name="os0"><option value="5x7">5x7 $15 USD</option><option value="8x10">8x10 $25 USD</option><option value="9x12">9x12 $30 USD</option><option value="11x14">11x14 $40 USD</option></select></div><div class="paypal-options-paper-type"><input type="hidden" name="on1" value="Paper Type">Paper Type<select name="os1"><option value="Watercolor">Watercolor </option><option value="Photo Paper">Photo Paper </option></select></div></div></div><input type="hidden" name="currency_code" value="USD"><input type="hidden" name="option_select0" value="5x7"><input type="hidden" name="option_amount0" value="15"><input type="hidden" name="option_select0" value="8x10"><input type="hidden" name="option_amount0" value="25"><input type="hidden" name="option_select0" value="9x12"><input type="hidden" name="option_amount0" value="30"><input type="hidden" name="option_select0" value="11x14"><input type="hidden" name="option_amount0" value="40"><input type="hidden" name="option_index" value="0"><input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynow_SM.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"><img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"></form>';
			$('.sea-scallop-btn').attr('href', 'https://www.etsy.com/listing/176033433/seashell-painting-2-print-from-original?ref=shop_home_active_7');
			$('.sea-scallop-paypal').html(paypalForm);
			$('.sea-scallop-btn').show();
		});

		$('.bag-end-orig').on('click', function() {
			$('.bag-end-btn').attr('href', '');
			$('.bag-end-paypal').html('');
			$('.bag-end-btn').hide();
		});

		$('.bag-end-print').on('click', function() {
			var paypalForm = '<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank"><input type="hidden" name="cmd" value="_xclick"><input type="hidden" name="business" value="DDFZEXCEVEJQG"><input type="hidden" name="lc" value="US"><input type="hidden" name="item_name" value="Bag End"><input type="hidden" name="item_number" value="bag-end"><input type="hidden" name="button_subtype" value="services"><input type="hidden" name="currency_code" value="USD"><input type="hidden" name="shipping" value="5.00"><input type="hidden" name="bn" value="PP-BuyNowBF:btn_buynow_SM.gif:NonHosted"><div class="paypal-options"><div class="paypal-options"><div class="paypal-options-sizes"><input type="hidden" name="on0" value="Sizes">Sizes<select name="os0"><option value="8x10">8x10 $25 USD</option><option value="9x12">9x12 $30 USD</option><option value="11x14">11x14 $40 USD</option></select></div><div class="paypal-options-paper-type"><input type="hidden" name="on1" value="Paper Type">Paper Type<select name="os1"><option value="Watercolor">Watercolor </option><option value="Photo Paper">Photo Paper </option></select></div></div></div><input type="hidden" name="currency_code" value="USD"><input type="hidden" name="option_select0" value="8x10"><input type="hidden" name="option_amount0" value="25"><input type="hidden" name="option_select0" value="9x12"><input type="hidden" name="option_amount0" value="30"><input type="hidden" name="option_select0" value="11x14"><input type="hidden" name="option_amount0" value="40"><input type="hidden" name="option_index" value="0"><input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynow_SM.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"><img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"></form>';
			$('.bag-end-btn').attr('href', 'https://www.etsy.com/listing/174029839/the-hobbit-painting-print-from-original?ref=shop_home_active_4');
			$('.bag-end-paypal').html(paypalForm);
			$('.bag-end-btn').show();
		});

		$('.5th-avenue-orig').on('click', function() {
			$('.5th-avenue-btn').attr('href', '');
			$('.5th-avenue-paypal').html('');
			$('.5th-avenue-btn').hide();
		});

		$('.5th-avenue-print').on('click', function() {
			var paypalForm = '<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank"><input type="hidden" name="cmd" value="_xclick"><input type="hidden" name="business" value="DDFZEXCEVEJQG"><input type="hidden" name="lc" value="US"><input type="hidden" name="item_name" value="5th Avenue"><input type="hidden" name="item_number" value="5th-avenue"><input type="hidden" name="button_subtype" value="services"><input type="hidden" name="currency_code" value="USD"><input type="hidden" name="shipping" value="5.00"><input type="hidden" name="bn" value="PP-BuyNowBF:btn_buynow_SM.gif:NonHosted"><div class="paypal-options"><div class="paypal-options"><div class="paypal-options-sizes"><input type="hidden" name="on0" value="Sizes">Sizes<select name="os0"><option value="5x7">5x7 $15 USD</option><option value="8x10">8x10 $25 USD</option><option value="9x12">9x12 $30 USD</option><option value="11x14">11x14 $40 USD</option></select></div><div class="paypal-options-paper-type"><input type="hidden" name="on1" value="Paper Type">Paper Type<select name="os1"><option value="Watercolor">Watercolor </option><option value="Photo Paper">Photo Paper </option></select></div></div></div><input type="hidden" name="currency_code" value="USD"><input type="hidden" name="option_select0" value="5x7"><input type="hidden" name="option_amount0" value="15"><input type="hidden" name="option_select0" value="8x10"><input type="hidden" name="option_amount0" value="25"><input type="hidden" name="option_select0" value="9x12"><input type="hidden" name="option_amount0" value="30"><input type="hidden" name="option_select0" value="11x14"><input type="hidden" name="option_amount0" value="40"><input type="hidden" name="option_index" value="0"><input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynow_SM.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"><img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"></form>';
			$('.5th-avenue-btn').attr('href', 'https://www.etsy.com/listing/176091146/garden-painting-print-from-original?ref=shop_home_active_5');
			$('.5th-avenue-paypal').html(paypalForm);
			$('.5th-avenue-btn').show();
		});

		$('.tidal-conch-orig').on('click', function() {
			var paypalForm ='<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank"><input type="hidden" name="cmd" value="_xclick"><input type="hidden" name="business" value="DDFZEXCEVEJQG"><input type="hidden" name="lc" value="US"><input type="hidden" name="item_name" value="Tidal Conch"><input type="hidden" name="item_number" value="tidal-conch"><input type="hidden" name="button_subtype" value="services"><input type="hidden" name="currency_code" value="USD"><input type="hidden" name="shipping" value="5.00"><input type="hidden" name="bn" value="PP-BuyNowBF:btn_buynow_SM.gif:NonHosted"><div class="paypal-options"><div class="paypal-options"><div class="paypal-options-sizes"><input type="hidden" name="on0" value="Sizes">Sizes<select name="os0"><option value="orig">8x10 $125 USD</option></select></div></div></div><input type="hidden" name="currency_code" value="USD"><input type="hidden" name="option_select0" value="orig"><input type="hidden" name="option_amount0" value="125"><input type="hidden" name="option_index" value="0"><input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynow_SM.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"><img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"></form>';
			$('.tidal-conch-btn').attr('href', '');
			$('.tidal-conch-paypal').html(paypalForm);
			$('.tidal-conch-btn').hide();
		});

		$('.tidal-conch-print').on('click', function() {
			var paypalForm ='<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank"><input type="hidden" name="cmd" value="_xclick"><input type="hidden" name="business" value="DDFZEXCEVEJQG"><input type="hidden" name="lc" value="US"><input type="hidden" name="item_name" value="Tidal Conch"><input type="hidden" name="item_number" value="tidal-conch"><input type="hidden" name="button_subtype" value="services"><input type="hidden" name="currency_code" value="USD"><input type="hidden" name="shipping" value="5.00"><input type="hidden" name="bn" value="PP-BuyNowBF:btn_buynow_SM.gif:NonHosted"><div class="paypal-options"><div class="paypal-options"><div class="paypal-options-sizes"><input type="hidden" name="on0" value="Sizes">Sizes<select name="os0"><option value="5x7">5x7 $15 USD</option><option value="8x10">8x10 $25 USD</option><option value="9x12">8x12 $30 USD</option><option value="11x14">11x14 $40 USD</option></select></div><div class="paypal-options-paper-type"><input type="hidden" name="on1" value="Paper Type">Paper Type<select name="os1"><option value="Watercolor">Watercolor </option><option value="Photo Paper">Photo Paper </option></select></div></div></div><input type="hidden" name="currency_code" value="USD"><input type="hidden" name="option_select0" value="5x7"><input type="hidden" name="option_amount0" value="15"><input type="hidden" name="option_select0" value="8x10"><input type="hidden" name="option_amount0" value="25"><input type="hidden" name="option_select0" value="9x12"><input type="hidden" name="option_amount0" value="30"><input type="hidden" name="option_select0" value="11x14"><input type="hidden" name="option_amount0" value="40"><input type="hidden" name="option_index" value="0"><input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynow_SM.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"><img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"></form>';
			$('.tidal-conch-btn').attr('href', 'http://www.etsy.com/listing/176630594/seashell-painting-3-print-from-original?ref=shop_home_active_3');
			$('.tidal-conch-paypal').html(paypalForm);
			$('.tidal-conch-btn').show();
		});

		$('.blue-bird-orig').on('click', function() {
			var paypalForm ='<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank"><input type="hidden" name="cmd" value="_xclick"><input type="hidden" name="business" value="DDFZEXCEVEJQG"><input type="hidden" name="lc" value="US"><input type="hidden" name="item_name" value="Blue Bird"><input type="hidden" name="item_number" value="blue-bird"><input type="hidden" name="button_subtype" value="services"><input type="hidden" name="currency_code" value="USD"><input type="hidden" name="shipping" value="5.00"><input type="hidden" name="bn" value="PP-BuyNowBF:btn_buynow_SM.gif:NonHosted"><div class="paypal-options"><div class="paypal-options"><div class="paypal-options-sizes"><input type="hidden" name="on0" value="Sizes">Sizes<select name="os0"><option value="orig">6x8 $115 USD</option></select></div></div></div><input type="hidden" name="currency_code" value="USD"><input type="hidden" name="option_select0" value="orig"><input type="hidden" name="option_amount0" value="115"><input type="hidden" name="option_index" value="0"><input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynow_SM.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"><img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"></form>';
			$('.blue-bird-btn').attr('href', 'http://www.etsy.com/listing/174860893/original-bluebird-painting-original?ref=shop_home_active_10');
			$('.blue-bird-paypal').html(paypalForm);
		});

		$('.blue-bird-print').on('click', function() {
			var paypalForm ='<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank"><input type="hidden" name="cmd" value="_xclick"><input type="hidden" name="business" value="DDFZEXCEVEJQG"><input type="hidden" name="lc" value="US"><input type="hidden" name="item_name" value="Blue Bird"><input type="hidden" name="item_number" value="blue-bird"><input type="hidden" name="button_subtype" value="services"><input type="hidden" name="currency_code" value="USD"><input type="hidden" name="shipping" value="5.00"><input type="hidden" name="bn" value="PP-BuyNowBF:btn_buynow_SM.gif:NonHosted"><div class="paypal-options"><div class="paypal-options"><div class="paypal-options-sizes"><input type="hidden" name="on0" value="Sizes">Sizes<select name="os0"><option value="5x7">5x7 $15 USD</option><option value="8x10">8x10 $25 USD</option><option value="9x12">9x12 $30 USD</option><option value="11x14">11x14 $40 USD</option><option value="13x19">13x19 $50 USD</option><option value="16x20">16x20 $60 USD</option></select></div><div class="paypal-options-paper-type"><input type="hidden" name="on1" value="Paper Type">Paper Type<select name="os1"><option value="Watercolor">Watercolor </option><option value="Photo Paper">Photo Paper </option></select></div></div></div><input type="hidden" name="currency_code" value="USD"><input type="hidden" name="option_select0" value="5x7"><input type="hidden" name="option_amount0" value="15"><input type="hidden" name="option_select0" value="8x10"><input type="hidden" name="option_amount0" value="25"><input type="hidden" name="option_select0" value="9x12"><input type="hidden" name="option_amount0" value="30"><input type="hidden" name="option_select0" value="11x14"><input type="hidden" name="option_amount0" value="40"><input type="hidden" name="option_select0" value="13x19"><input type="hidden" name="option_amount0" value="50"><input type="hidden" name="option_select0" value="16x20"><input type="hidden" name="option_amount0" value="60"><input type="hidden" name="option_index" value="0"><input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynow_SM.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"><img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"></form>';
			$('.blue-bird-btn').attr('href', 'http://www.etsy.com/listing/174217996/bluebird-painting-print-from-original?ref=shop_home_active_19');
			$('.blue-bird-paypal').html(paypalForm);
		});

		$('.cardinal-orig').on('click', function() {
			var paypalForm = '<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank"><input type="hidden" name="cmd" value="_xclick"><input type="hidden" name="business" value="DDFZEXCEVEJQG"><input type="hidden" name="lc" value="US"><input type="hidden" name="item_name" value="5th Avenue"><input type="hidden" name="item_number" value="5th-avenue"><input type="hidden" name="button_subtype" value="services"><input type="hidden" name="currency_code" value="USD"><input type="hidden" name="shipping" value="5.00"><input type="hidden" name="bn" value="PP-BuyNowBF:btn_buynow_SM.gif:NonHosted"><div class="paypal-options"><div class="paypal-options"><div class="paypal-options-sizes"><input type="hidden" name="on0" value="Sizes">Sizes<select name="os0"><option value="orig">9x12 $150 USD</option></select></div></div></div><input type="hidden" name="currency_code" value="USD"><input type="hidden" name="option_select0" value="orig"><input type="hidden" name="option_amount0" value="150"><input type="hidden" name="option_index" value="0"><input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynow_SM.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"><img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"></form>';
			$('.cardinal-btn').attr('href', 'http://www.etsy.com/listing/174860189/original-cardinal-painting-original?ref=shop_home_active_11');
			$('.cardinal-paypal').html(paypalForm);
		});

		$('.cardinal-print').on('click', function() {
			var paypalForm ='<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank"><input type="hidden" name="cmd" value="_xclick"><input type="hidden" name="business" value="DDFZEXCEVEJQG"><input type="hidden" name="lc" value="US"><input type="hidden" name="item_name" value="Cardinal"><input type="hidden" name="item_number" value="cardinal"><input type="hidden" name="button_subtype" value="services"><input type="hidden" name="currency_code" value="USD"><input type="hidden" name="shipping" value="5.00"><input type="hidden" name="bn" value="PP-BuyNowBF:btn_buynow_SM.gif:NonHosted"><div class="paypal-options"><div class="paypal-options"><div class="paypal-options-sizes"><input type="hidden" name="on0" value="Sizes">Sizes<select name="os0"><option value="5x7">5x7 $15 USD</option><option value="8x10">8x10 $25 USD</option><option value="9x12">9x12 $30 USD</option><option value="11x14">11x14 $40 USD</option><option value="13x19">13x19 $50 USD</option><option value="16x20">16x20 $60 USD</option></select></div><div class="paypal-options-paper-type"><input type="hidden" name="on1" value="Paper Type">Paper Type<select name="os1"><option value="Watercolor">Watercolor </option><option value="Photo Paper">Photo Paper </option></select></div></div></div><input type="hidden" name="currency_code" value="USD"><input type="hidden" name="option_select0" value="5x7"><input type="hidden" name="option_amount0" value="15"><input type="hidden" name="option_select0" value="8x10"><input type="hidden" name="option_amount0" value="25"><input type="hidden" name="option_select0" value="9x12"><input type="hidden" name="option_amount0" value="30"><input type="hidden" name="option_select0" value="11x14"><input type="hidden" name="option_amount0" value="40"><input type="hidden" name="option_select0" value="13x19"><input type="hidden" name="option_amount0" value="50"><input type="hidden" name="option_select0" value="16x20"><input type="hidden" name="option_amount0" value="60"><input type="hidden" name="option_index" value="0"><input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynow_SM.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"><img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"></form>';
			$('.cardinal-btn').attr('href', 'http://www.etsy.com/listing/174535511/cardinal-painting-print-from-original?ref=shop_home_active_17');
			$('.cardinal-paypal').html(paypalForm);
		});

		$('.mary-orig').on('click', function() {
			var paypalForm ='<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank"><input type="hidden" name="cmd" value="_xclick"><input type="hidden" name="business" value="DDFZEXCEVEJQG"><input type="hidden" name="lc" value="US"><input type="hidden" name="item_name" value="Mary"><input type="hidden" name="item_number" value="mary"><input type="hidden" name="button_subtype" value="services"><input type="hidden" name="currency_code" value="USD"><input type="hidden" name="shipping" value="5.00"><input type="hidden" name="bn" value="PP-BuyNowBF:btn_buynow_SM.gif:NonHosted"><div class="paypal-options"><div class="paypal-options"><div class="paypal-options-sizes"><input type="hidden" name="on0" value="Sizes">Sizes<select name="os0"><option value="orig">42"x42" $2800 USD</option></select></div></div></div><input type="hidden" name="currency_code" value="USD"><input type="hidden" name="option_select0" value="orig"><input type="hidden" name="option_amount0" value="2800"><input type="hidden" name="option_index" value="0"><input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynow_SM.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"><img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"></form>';
			$('.mary-btn').attr('href', 'http://www.etsy.com/listing/174846986/large-original-african-woman-painting-1?ref=shop_home_active_13');
			$('.mary-paypal').html(paypalForm);
		});

		$('.bella-orig').on('click', function() {
			var paypalForm ='<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank"><input type="hidden" name="cmd" value="_xclick"><input type="hidden" name="business" value="DDFZEXCEVEJQG"><input type="hidden" name="lc" value="US"><input type="hidden" name="item_name" value="Bella"><input type="hidden" name="item_number" value="bella"><input type="hidden" name="button_subtype" value="services"><input type="hidden" name="currency_code" value="USD"><input type="hidden" name="shipping" value="5.00"><input type="hidden" name="bn" value="PP-BuyNowBF:btn_buynow_SM.gif:NonHosted"><div class="paypal-options"><div class="paypal-options"><div class="paypal-options-sizes"><input type="hidden" name="on0" value="Sizes">Sizes<select name="os0"><option value="orig">42"x42" $2800 USD</option></select></div></div></div><input type="hidden" name="currency_code" value="USD"><input type="hidden" name="option_select0" value="orig"><input type="hidden" name="option_amount0" value="2800"><input type="hidden" name="option_index" value="0"><input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynow_SM.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"><img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"></form>';
			$('.bella-btn').attr('href', 'http://www.etsy.com/listing/174847380/large-original-african-woman-painting-2?ref=shop_home_active_12');
			$('.bella-paypal').html(paypalForm);
		});

		$('.to-nome-orig').on('click', function() {
			var paypalForm ='<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank"><input type="hidden" name="cmd" value="_xclick"><input type="hidden" name="business" value="DDFZEXCEVEJQG"><input type="hidden" name="lc" value="US"><input type="hidden" name="item_name" value="To Nome"><input type="hidden" name="item_number" value="to-nome"><input type="hidden" name="button_subtype" value="services"><input type="hidden" name="currency_code" value="USD"><input type="hidden" name="shipping" value="5.00"><input type="hidden" name="bn" value="PP-BuyNowBF:btn_buynow_SM.gif:NonHosted"><div class="paypal-options"><div class="paypal-options"><div class="paypal-options-sizes"><input type="hidden" name="on0" value="Sizes">Sizes<select name="os0"><option value="orig">5x7 $95 USD</option></select></div></div></div><input type="hidden" name="currency_code" value="USD"><input type="hidden" name="option_select0" value="orig"><input type="hidden" name="option_amount0" value="95"><input type="hidden" name="option_index" value="0"><input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynow_SM.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"><img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"></form>';
			$('.to-nome-btn').attr('href', '');
			$('.to-nome-paypal').html(paypalForm);
			$('.to-nome-btn').hide();
		});

		$('.to-nome-print').on('click', function() {
			var paypalForm = '<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank"><input type="hidden" name="cmd" value="_xclick"><input type="hidden" name="business" value="DDFZEXCEVEJQG"><input type="hidden" name="lc" value="US"><input type="hidden" name="item_name" value="To Nome"><input type="hidden" name="item_number" value="to-nome"><input type="hidden" name="button_subtype" value="services"><input type="hidden" name="currency_code" value="USD"><input type="hidden" name="shipping" value="5.00"><input type="hidden" name="bn" value="PP-BuyNowBF:btn_buynow_SM.gif:NonHosted"><div class="paypal-options"><div class="paypal-options"><div class="paypal-options-sizes"><input type="hidden" name="on0" value="Sizes">Sizes<select name="os0">5x7, 8x12, 9x12<option value="5x7">5x7 $15 USD</option><option value="8x12">8x12 $30 USD</option><option value="9x12">9x12 $30 USD</option></select></div><div class="paypal-options-paper-type"><input type="hidden" name="on1" value="Paper Type">Paper Type<select name="os1"><option value="Watercolor">Watercolor </option><option value="Photo Paper">Photo Paper </option></select></div></div></div><input type="hidden" name="currency_code" value="USD"><input type="hidden" name="option_select0" value="5x7"><input type="hidden" name="option_amount0" value="15"><input type="hidden" name="option_select0" value="8x12"><input type="hidden" name="option_amount0" value="30"><input type="hidden" name="option_select0" value="9x12"><input type="hidden" name="option_amount0" value="30"><input type="hidden" name="option_index" value="0"><input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynow_SM.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"><img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"></form>';
			$('.to-nome-btn').attr('href', 'http://www.etsy.com/listing/174230987/flying-goose-painting-print-from?ref=shop_home_active_20');
			$('.to-nome-paypal').html(paypalForm);
			$('.to-nome-btn').show();
		});

		$('.sycamore-path-print').on('click', function() {
			var paypalForm ='<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank"><input type="hidden" name="cmd" value="_xclick"><input type="hidden" name="business" value="DDFZEXCEVEJQG"><input type="hidden" name="lc" value="US"><input type="hidden" name="item_name" value="Sycamore Path"><input type="hidden" name="item_number" value="sycamore-path"><input type="hidden" name="button_subtype" value="services"><input type="hidden" name="currency_code" value="USD"><input type="hidden" name="shipping" value="5.00"><input type="hidden" name="bn" value="PP-BuyNowBF:btn_buynow_SM.gif:NonHosted"><div class="paypal-options"><div class="paypal-options"><div class="paypal-options-sizes"><input type="hidden" name="on0" value="Sizes">Sizes<select name="os0"><option value="8x10">8x10 $25 USD</option><option value="9x12">9x12 $30 USD</option><option value="11x14">11x14 $40 USD</option></select></div><div class="paypal-options-paper-type"><input type="hidden" name="on1" value="Paper Type">Paper Type<select name="os1"><option value="Watercolor">Watercolor </option><option value="Photo Paper">Photo Paper </option></select></div></div></div><input type="hidden" name="currency_code" value="USD"><input type="hidden" name="option_select0" value="8x10"><input type="hidden" name="option_amount0" value="25"><input type="hidden" name="option_select0" value="9x12"><input type="hidden" name="option_amount0" value="30"><input type="hidden" name="option_select0" value="11x14"><input type="hidden" name="option_amount0" value="40"><input type="hidden" name="option_index" value="0"><input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynow_SM.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"><img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"></form>';
			$('.sycamore-path-btn').attr('href', 'http://www.etsy.com/listing/174017180/forest-path-painting-print-from-original?ref=shop_home_active_21');
			$('.sycamore-path-paypal').html(paypalForm);
		});

		$('.relax-print').on('click', function() {
			var paypalForm ='<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank"><input type="hidden" name="cmd" value="_xclick"><input type="hidden" name="business" value="DDFZEXCEVEJQG"><input type="hidden" name="lc" value="US"><input type="hidden" name="item_name" value="Relax"><input type="hidden" name="item_number" value="relax"><input type="hidden" name="button_subtype" value="services"><input type="hidden" name="currency_code" value="USD"><input type="hidden" name="shipping" value="5.00"><input type="hidden" name="bn" value="PP-BuyNowBF:btn_buynow_SM.gif:NonHosted"><div class="paypal-options"><div class="paypal-options"><div class="paypal-options-sizes"><input type="hidden" name="on0" value="Sizes">Sizes<select name="os0"><option value="8x10">8x10 $25 USD</option><option value="9x12">9x12 $30 USD</option><option value="11x14">11x14 $40 USD</option></select></div><div class="paypal-options-paper-type"><input type="hidden" name="on1" value="Paper Type">Paper Type<select name="os1"><option value="Watercolor">Watercolor </option><option value="Photo Paper">Photo Paper </option></select></div></div></div><input type="hidden" name="currency_code" value="USD"><input type="hidden" name="option_select0" value="8x10"><input type="hidden" name="option_amount0" value="25"><input type="hidden" name="option_select0" value="9x12"><input type="hidden" name="option_amount0" value="30"><input type="hidden" name="option_select0" value="11x14"><input type="hidden" name="option_amount0" value="40"><input type="hidden" name="option_index" value="0"><input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynow_SM.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"><img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"></form>';
			$('.relax-btn').attr('href', 'http://www.etsy.com/listing/174016742/coffee-mug-painting-print-from-original?ref=shop_home_active_22');
			$('.relax-paypal').html(paypalForm);
		});

		$('.icicles-orig').on('click', function() {
			var paypalForm ='<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank"><input type="hidden" name="cmd" value="_xclick"><input type="hidden" name="business" value="DDFZEXCEVEJQG"><input type="hidden" name="lc" value="US"><input type="hidden" name="item_name" value="Icicles"><input type="hidden" name="item_number" value="icicles"><input type="hidden" name="button_subtype" value="services"><input type="hidden" name="currency_code" value="USD"><input type="hidden" name="shipping" value="5.00"><input type="hidden" name="bn" value="PP-BuyNowBF:btn_buynow_SM.gif:NonHosted"><div class="paypal-options"><div class="paypal-options"><div class="paypal-options-sizes"><input type="hidden" name="on0" value="Sizes">Sizes<select name="os0"><option value="orig">8x10 $125 USD</option></select></div></div></div><input type="hidden" name="currency_code" value="USD"><input type="hidden" name="option_select0" value="orig"><input type="hidden" name="option_amount0" value="125"><input type="hidden" name="option_index" value="0"><input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynow_SM.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"><img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"></form>';
			$('.icicles-btn').attr('href', '');
			$('.icicles-paypal').html(paypalForm);
			$('.icicles-btn').hide();
		});

		$('.icicles-print').on('click', function() {
			var paypalForm ='<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank"><input type="hidden" name="cmd" value="_xclick"><input type="hidden" name="business" value="DDFZEXCEVEJQG"><input type="hidden" name="lc" value="US"><input type="hidden" name="item_name" value="Icicles"><input type="hidden" name="item_number" value="icicles"><input type="hidden" name="button_subtype" value="services"><input type="hidden" name="currency_code" value="USD"><input type="hidden" name="shipping" value="5.00"><input type="hidden" name="bn" value="PP-BuyNowBF:btn_buynow_SM.gif:NonHosted"><div class="paypal-options"><div class="paypal-options"><div class="paypal-options-sizes"><input type="hidden" name="on0" value="Sizes">Sizes<select name="os0">8x10, 9x12, 11x14<option value="8x10">8x10 $25 USD</option><option value="9x12">9x12 $30 USD</option><option value="11x14">11x14 $40 USD</option></select></div><div class="paypal-options-paper-type"><input type="hidden" name="on1" value="Paper Type">Paper Type<select name="os1"><option value="Watercolor">Watercolor </option><option value="Photo Paper">Photo Paper </option></select></div></div></div><input type="hidden" name="currency_code" value="USD"><input type="hidden" name="option_select0" value="8x10"><input type="hidden" name="option_amount0" value="25"><input type="hidden" name="option_select0" value="9x12"><input type="hidden" name="option_amount0" value="30"><input type="hidden" name="option_select0" value="11x14"><input type="hidden" name="option_amount0" value="40"><input type="hidden" name="option_index" value="0"><input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynow_SM.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"><img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"></form>';
			$('.icicles-btn').attr('href', 'http://www.etsy.com/listing/172103869/icicle-painting-print-from-original?ref=shop_home_active_4');
			$('.icicles-paypal').html(paypalForm);
			$('.icicles-btn').show();
		});

		$('.soft-as-silence-orig').on('click', function() {
			var paypalForm ='<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank"><input type="hidden" name="cmd" value="_xclick"><input type="hidden" name="business" value="DDFZEXCEVEJQG"><input type="hidden" name="lc" value="US"><input type="hidden" name="item_name" value="Soft As Silence"><input type="hidden" name="item_number" value="soft-as-silence"><input type="hidden" name="button_subtype" value="services"><input type="hidden" name="currency_code" value="USD"><input type="hidden" name="shipping" value="5.00"><input type="hidden" name="bn" value="PP-BuyNowBF:btn_buynow_SM.gif:NonHosted"><div class="paypal-options"><div class="paypal-options"><div class="paypal-options-sizes"><input type="hidden" name="on0" value="Sizes">Sizes<select name="os0"><option value="orig">8x10 $125 USD</option></select></div></div></div><input type="hidden" name="currency_code" value="USD"><input type="hidden" name="option_select0" value="orig"><input type="hidden" name="option_amount0" value="125"><input type="hidden" name="option_index" value="0"><input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynow_SM.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"><img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"></form>';
			$('.soft-as-silence-btn').attr('href', '');
			$('.soft-as-silence-paypal').html(paypalForm);
			$('.soft-as-silence-btn').hide();
		});

		$('.soft-as-silence-print').on('click', function() {
			var paypalForm ='<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank"><input type="hidden" name="cmd" value="_xclick"><input type="hidden" name="business" value="DDFZEXCEVEJQG"><input type="hidden" name="lc" value="US"><input type="hidden" name="item_name" value="Soft As Silence"><input type="hidden" name="item_number" value="soft-as-silence"><input type="hidden" name="button_subtype" value="services"><input type="hidden" name="currency_code" value="USD"><input type="hidden" name="shipping" value="5.00"><input type="hidden" name="bn" value="PP-BuyNowBF:btn_buynow_SM.gif:NonHosted"><div class="paypal-options"><div class="paypal-options"><div class="paypal-options-sizes"><input type="hidden" name="on0" value="Sizes">Sizes<select name="os0">8x10, 9x12, 11x14<option value="8x10">8x10 $25 USD</option><option value="9x12">9x12 $30 USD</option><option value="11x14">11x14 $40 USD</option></select></div><div class="paypal-options-paper-type"><input type="hidden" name="on1" value="Paper Type">Paper Type<select name="os1"><option value="Watercolor">Watercolor </option><option value="Photo Paper">Photo Paper </option></select></div></div></div><input type="hidden" name="currency_code" value="USD"><input type="hidden" name="option_select0" value="8x10"><input type="hidden" name="option_amount0" value="25"><input type="hidden" name="option_select0" value="9x12"><input type="hidden" name="option_amount0" value="30"><input type="hidden" name="option_select0" value="11x14"><input type="hidden" name="option_amount0" value="40"><input type="hidden" name="option_index" value="0"><input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynow_SM.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"><img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"></form>';
			$('.soft-as-silence-btn').attr('href', 'http://www.etsy.com/listing/172089622/pine-trees-painting-print-from-original?ref=shop_home_active_5');
			$('.soft-as-silence-paypal').html(paypalForm);
			$('.soft-as-silence-btn').show();
		});

		$('.fruit-stand-orig').on('click', function() {
			var paypalForm ='<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank"><input type="hidden" name="cmd" value="_xclick"><input type="hidden" name="business" value="DDFZEXCEVEJQG"><input type="hidden" name="lc" value="US"><input type="hidden" name="item_name" value="Fruit Stand"><input type="hidden" name="item_number" value="fruit-stand"><input type="hidden" name="button_subtype" value="services"><input type="hidden" name="currency_code" value="USD"><input type="hidden" name="shipping" value="5.00"><input type="hidden" name="bn" value="PP-BuyNowBF:btn_buynow_SM.gif:NonHosted"><div class="paypal-options"><div class="paypal-options"><div class="paypal-options-sizes"><input type="hidden" name="on0" value="Sizes">Sizes<select name="os0"><option value="orig">9x12 $150 USD</option></select></div></div></div><input type="hidden" name="currency_code" value="USD"><input type="hidden" name="option_select0" value="orig"><input type="hidden" name="option_amount0" value="150"><input type="hidden" name="option_index" value="0"><input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynow_SM.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"><img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"></form>';
			$('.fruit-stand-btn').attr('href', '');
			$('.fruit-stand-paypal').html(paypalForm);
			$('.fruit-stand-btn').hide();
		});

		$('.fruit-stand-print').on('click', function() {
			var paypalForm ='<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank"><input type="hidden" name="cmd" value="_xclick"><input type="hidden" name="business" value="DDFZEXCEVEJQG"><input type="hidden" name="lc" value="US"><input type="hidden" name="item_name" value="Fruit Stand"><input type="hidden" name="item_number" value="fruit-stand"><input type="hidden" name="button_subtype" value="services"><input type="hidden" name="currency_code" value="USD"><input type="hidden" name="shipping" value="5.00"><input type="hidden" name="bn" value="PP-BuyNowBF:btn_buynow_SM.gif:NonHosted"><div class="paypal-options"><div class="paypal-options"><div class="paypal-options-sizes"><input type="hidden" name="on0" value="Sizes">Sizes<select name="os0">8x10, 9x12, 11x14<option value="8x10">8x10 $25 USD</option><option value="9x12">9x12 $30 USD</option><option value="11x14">11x14 $40 USD</option></select></div><div class="paypal-options-paper-type"><input type="hidden" name="on1" value="Paper Type">Paper Type<select name="os1"><option value="Watercolor">Watercolor </option><option value="Photo Paper">Photo Paper </option></select></div></div></div><input type="hidden" name="currency_code" value="USD"><input type="hidden" name="option_select0" value="8x10"><input type="hidden" name="option_amount0" value="25"><input type="hidden" name="option_select0" value="9x12"><input type="hidden" name="option_amount0" value="30"><input type="hidden" name="option_select0" value="11x14"><input type="hidden" name="option_amount0" value="40"><input type="hidden" name="option_index" value="0"><input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynow_SM.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"><img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"></form>';
			$('.fruit-stand-btn').attr('href', 'http://www.etsy.com/listing/171945283/fruit-market-painting-print-from?ref=shop_home_active_6');
			$('.fruit-stand-paypal').html(paypalForm);
			$('.fruit-stand-btn').show();
		});

		$('.quiet-orig').on('click', function() {
			var paypalForm ='<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank"><input type="hidden" name="cmd" value="_xclick"><input type="hidden" name="business" value="DDFZEXCEVEJQG"><input type="hidden" name="lc" value="US"><input type="hidden" name="item_name" value="Quiet"><input type="hidden" name="item_number" value="quiet"><input type="hidden" name="button_subtype" value="services"><input type="hidden" name="currency_code" value="USD"><input type="hidden" name="shipping" value="5.00"><input type="hidden" name="bn" value="PP-BuyNowBF:btn_buynow_SM.gif:NonHosted"><div class="paypal-options"><div class="paypal-options"><div class="paypal-options-sizes"><input type="hidden" name="on0" value="Sizes">Sizes<select name="os0"><option value="orig">8x10 $125 USD</option></select></div></div></div><input type="hidden" name="currency_code" value="USD"><input type="hidden" name="option_select0" value="orig"><input type="hidden" name="option_amount0" value="125"><input type="hidden" name="option_index" value="0"><input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynow_SM.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"><img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"></form>';
			$('.quiet-btn').attr('href', '');
			$('.quiet-paypal').html(paypalForm);
			$('.quiet-btn').hide();
		});

		$('.quiet-print').on('click', function() {
			var paypalForm ='<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank"><input type="hidden" name="cmd" value="_xclick"><input type="hidden" name="business" value="DDFZEXCEVEJQG"><input type="hidden" name="lc" value="US"><input type="hidden" name="item_name" value="Quiet"><input type="hidden" name="item_number" value="quiet"><input type="hidden" name="button_subtype" value="services"><input type="hidden" name="currency_code" value="USD"><input type="hidden" name="shipping" value="5.00"><input type="hidden" name="bn" value="PP-BuyNowBF:btn_buynow_SM.gif:NonHosted"><div class="paypal-options"><div class="paypal-options"><div class="paypal-options-sizes"><input type="hidden" name="on0" value="Sizes">Sizes<select name="os0">8x10, 9x12, 11x14<option value="8x10">8x10 $25 USD</option><option value="9x12">9x12 $30 USD</option><option value="11x14">11x14 $40 USD</option></select></div><div class="paypal-options-paper-type"><input type="hidden" name="on1" value="Paper Type">Paper Type<select name="os1"><option value="Watercolor">Watercolor </option><option value="Photo Paper">Photo Paper </option></select></div></div></div><input type="hidden" name="currency_code" value="USD"><input type="hidden" name="option_select0" value="8x10"><input type="hidden" name="option_amount0" value="25"><input type="hidden" name="option_select0" value="9x12"><input type="hidden" name="option_amount0" value="30"><input type="hidden" name="option_select0" value="11x14"><input type="hidden" name="option_amount0" value="40"><input type="hidden" name="option_index" value="0"><input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynow_SM.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"><img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"></form>';
			$('.quiet-btn').attr('href', 'http://www.etsy.com/listing/171928932/tree-line-painting-print-from-original?ref=shop_home_active_7');
			$('.quiet-paypal').html(paypalForm);
			$('.quiet-btn').show();
		});

		$('.owl-feathers-orig').on('click', function() {
			var paypalForm ='<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank"><input type="hidden" name="cmd" value="_xclick"><input type="hidden" name="business" value="DDFZEXCEVEJQG"><input type="hidden" name="lc" value="US"><input type="hidden" name="item_name" value="Owl Feathers"><input type="hidden" name="item_number" value="owl-feathers"><input type="hidden" name="button_subtype" value="services"><input type="hidden" name="currency_code" value="USD"><input type="hidden" name="shipping" value="5.00"><input type="hidden" name="bn" value="PP-BuyNowBF:btn_buynow_SM.gif:NonHosted"><div class="paypal-options"><div class="paypal-options"><div class="paypal-options-sizes"><input type="hidden" name="on0" value="Sizes">Sizes<select name="os0"><option value="orig">9x12 $150 USD</option></select></div></div></div><input type="hidden" name="currency_code" value="USD"><input type="hidden" name="option_select0" value="orig"><input type="hidden" name="option_amount0" value="150"><input type="hidden" name="option_index" value="0"><input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynow_SM.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"><img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"></form>';
			$('.owl-feathers-btn').attr('href', '');
			$('.owl-feathers-paypal').html(paypalForm);
			$('.owl-feathers-btn').hide();
		});

		$('.owl-feathers-print').on('click', function() {
			var paypalForm ='<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank"><input type="hidden" name="cmd" value="_xclick"><input type="hidden" name="business" value="DDFZEXCEVEJQG"><input type="hidden" name="lc" value="US"><input type="hidden" name="item_name" value="Owl Feathers"><input type="hidden" name="item_number" value="owl-feathers"><input type="hidden" name="button_subtype" value="services"><input type="hidden" name="currency_code" value="USD"><input type="hidden" name="shipping" value="5.00"><input type="hidden" name="bn" value="PP-BuyNowBF:btn_buynow_SM.gif:NonHosted"><div class="paypal-options"><div class="paypal-options"><div class="paypal-options-sizes"><input type="hidden" name="on0" value="Sizes">Sizes<select name="os0">8x10, 9x12, 11x14<option value="8x10">8x10 $25 USD</option><option value="9x12">9x12 $30 USD</option><option value="11x14">11x14 $40 USD</option></select></div><div class="paypal-options-paper-type"><input type="hidden" name="on1" value="Paper Type">Paper Type<select name="os1"><option value="Watercolor">Watercolor </option><option value="Photo Paper">Photo Paper </option></select></div></div></div><input type="hidden" name="currency_code" value="USD"><input type="hidden" name="option_select0" value="8x10"><input type="hidden" name="option_amount0" value="25"><input type="hidden" name="option_select0" value="9x12"><input type="hidden" name="option_amount0" value="30"><input type="hidden" name="option_select0" value="11x14"><input type="hidden" name="option_amount0" value="40"><input type="hidden" name="option_index" value="0"><input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynow_SM.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"><img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"></form>';
			$('.owl-feathers-btn').attr('href', 'http://www.etsy.com/listing/171484289/feather-painting-print-from-original?ref=shop_home_active_8');
			$('.owl-feathers-paypal').html(paypalForm);
			$('.owl-feathers-btn').show();
		});

		$('.blue-heron-orig').on('click', function() {
			var paypalForm ='<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank"><input type="hidden" name="cmd" value="_xclick"><input type="hidden" name="business" value="DDFZEXCEVEJQG"><input type="hidden" name="lc" value="US"><input type="hidden" name="item_name" value="Blue Heron"><input type="hidden" name="item_number" value="blue-heron"><input type="hidden" name="button_subtype" value="services"><input type="hidden" name="currency_code" value="USD"><input type="hidden" name="shipping" value="5.00"><input type="hidden" name="bn" value="PP-BuyNowBF:btn_buynow_SM.gif:NonHosted"><div class="paypal-options"><div class="paypal-options"><div class="paypal-options-sizes"><input type="hidden" name="on0" value="Sizes">Sizes<select name="os0"><option value="orig">11x14 $200 USD</option></select></div></div></div><input type="hidden" name="currency_code" value="USD"><input type="hidden" name="option_select0" value="orig"><input type="hidden" name="option_amount0" value="200"><input type="hidden" name="option_index" value="0"><input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynow_SM.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"><img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"></form>';
			$('.blue-heron-btn').attr('href', '');
			$('.blue-heron-paypal').html(paypalForm);
			$('.blue-heron-btn').hide();
		});

		$('.blue-heron-print').on('click', function() {
			var paypalForm ='<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank"><input type="hidden" name="cmd" value="_xclick"><input type="hidden" name="business" value="DDFZEXCEVEJQG"><input type="hidden" name="lc" value="US"><input type="hidden" name="item_name" value="Blue Heron"><input type="hidden" name="item_number" value="blue-heron"><input type="hidden" name="button_subtype" value="services"><input type="hidden" name="currency_code" value="USD"><input type="hidden" name="shipping" value="5.00"><input type="hidden" name="bn" value="PP-BuyNowBF:btn_buynow_SM.gif:NonHosted"><div class="paypal-options"><div class="paypal-options"><div class="paypal-options-sizes"><input type="hidden" name="on0" value="Sizes">Sizes<select name="os0">8x10, 9x12, 11x14<option value="8x10">8x10 $25 USD</option><option value="9x12">9x12 $30 USD</option><option value="11x14">11x14 $40 USD</option></select></div><div class="paypal-options-paper-type"><input type="hidden" name="on1" value="Paper Type">Paper Type<select name="os1"><option value="Watercolor">Watercolor </option><option value="Photo Paper">Photo Paper </option></select></div></div></div><input type="hidden" name="currency_code" value="USD"><input type="hidden" name="option_select0" value="8x10"><input type="hidden" name="option_amount0" value="25"><input type="hidden" name="option_select0" value="9x12"><input type="hidden" name="option_amount0" value="30"><input type="hidden" name="option_select0" value="11x14"><input type="hidden" name="option_amount0" value="40"><input type="hidden" name="option_index" value="0"><input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynow_SM.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"><img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"></form>';
			$('.blue-heron-btn').attr('href', 'http://www.etsy.com/listing/171483743/blue-heron-painting-print-from-original?ref=shop_home_active_9');
			$('.blue-heron-paypal').html(paypalForm);
			$('.blue-heron-btn').show();
		});

		$('.steady-orig').on('click', function() {
			var paypalForm ='<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank"><input type="hidden" name="cmd" value="_xclick"><input type="hidden" name="business" value="DDFZEXCEVEJQG"><input type="hidden" name="lc" value="US"><input type="hidden" name="item_name" value="Steady"><input type="hidden" name="item_number" value="steady"><input type="hidden" name="button_subtype" value="services"><input type="hidden" name="currency_code" value="USD"><input type="hidden" name="shipping" value="5.00"><input type="hidden" name="bn" value="PP-BuyNowBF:btn_buynow_SM.gif:NonHosted"><div class="paypal-options"><div class="paypal-options"><div class="paypal-options-sizes"><input type="hidden" name="on0" value="Sizes">Sizes<select name="os0"><option value="orig">6.5x10 $125 USD</option></select></div></div></div><input type="hidden" name="currency_code" value="USD"><input type="hidden" name="option_select0" value="6.5x10"><input type="hidden" name="option_amount0" value="125"><input type="hidden" name="option_index" value="0"><input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynow_SM.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"><img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"></form>';
			$('.steady-btn').attr('href', '');
			$('.steady-paypal').html(paypalForm);
			$('.steady-btn').hide();
		});

		$('.steady-print').on('click', function() {
			var paypalForm ='<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank"><input type="hidden" name="cmd" value="_xclick"><input type="hidden" name="business" value="DDFZEXCEVEJQG"><input type="hidden" name="lc" value="US"><input type="hidden" name="item_name" value="ChangeThis"><input type="hidden" name="item_number" value="changethis"><input type="hidden" name="button_subtype" value="services"><input type="hidden" name="currency_code" value="USD"><input type="hidden" name="shipping" value="5.00"><input type="hidden" name="bn" value="PP-BuyNowBF:btn_buynow_SM.gif:NonHosted"><div class="paypal-options"><div class="paypal-options"><div class="paypal-options-sizes"><input type="hidden" name="on0" value="Sizes">Sizes<select name="os0">8x10, 9x12, 11x14<option value="8x10">8x10 $25 USD</option><option value="9x12">9x12 $30 USD</option><option value="11x14">11x14 $40 USD</option></select></div><div class="paypal-options-paper-type"><input type="hidden" name="on1" value="Paper Type">Paper Type<select name="os1"><option value="Watercolor">Watercolor </option><option value="Photo Paper">Photo Paper </option></select></div></div></div><input type="hidden" name="currency_code" value="USD"><input type="hidden" name="option_select0" value="8x10"><input type="hidden" name="option_amount0" value="25"><input type="hidden" name="option_select0" value="9x12"><input type="hidden" name="option_amount0" value="30"><input type="hidden" name="option_select0" value="11x14"><input type="hidden" name="option_amount0" value="40"><input type="hidden" name="option_index" value="0"><input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynow_SM.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"><img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"></form>';
			$('.steady-btn').attr('href', 'https://www.etsy.com/listing/172752598/stream-painting-print-from-original?ref=shop_home_active_1');
			$('.steady-paypal').html(paypalForm);
			$('.steady-btn').show();
		});

		$('.flock-orig').on('click', function() {
			$('.flock-btn').attr('href', '').hide();
			$('.flock-paypal').html('');
		});

		$('.flock-print').on('click', function() {
			var paypalForm ='<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank"><input type="hidden" name="cmd" value="_xclick"><input type="hidden" name="business" value="DDFZEXCEVEJQG"><input type="hidden" name="lc" value="US"><input type="hidden" name="item_name" value="ChangeThis"><input type="hidden" name="item_number" value="changethis"><input type="hidden" name="button_subtype" value="services"><input type="hidden" name="currency_code" value="USD"><input type="hidden" name="shipping" value="5.00"><input type="hidden" name="bn" value="PP-BuyNowBF:btn_buynow_SM.gif:NonHosted"><div class="paypal-options"><div class="paypal-options"><div class="paypal-options-sizes"><input type="hidden" name="on0" value="Sizes">Sizes<select name="os0"><option value="5x7">5x7 $15 USD</option><option value="8x10">8x10 $25 USD</option><option value="9x12">9x12 $30 USD</option><option value="11x14">11x14 $40 USD</option><option value="16x20">16x20 $60 USD</option></select></div><div class="paypal-options-paper-type"><input type="hidden" name="on1" value="Paper Type">Paper Type<select name="os1"><option value="Watercolor">Watercolor </option><option value="Photo Paper">Photo Paper </option></select></div></div></div><input type="hidden" name="currency_code" value="USD"><input type="hidden" name="option_select0" value="5x7"><input type="hidden" name="option_amount0" value="15"><input type="hidden" name="option_select0" value="8x10"><input type="hidden" name="option_amount0" value="25"><input type="hidden" name="option_select0" value="9x12"><input type="hidden" name="option_amount0" value="30"><input type="hidden" name="option_select0" value="11x14"><input type="hidden" name="option_amount0" value="40"><input type="hidden" name="option_select0" value="16x20"><input type="hidden" name="option_amount0" value="60"><input type="hidden" name="option_index" value="0"><input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynow_SM.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"><img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"></form>';
			$('.flock-btn').attr('href', 'https://www.etsy.com/listing/169886177/geese-painting-print-from-original?ref=shop_home_active_11').show();
			$('.flock-paypal').html(paypalForm);
		});


}); //document.ready