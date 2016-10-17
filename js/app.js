$(document).ready(function(){
		// on click of international
	$(".international").on("click", function(event){
		
		event.preventDefault(); 
		// if else 
		if($(this).hasClass("active")) {
			$(this).removeClass("active");
			$("#slide-down").slideUp();
		} else {
			// show international hide eveything else
		$("#international-drop").show();
		$("#politics-drop").hide();
		$("#business-drop").hide();
		$("#technology-drop").hide();
		$("#culture-drop").hide();
		$("#blogs-drop").hide();
		// Slides down all of the content
		$("#slide-down").slideDown();
		// clears all active classes, before adding an active class
		$("#primary-nav li").removeClass("active");
		// adds the class of active
		$(this).addClass("active");
		}
	});
	// on click of politics
	$(".politics").on("click", function(event){
		event.preventDefault();
		// if else
		if($(this).hasClass("active")) {
			$(this).removeClass("active");
			$("#slide-down").slideUp();	
		} else {
			// show politics hide everything else
			$("#international-drop").hide();
			$("#politics-drop").show();
			$("#business-drop").hide();
			$("#technology-drop").hide();
			$("#culture-drop").hide();
			$("#blogs-drop").hide();
			// slides down content
			$("#slide-down").slideDown();
			// clears classes, before adding active class
			$("#primary-nav li").removeClass("active");
			// adds the class of active
			$(this).addClass("active");
		}
	});	
	// on click of business
	$(".business").on("click", function(event){
		event.preventDefault();
		// if else
		if($(this).hasClass("active")) {
			$(this).removeClass("active")
			$("#slide-down").slideUp();
		} else {
			// show business
			$("#international-drop").hide();
			$("#politics-drop").hide();
			$("#business-drop").show();
			$("#technology-drop").hide();
			$("#culture-drop").hide();
			$("#blogs-drop").hide();
			// slide down
			$("#slide-down").slideDown();
			// clears classes, before adding active class
			$("#primary-nav li").removeClass("active");
			// adds the class of active
			$(this).addClass("active");
		}
	});
	// on click of technology
	$(".technology").on("click", function(event){
		event.preventDefault();
		// if else
		if($(this).hasClass("active")) {
			$(this).removeClass("active")
			$("#slide-down").slideUp();
		} else {
			// show technology
			$("#international-drop").hide();
			$("#politics-drop").hide();
			$("#business-drop").hide();
			$("#technology-drop").show();
			$("#culture-drop").hide();
			$("#blogs-drop").hide();
			// slide down
			$("#slide-down").slideDown();
			// clears classes before adding active class
			$("#primary-nav li").removeClass("active");
			// adds the class of active
			$(this).addClass("active");
		}
	});
	// on the click of culture
	$(".culture").on("click", function(event){
		event.preventDefault();
		// if else
		if($(this).hasClass("active")) {
			$(this).removeClass("active")
			$("#slide-down").slideUp();
		} else {
			// show culture 
			$("#international-drop").hide();
			$("#politics-drop").hide();
			$("#business-drop").hide();
			$("#technology-drop").hide();
			$("#culture-drop").show();
			$("#blogs-drop").hide();
			// slides down
			$("#slide-down").slideDown();
			// clears classes before adding active classes
			$("#primary-nav li").removeClass("active");
			// add class of active
			$(this).addClass("active");
		}
	});	
	// on click of blogs
	$(".blogs").on("click", function(event){
		event.preventDefault();
		// if else
		if($(this).hasClass("active")) {
			$(this).removeClass("active")
			$("#slide-down").slideUp();
		} else {
			$("#international-drop").hide();
			$("#politics-drop").hide();
			$("#business-drop").hide();
			$("#technology-drop").hide();
			$("#culture-drop").hide();
			$("#blogs-drop").show();
			// slide down
			$("#slide-down").slideDown();
			// clears classes before adding active classes
			$("#primary-nav li").removeClass("active");
			// adds class of active
			$(this).addClass("active");
		}
	});
});