// Global Variables
var selected_plan = null;

$(document).ready(function() {
	mixpanel.track("Page Viewed");
	display_plans_and_prices();
	display_features();

	$("a").click(function(e) {
		var a_tag_clicked = e.target.id;
		if (a_tag_clicked.indexOf("get_started") >= 0) {
			get_started(a_tag_clicked);
		}
	});

	$("#form_notify_id").submit(function(event) {
		$('#notify_submit_btn').attr('disabled',true);
		event.preventDefault();

		var data = $("#form_notify_id").serializeArray(); // convert form to array
		data.push({name: "selected_plan", value: selected_plan});

		$.ajax({
			type: $("#form_notify_id").attr('method'),
			url: $("#form_notify_id").attr('action'),
			data: $.param(data),
			success: function (data) {
				$("#form_notify_div").html("<p>thank you for submitting your information, we look forward to contacting you soon!</p>");
				console.log('Submission was successful.');
				console.log(data);
			},
			error: function (data) {
				console.log('An error occurred.');
				console.log(data);
			},
		});
	});
});


function display_plans_and_prices() {
	$("#pnp_btn").click(function() {
		mixpanel.track("Plans and Prices Button Clicked");
		$("#features_div").fadeOut("fast", function(){
			$("#plans_and_prices_div").fadeIn("slow");
			$("#features_btn").fadeIn("fast");
		});
		$("#pnp_btn").fadeOut("fast");
	});
}

function display_features() {
	$("#features_btn").click(function() {
		mixpanel.track("Features Button Clicked");
		$("#plans_and_prices_div").fadeOut("fast", function(){
			$("#features_div").fadeIn("slow");
			$("#pnp_btn").fadeIn("fast");
		});
		$("#features_btn").fadeOut("fast");
	});
}

function get_started(a_tag_clicked) {
	if (a_tag_clicked == "get_started_p1") {
		mixpanel.track("2.99% + 1QAR Plan Click");
		selected_plan = "2.99% + 1QAR";
	}
	else if (a_tag_clicked == "get_started_p2") {
		mixpanel.track("2.65% + 0.75QAR Plan Click");
		selected_plan = "2.65% + 0.75QAR";
	}
	else if (a_tag_clicked == "get_started_p3") {
		mixpanel.track("Enterprise Plan Clicked");
		selected_plan = "Enterprise";
	}

	$("#plans_and_prices_div").fadeOut("fast", function(){
		$("#collect_emails_div").fadeIn("slow");
	});
	$("#features_btn").fadeOut("fast");
}
