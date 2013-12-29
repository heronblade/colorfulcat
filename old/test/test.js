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
				"thumb_size": "",
				"thumb_prints": "",
				"karis_order_btn": "",
				"data_target": "#"
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

	var name = 'karis';

	$('div.port-thumb-'+name+' a').attr('href', portfolio.karis.port_popup.href);
	$('div.port-thumb-'+name+' a').attr('title', portfolio.karis.port_popup.title);
	$('div.port-thumb-'+name+' a img').attr('src', portfolio.karis.port_popup.src);

	$('div.port-thumb-'+name+' div.caption h3').html(portfolio.karis.caption.h3);
	$('div.port-thumb-'+name+' div.caption div.thumb-medium').html(portfolio.karis.caption.thumb_medium);
	$('div.port-thumb-'+name+' div.caption div.thumb-year').html(portfolio.karis.caption.thumb_year);
	$('div.port-thumb-'+name+' div.caption div.thumb-size').html(portfolio.karis.caption.thumb_size);
	$('div.port-thumb-'+name+' div.caption div.thumb-prints').html(portfolio.karis.caption.thumb_prints);
	$('div.port-thumb-'+name+' div.caption .order-btn').attr('data-target', portfolio.karis.caption.data_target);


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

