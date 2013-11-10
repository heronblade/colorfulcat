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

	var windowHeight = $(window).height();

	//keep the portfolio nav at the top of the page when the page is smaller than 768px
	function checkPortfolioNav() {
		var width = $(window).width();
		var topOfPortNav = $('.portfolio-nav').offset().top;
		var trueTopOfPortNav = $('.portfolio-nav').outerHeight();
		var windowTop = $(window).scrollTop();
		var topOfPort = $('#portfolio').offset().top;
		if (width < 768) {
			if (topOfPort >= topOfPortNav && windowTop < topOfPort) {
				$('.portfolio-nav').offset({top:topOfPort, left:0});
			} else if (windowTop > topOfPortNav || windowTop < topOfPortNav) {
				$('.portfolio-nav').offset({top:windowTop, left:0});
			}
		} else {
			$('.portfolio-nav').offset({top:topOfPort, left:0});
		}
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

	//add down arrow and make it a link that will smooth scroll to the next div
	

	

});