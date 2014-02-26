$(document).ready(function() {


	// Original vs Print Etsy
		//if the image is too big, make sure watercolor isn't an option.
		$('option').select(function() {
			console.log('yupp');
		});

		$(document).on('change', '.paypal-select', function(){
			var that = $(this);
			console.log(that);
			// console.log(that[0]);
			//console.log('type of ' + typeof that);

			var value = $('.paypal-select option:selected').val();
			console.log(value);



			$.each(that, function(key, value) {
				console.log('key: ' + key + ' value: ' + value);
				console.log(value);
			});
		});

		// $(document).on('change', '.paypal-select', function(){
		// 	var oThis = $(this);

		// 	console.log(oThis);
		// 	console.log(oThis[0]);

		// 	$(oThis).each( function( index, element ){
		// 		console.log('index: ' + index);
		// 		console.log(element);
		// 		console.log('');
		// 	});

		// 	$.each(oThis, function() {
		// 		console.log(oThis);
		// 	});


		// 	console.log(oThis);
		// 	var value = $('.paypal-select option:selected').val();
		// 	console.log(value);


		// 	if (value == '11x16' || value == '13x19' || value == '16x20' || value == '20x30') {
		// 		console.log('here');
		// 		$('.paper-select').html('<option value="Photo Paper">Photo Paper </option>');
		// 	} else {
		// 		console.log('not here');
		// 		$('.paper-select').html('<option value="Watercolor">Watercolor </option><option value="Photo Paper">Photo Paper </option>');
		// 	}
		// });
}); //document.ready