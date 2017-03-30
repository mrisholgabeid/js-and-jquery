jQuery(document).ready(function() {

	//Add the "X" icon to close the messages
	jQuery(".message").append('<span class="close">X</span>');

	//Add the click event on the "X's" to close the messages 
	jQuery(".close").click(function() {

		//Specify the message that should be closed by the "X"
		jQuery(this).parents(".message").fadeOut();

	});
	//Initially hide all of the answers
	jQuery(".answer").hide();

	//Add the click event on the questions to view their answers
	jQuery(".faq h4").click(function() {

		//Specify the answer to be show when a question is clicked
		jQuery(this).next(".answer").slideToggle();

	});

	//Styling the frequenlty asked question to look like clickable text
	jQuery(".faq h4").addClass("questions");

	//Styling the answers for the frequently asked questions
	jQuery(".answer").addClass("answers");

	//Dynamically loading content
	jQuery("#about").click(function() {
		jQuery(".about_placeholder").load("https://mrisholgabeid.github.io/js-and-jquery/assets/html/about.html .about_body");
		return false;
	});

	// jQuery("#about").click(function(e) {
	// 	e.preventDefault();
	// 	jQuery("#about").text("fsfds");
	// });
});