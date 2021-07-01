$(function (){

	var header = $("#header");
	var introHeight = $("#intro").innerHeight();
	var scrollOffset = $(window).scrollTop;
	
	checkScroll(scrollOffset, introHeight);

	$(window).on("scroll load resize", function() {

		introHeight = $("#intro").innerHeight();
		scrollOffset = $(this).scrollTop();
		console.log(introHeight);
		console.log(scrollOffset);

		/* Header-fixed */

		checkScroll(scrollOffset, introHeight);
	});

	function checkScroll (scrollOffset, introHeight) {
		if (scrollOffset > introHeight) {
			header.addClass("header-fixed")
		} else {
			header.removeClass("header-fixed")
		}
	}

	/* Smooth scroll */


	$("[data-scroll]").on("click", function(event) {
		event.preventDefault();

		var $this = $(this);
		var blockId = $(this).data("scroll");
		var blockOffset = $(blockId).offset().top;
;

		$("#nav a").removeClass("active");
		$this.addClass("active");

		$("html, body").animate ({
			scrollTop: blockOffset
		}, 500);

		navButton.removeClass("nav-button_active");
		nav.removeClass("nav_active");


	});

	/* Nav-button */

	let navButton = $("#nav-button");
	let nav = $("#nav");

	navButton.on("click", function(){
		event.preventDefault();

		$(this).toggleClass("nav-button_active");
		$("nav").toggleClass("nav_active");

	});

	/*$("html, body").on("click", function() {
		navButton.removeClass("nav-button_active");
		nav.removeClass("nav_active");
	});*/

	/* Reviews-slider */

	$('#reviews__slider').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: true,
		arrows: false,
		dots: true

	});



	



































});