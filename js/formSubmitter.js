/**
 * 
 */
var msg
var json_string;
var currentID;

$('document')
		.ready(
				function() {

					currentID = 0;

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
						var i;

						var json = {
							values : {}
						}

						for (i = 0; i < currentID; i++) {
							var json_item = {
								name : $('#name_' + i).val(),
								current : $('#current_' + i).val(),
								month : $('#month_' + i).val(),
								goal : $('#goal_' + i).val(),
								met : $('#goalMet_' + i).is(":checked")
							}
							// console.log(JSON.stringify(json_item));
							json.values[i] = json_item;
						}

						json_string = JSON.stringify(json);
					}

					function addRow() {
						var html = '<tr class="item"><td><input type="text" class="form-control" id="name_'
								+ currentID
								+ '" placeholder="Name" /></td><td><input type="text" class="form-control" id="current_'
								+ currentID
								+ '" placeholder="Current Value" /></td><td><input type="text" class="form-control"id="month_'
								+ currentID
								+ '" placeholder="Last Month Value" /></td><td><input type="text" class="form-control" id="goal_'
								+ currentID
								+ '" placeholder="Goal" /></td><td><input type="checkbox" class="form-control" id="goalMet_'
								+ currentID
								+ '"></td><td><button type="button" class="btn btn-primary gs-button" id="removeButton" value='
								+ currentID + '">-</button></td></tr>'
						$('.values').append(html);
						currentID++;
					}

					$(document).on('click', '#submitButton', function(evt) {
						packageVals();
						sendVals();
					})

					$(document).on('click', '#addButton', function(evt) {
						addRow();
					})

					$(document).on('click', '#removeButton', function(evt) {
						console.log("remove");
					})

					$(document).on('click', '#backButton', function(evt) {

						$.ajax({
							url : '../index.html',
							type : 'POST',
							success : function() {
							}
						}).done(function(html) {
							$("#main_body").html(html);
							$("#main_body").css("height", "initial");
						});
						console.log("changeValues");
					})

				});
