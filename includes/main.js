$(document).ready(function() {

	//image popups
	// $('.portfolio-images a.port-popup').Chocolat();
	$('.portfolio-images a.port-popup').magnificPopup({type:'image'});

	//variables
	var windowHeight = $(window).height();

	//On page load resize the portfolio div
	portfolioAnchorTags();

	$(window).resize(function() { portfolioAnchorTags(); });
	// $(window).load(function() { leftAlignLastThumbs(); });

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

		// if (origVsPrint === 0) {
		// 	$('.btn-etsy').removeAttr('disabled');
		// 	$('.btn-paypal').removeAttr('disabled');
		// }

		// $('.modal-paypal').hide();

	});

	// Original vs Print Etsy
		//if the image is too big, make sure watercolor isn't an option.
		// $('option').select(function() {
		// 	console.log('yupp');
		// });

		// $(document).on('change', '.paypal-select', function(){
		// 	var oThis = $(this);

			// console.log(oThis);
			// console.log(oThis[0]);

			// $(oThis).each( function( index, element ){
			// 	console.log('index: ' + index);
			// 	console.log(element);
			// 	console.log('');
			// });

			// $.each(oThis, function() {
			// 	console.log(oThis);
			// });


			// console.log(oThis);
			// var value = $('.paypal-select option:selected').val();
			// console.log(value);


			// if (value == '11x16' || value == '13x19' || value == '16x20' || value == '20x30') {
			// 	console.log('here');
			// 	$('.paper-select').html('<option value="Photo Paper">Photo Paper </option>');
			// } else {
			// 	console.log('not here');
			// 	$('.paper-select').html('<option value="Watercolor">Watercolor </option><option value="Photo Paper">Photo Paper </option>');
			// }
		// });



		//ocean study
			$('.icy-waters-orig').on('click', function() {
				$('.icy-waters-btn').attr('href', '');
				$('.icy-waters-btn').hide();
			});

			$('.icy-waters-print').on('click', function() {
				$('.icy-waters-btn').attr('href', 'https://www.etsy.com/listing/176754141/orca-painting-print-from-original?ref=shop_home_active_9');
				$('.icy-waters-btn').show();
			});

			$('.horse-shoe-orig').on('click', function() {
				$('.horse-shoe-btn').attr('href', '');
				$('.horse-shoe-btn').hide();
			});

			$('.horse-shoe-print').on('click', function() {
				$('.horse-shoe-btn').attr('href', 'https://www.etsy.com/listing/176640033/horseshoe-crab-print-from-original?ref=shop_home_active_11');
				$('.horse-shoe-btn').show();
			});

			$('.shark-eye-orig').on('click', function() {
				$('.shark-eye-btn').attr('href', '');
				$('.shark-eye-btn').hide();
			});

			$('.shark-eye-print').on('click', function() {
				$('.shark-eye-btn').attr('href', 'https://www.etsy.com/listing/176630594/seashell-painting-3-print-from-original?ref=shop_home_active_12');
				$('.shark-eye-btn').show();
			});

			$('.sea-scallop-orig').on('click', function() {
				$('.sea-scallop-btn').attr('href', '');
				$('.sea-scallop-btn').hide();
			});

			$('.sea-scallop-print').on('click', function() {
				$('.sea-scallop-btn').attr('href', 'https://www.etsy.com/listing/176033433/seashell-painting-2-print-from-original?ref=shop_home_active_16');
				$('.sea-scallop-btn').show();
			});

			$('.tidal-conch-orig').on('click', function() {
				$('.tidal-conch-btn').attr('href', '');
				$('.tidal-conch-btn').hide();
			});

			$('.tidal-conch-print').on('click', function() {
				$('.tidal-conch-btn').attr('href', 'https://www.etsy.com/listing/175222543/seashell-painting-print-from-original?ref=shop_home_active_18');
				$('.tidal-conch-btn').show();
			});

			$('.jellyfish-orig').on('click', function() {
				$('.jellyfish-btn').attr('href', '');
				$('.jellyfish-btn').hide();
			});

			$('.jellyfish-print').on('click', function() {
				$('.jellyfish-btn').attr('href', 'https://www.etsy.com/listing/166957588/jellyfish-painting-print-from-original?ref=shop_home_active_8');
				$('.jellyfish-btn').show();
			});

		//song bird series
			$('.sparrow-orig').on('click', function() {
				$('.sparrow-btn').hide();
			});

			$('.sparrow-print').on('click', function() {
				$('.sparrow-btn').attr('href', 'https://www.etsy.com/listing/175212818/sparrow-painting-print-from-original?ref=shop_home_active_8');
				$('.sparrow-btn').show();
			});

			$('.blue-bird-orig').on('click', function() {
				$('.blue-bird-btn').attr('href', 'https://www.etsy.com/listing/174860893/original-bluebird-painting-original?ref=shop_home_active_19');
			});

			$('.blue-bird-print').on('click', function() {
				$('.blue-bird-btn').attr('href', 'https://www.etsy.com/listing/174217996/bluebird-painting-print-from-original?ref=shop_home_active_4');
			});

			$('.cardinal-orig').on('click', function() {
				$('.cardinal-btn').attr('href', 'https://www.etsy.com/listing/174860189/original-cardinal-painting-original?ref=shop_home_active_20');
			});

			$('.cardinal-print').on('click', function() {
				$('.cardinal-btn').attr('href', 'https://www.etsy.com/listing/174535511/cardinal-painting-print-from-original?ref=shop_home_active_2');
			});

		//in flight series
			$('.to-nome-orig').on('click', function() {
				$('.to-nome-btn').attr('href', '');
				$('.to-nome-btn').hide();
			});

			$('.to-nome-print').on('click', function() {
				$('.to-nome-btn').attr('href', 'https://www.etsy.com/listing/174230987/flying-goose-painting-print-from?ref=shop_home_active_5');
				$('.to-nome-btn').show();
			});

			$('.blue-heron-orig').on('click', function() {
				$('.blue-heron-btn').attr('href', '');
				$('.blue-heron-btn').hide();
			});

			$('.blue-heron-print').on('click', function() {
				$('.blue-heron-btn').attr('href', 'https://www.etsy.com/listing/171483743/blue-heron-painting-print-from-original?ref=shop_home_active_18');
				$('.blue-heron-btn').show();
			});

			$('.flock-print').on('click', function() {
				$('.flock-btn').attr('href', 'https://www.etsy.com/listing/169886177/geese-painting-print-from-original?ref=shop_home_active_19').show();
			});

			$('.seagull-orig').on('click', function() {
				$('.seagull-btn').attr('href', '').hide();
			});

			$('.seagull-print').on('click', function() {
				$('.seagull-btn').attr('href', 'https://www.etsy.com/listing/169423250/bird-watercolor-painting-print-from?ref=shop_home_active_24').show();
			});

			$('.owl-orig').on('click', function() {
				$('.owl-btn').attr('href', '').hide();
			});

			$('.owl-print').on('click', function() {
				$('.owl-btn').attr('href', 'https://www.etsy.com/listing/168151715/owl-painting-print-from-original?ref=shop_home_active_5').show();
			});

			$('.heading-south-orig').on('click', function() {
				$('.heading-south-btn').attr('href', '').hide();
			});

			$('.heading-south-print').on('click', function() {
				$('.heading-south-btn').attr('href', 'https://www.etsy.com/listing/166833326/bird-flying-painting-print-from-original?ref=shop_home_active_3').show();
			});

			$('.owl-feathers-orig').on('click', function() {
				$('.owl-feathers-btn').attr('href', '');
				$('.owl-feathers-btn').hide();
			});

			$('.owl-feathers-print').on('click', function() {
				$('.owl-feathers-btn').attr('href', 'https://www.etsy.com/listing/171484289/feather-painting-print-from-original?ref=shop_home_active_17');
				$('.owl-feathers-btn').show();
			});

		//mini show
			$('.sunflowers-print').on('click', function() {
				$('.sunflowers-btn').attr('href', 'https://www.etsy.com/listing/170832614/sunflower-painting-print-from-original?ref=shop_home_active_22');
			});

			$('.dolly-orig').on('click', function() {
				$('.dolly-btn').attr('href', '');
				$('.dolly-btn').hide();
			});

			$('.dolly-print').on('click', function() {
				$('.dolly-btn').attr('href', 'https://www.etsy.com/listing/169273924/cow-painting-print-from-original?ref=shop_home_active_2');
				$('.dolly-btn').show();
			});

			$('.swift-the-fox-orig').on('click', function() {
				$('.swift-the-fox-btn').attr('href', 'https://www.etsy.com/listing/178103536/original-fox-painting-original?ref=shop_home_active_17');
			});

			$('.swift-the-fox-print').on('click', function() {
				$('.swift-the-fox-btn').attr('href', 'https://www.etsy.com/listing/169274324/fox-painting-print-from-original?ref=shop_home_active_1');
				$('.swift-the-fox-btn').show();
			});

			$('.goldenrod-print').on('click', function() {
				$('.goldenrod-btn').attr('href', 'https://www.etsy.com/listing/169285937/flower-painting-print-from-original?ref=shop_home_active_3');
				$('.goldenrod-btn').show();
			});

			$('.peony-print').on('click', function() {
				$('.peony-btn').attr('href', 'https://www.etsy.com/listing/168837817/flower-painting-print-from-original?ref=shop_home_active_4');
				$('.peony-btn').show();
			});

			$('.rooster-print').on('click', function() {
				$('.rooster-btn').attr('href', 'https://www.etsy.com/listing/170902421/rooster-painting-print-from-original?ref=shop_home_active_8');
				$('.rooster-btn').show();
			});

			$('.cherries-orig').on('click', function() {
				$('.cherries-btn').attr('href', '');
				$('.cherries-btn').hide();
			});

			$('.cherries-print').on('click', function() {
				$('.cherries-btn').attr('href', 'https://www.etsy.com/listing/170903855/fruit-painting-print-from-original?ref=shop_home_active_20');
				$('.cherries-btn').show();
			});

			$('.frozen-leaves-orig').on('click', function() {
				$('.frozen-leaves-btn').attr('href', 'https://www.etsy.com/listing/178115493/original-winter-painting-original?ref=shop_home_active_16');
			});

			$('.frozen-leaves-print').on('click', function() {
				$('.frozen-leaves-btn').attr('href', 'https://www.etsy.com/listing/170903021/winter-painting-print-from-original?ref=shop_home_active_21');
				$('.frozen-leaves-btn').show();
			});

		//window series
			$('.blue-window-orig').on('click', function() {
				$('.blue-window-btn').attr('href', '');
				$('.blue-window-btn').hide();
			});

			$('.blue-window-print').on('click', function() {
				$('.blue-window-btn').attr('href', 'http://www.etsy.com/listing/163502882/window-painting-print-from-original?ref=shop_home_active_24');
				$('.blue-window-btn').show();
			});

			$('.green-window-orig').on('click', function() {
				$('.green-window-btn').attr('href', 'http://www.etsy.com/listing/163510960/window-painting-original-watercolor?ref=shop_home_active_23');
			});

			$('.green-window-print').on('click', function() {
				$('.green-window-btn').attr('href', 'http://www.etsy.com/listing/163515823/window-painting-print-from-original?ref=shop_home_active_1');
			});

			$('.light-blue-window-orig').on('click', function() {
				$('.light-blue-window-btn').attr('href', '');
				$('.light-blue-window-btn').hide();
			});

			$('.light-blue-window-print').on('click', function() {
				$('.light-blue-window-btn').attr('href', 'http://www.etsy.com/listing/164190361/window-painting-print-from-original?ref=shop_home_active_1');
			});

			$('.red-window-orig').on('click', function() {
				$('.red-window-btn').attr('href', 'https://www.etsy.com/listing/165483112/window-painting-original-watercolor?ref=shop_home_active_9');
			});

			$('.red-window-print').on('click', function() {
				$('.red-window-btn').attr('href', 'https://www.etsy.com/listing/164841917/window-painting-print-from-original?ref=shop_home_active_24');
			});

		//fauna
			$('.baby-donkey-orig').on('click', function() {
				$('.baby-donkey-btn').attr('href', '');
				$('.baby-donkey-btn').hide();
			});

			$('.baby-donkey-print').on('click', function() {
				$('.baby-donkey-btn').attr('href', '');
				$('.baby-donkey-btn').show();
			});

			$('.chew-print').on('click', function() {
				$('.chew-btn').attr('href', 'https://www.etsy.com/listing/163509136/dog-painting-print-from-original?ref=shop_home_active_12');
				$('.chew-btn').show();
			});

			$('.kovu-print').on('click', function() {
				$('.kovu-btn').attr('href', 'https://www.etsy.com/listing/163516371/colorful-cat-print-from-original?ref=shop_home_active_22');
				$('.kovu-btn').show();
			});

			$('.peter-rabbit-orig').on('click', function() {
				$('.peter-rabbit-btn').attr('href', '');
				$('.peter-rabbit-btn').hide();
			});

			$('.peter-rabbit-print').on('click', function() {
				$('.peter-rabbit-btn').attr('href', 'https://www.etsy.com/listing/165480314/bunny-nursery-painting-print-from?ref=shop_home_active_4');
				$('.peter-rabbit-btn').show();
			});

			$('.three-lambs-orig').on('click', function() {
				$('.three-lambs-btn').hide();
			});

			$('.three-lambs-print').on('click', function() {
				$('.three-lambs-btn').attr('href', 'https://www.etsy.com/listing/165868632/lamb-painting-print-from-original?ref=shop_home_active_7');
				$('.three-lambs-btn').show();
			});

		//flora

			$('.poppy-orig').on('click', function() {
				$('.poppy-btn').attr('href', 'https://www.etsy.com/listing/165057267/poppy-painting-original-watercolor?ref=related-14');
			});

			$('.poppy-print').on('click', function() {
				$('.poppy-btn').attr('href', 'https://www.etsy.com/listing/164843491/flower-painting-print-from-original?ref=related-21');
				$('.poppy-btn').show();
			});

			$('.pumpkin-patch-orig').on('click', function() {
				$('.pumpkin-patch-btn').attr('href', 'https://www.etsy.com/listing/165278304/pumpkin-painting-original-watercolor?ref=related-12');
			});

			$('.pumpkin-patch-print').on('click', function() {
				$('.pumpkin-patch-btn').attr('href', 'https://www.etsy.com/listing/164830342/pumpkin-painting-print-from-original?ref=related-7');
				$('.pumpkin-patch-btn').show();
			});

			$('.succulents-print').on('click', function() {
				$('.succulents-btn').attr('href', 'https://www.etsy.com/listing/165489485/succulent-plant-painting-print-from?ref=related-1');
				$('.succulents-btn').show();
			});

			$('.apple-tree-orig').on('click', function() {
				$('.apple-tree-btn').attr('href', '');
				$('.apple-tree-btn').hide();
			});

			$('.apple-tree-print').on('click', function() {
				$('.apple-tree-btn').attr('href', 'https://www.etsy.com/listing/163839455/apple-painting-print-from-original?ref=related-22');
				$('.apple-tree-btn').show();
			});

			$('.autumn-birch-orig').on('click', function() {
				$('.autumn-birch-btn').hide();
			});

			$('.autumn-birch-print').on('click', function() {
				$('.autumn-birch-btn').attr('href', 'https://www.etsy.com/listing/164830988/tree-painting-print-from-original?ref=related-5');
				$('.autumn-birch-btn').show();
			});

			$('.pepper-string-print').on('click', function() {
				$('.pepper-string-btn').attr('href', 'https://www.etsy.com/listing/164190245/pepper-painting-print-from-original?ref=related-4');
				$('.pepper-string-btn').show();
			});

		//landscapes and architecture
			$('.fairytale-chapter-3-orig').on('click', function() {
				$('.fairytale-chapter-3-btn').attr('href', 'https://www.etsy.com/listing/177587385/original-french-town-painting-original?ref=related-8');
			});

			$('.fairytale-chapter-3-print').on('click', function() {
				$('.fairytale-chapter-3-btn').attr('href', 'https://www.etsy.com/listing/177585803/french-town-painting-print-from-original?ref=related-9');
				$('.fairytale-chapter-3-btn').show();
			});

			$('.soft-as-silence-orig').on('click', function() {
				$('.soft-as-silence-btn').hide();
			});

			$('.soft-as-silence-print').on('click', function() {
				$('.soft-as-silence-btn').attr('href', 'https://www.etsy.com/listing/172089622/pine-trees-painting-print-from-original?ref=related-16');
				$('.soft-as-silence-btn').show();
			});

			$('.quiet-orig').on('click', function() {
				$('.quiet-btn').hide();
			});

			$('.quiet-print').on('click', function() {
				$('.quiet-btn').attr('href', 'https://www.etsy.com/listing/171928932/tree-line-painting-print-from-original?ref=related-18');
				$('.quiet-btn').show();
			});

			$('.steady-orig').on('click', function() {
				$('.steady-btn').hide();
			});

			$('.steady-print').on('click', function() {
				$('.steady-btn').attr('href', 'https://www.etsy.com/listing/172752598/stream-painting-print-from-original?ref=related-11');
				$('.steady-btn').show();
			});

			$('.cow-pasture-orig').on('click', function() {
				$('.cow-pasture-btn').hide();
			});

			$('.cow-pasture-print').on('click', function() {
				$('.cow-pasture-btn').attr('href', 'https://www.etsy.com/listing/163508672/farm-painting-print-from-original?ref=related-12');
				$('.cow-pasture-btn').show();
			});

			$('.icicles-orig').on('click', function() {
				$('.icicles-btn').hide();
			});

			$('.icicles-print').on('click', function() {
				$('.icicles-btn').attr('href', 'https://www.etsy.com/listing/172103869/icicle-painting-print-from-original?ref=related-15');
				$('.icicles-btn').show();
			});

			$('.fruit-stand-orig').on('click', function() {
				$('.fruit-stand-btn').hide();
			});

			$('.fruit-stand-print').on('click', function() {
				$('.fruit-stand-btn').attr('href', 'https://www.etsy.com/listing/171945283/fruit-market-painting-print-from?ref=related-17');
				$('.fruit-stand-btn').show();
			});



		//objects

		//people and portraits
			$('.khaleesi-orig').on('click', function() {
				$('.khaleesi-btn').hide();
			});

			$('.khaleesi-print').on('click', function() {
				$('.khaleesi-btn').attr('href', 'https://www.etsy.com/listing/166214506/khaleesi-print-from-original-watercolor?ref=related-20');
				$('.khaleesi-btn').show();
			});


}); //document.ready