$('document').ready(function() {

	$(document).on('click', '#changeValues', function(evt) {

		$.ajax({
			url : 'webpages/UpdateValues.html',
			type : 'POST',
			success : function() {
			}
		}).done(function(html) {
			$("#main_body").html(html);
			$("#main_body").css("height", "initial");
		});
		console.log("changeValues");
	})

	$(document).on('click', '#sendAlert', function(evt) {

		var json = {
			alerts : {
				values : {
					string : "Alert!"
				}
			}
		}
		
		var json_string = JSON.stringify(json);
		
		console.log(json_string);
		
		$.ajax({
			type : "GET",
			data : {
				'msg' : json_string
			},
			url : "../php/testScript.php"
		});

	})

});