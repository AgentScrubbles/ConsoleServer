/**
 * 
 */
var msg
var json_string;

$('document').ready(function() {

	/**
	 * Erases the list and gets errors
	 */
	function sendVals() {
		console.log(json_string);
		$.ajax({
			type : "GET",
			data : {
				'msg' : json_string
			},
			url : "../php/testScript.php"
		});
	}

	function packageVals() {
		var json_object = {
			PrecinctRevGoal : {
				current : $('#precinctRev_current').val(),
				month : $('#precinctRev_month').val(),
				goal : $('#precinctRev_goal').val()
			},
			MonthlyBudget : {
				current : $('#budget_current').val(),
				month : $('#budget_month').val(),
				goal : $('#budget_goal').val()
			},
			NPS : {
				current : $('#nps_current').val(),
				month : $('#nps_month').val(),
				goal : $('#budget_goal').val()
			}
		}
		json_string = JSON.stringify(json_object);
	}

	$(document).on('click', '#submitButton', function(evt) {
		packageVals();
		sendVals();
	})
});
