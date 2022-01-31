/*
	WEB 303 Assignment 1 - jQuery
	{Dhruv Dharmendra Kumar Patel}
*/

$(document).ready(function() {
	$('input').keyup(function() {
	let salary = $('#yearly-salary');
	let percent = $('#percent');
	let total = salary.val() * percent.val() / 100;
	$('#amount').empty().append("$" + total.toFixed(2));;
	});
});