$(document).ready(function() {


	var portfolio = {

		"karis": {
			"port_popup": {
				"href": "href",
				"title": "title",
				"src": "src"
			},
			"caption": {
				"h3": "h3",
				"thumb_medium": "",
				"thumb_year": "",
				"thumb_prints": "",
			},
			"modal": {
				"id": "",
				"aria_labelledby": "",
				"modal_title": {
					"id": ""
				},
				"modal_thumb_image": {
					"src": ""
				},
				"modal_order": {
					"href": ""
				},
				"modal_paypal": {
					"item_name": "",
					"item_number": "",
					"option_select0": "",
					"option_amount0": "",
					"option_select1": "",
					"option_amount1": ""
				},
				"paypal_options_sizes": {
					"value1": "",
					"value2": ""
				},
				"paypal_options-paper-type": {
					"value1": "",
					"value2": ""
				}
			}
		}

	};


	$('.port-thumb-karis a').attr('href', portfolio.karis.port_popup.href);
	$('.port-thumb-karis a').attr('title', portfolio.karis.port_popup.title);
	$('.port-thumb-karis a img').attr('src', portfolio.karis.port_popup.src);

	$('.port-thumb-karis .caption h3').html(portfolio.karis.caption.h3);
	$('.port-thumb-karis .caption .thumb-medium').html(portfolio.karis.caption.thumb_medium);
	

	//object template
	// var template = {

	// 	"karis": {
	// 		"port-popup": {
	// 			"href": "",
	// 			"title": "",
	// 			"src": ""
	// 		},
	// 		"caption": {
	// 			"h3": "",
	// 			"thumb-medium": "",
	// 			"thumb-year": "",
	// 			"thumb-prints": "",
	// 		},
	// 		"modal": {
	// 			"id": "",
	// 			"aria-labelledby": "",
	// 			"modal-title": {
	// 				"id": ""
	// 			},
	// 			"modal-thumb-image": {
	// 				"src": ""
	// 			},
	// 			"modal-order": {
	// 				"href": ""
	// 			},
	// 			"modal-paypal": {
	// 				"item_name": "",
	// 				"item_number": "",
	// 				"option_select0": "",
	// 				"option_amount0": "",
	// 				"option_select1": "",
	// 				"option_amount1": ""
	// 			},
	// 			"paypal-options-sizes": {
	// 				"value1": "",
	// 				"value2": ""
	// 			},
	// 			"paypal-options-paper-type": {
	// 				"value1": "",
	// 				"value2": ""
	// 			}
	// 		}
	// 	}

	// };

});

