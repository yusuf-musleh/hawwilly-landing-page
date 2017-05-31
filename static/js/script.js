$(document).ready(function() {
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

		$.ajax({
			type: $("#form_notify_id").attr('method'),
			url: $("#form_notify_id").attr('action'),
			data: $("#form_notify_id").serialize(),
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
		$("#features_div").fadeOut("fast", function(){
			$("#plans_and_prices_div").fadeIn("slow");
			$("#features_btn").fadeIn("fast");
		});
		$("#pnp_btn").fadeOut("fast");
	});
}

function display_features() {
	$("#features_btn").click(function() {
		$("#plans_and_prices_div").fadeOut("fast", function(){
			$("#features_div").fadeIn("slow");
			$("#pnp_btn").fadeIn("fast");
		});
		$("#features_btn").fadeOut("fast");
	});
}

function get_started(a_tag_clicked) {
	$("#plans_and_prices_div").fadeOut("fast", function(){
		$("#collect_emails_div").fadeIn("slow");
		// $("#pnp_btn").fadeIn("fast");
	});
	$("#features_btn").fadeOut("fast");
}