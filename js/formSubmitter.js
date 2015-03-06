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
				rev_current : $('#precinctRev_current').val(),
				rev_month : $('#precinctRev_month').val(),
				rev_goal : $('#precinctRev_goal').val()
			},
			MonthlyBudget : {
				budget_current : $('#budget_current').val(),
				budget_month : $('#budget_month').val(),
				budget_goal : $('#budget_goal').val()
			},
			NPS : {
				nps_current : $('#nps_current').val(),
				nps_month : $('#nps_month').val(),
				nps_goal : $('#budget_goal').val()
			}
		}
		json_string = JSON.stringify(json_object);
	}

	$(document).on('click', '#submitButton', function(evt) {
		packageVals();
		sendVals();
	})
});
