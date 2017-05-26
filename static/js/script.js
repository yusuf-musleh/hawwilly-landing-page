$(document).ready(function() {
	display_plans_and_prices();
	display_features();
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