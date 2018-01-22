$(".expandable").click(function () {
    $header = $(this);
    $content = $header.next();
    $content.slideToggle(750);
});

$(function() {
    $('.carousel').jcarousel({
    	console.log("Carousel called");
        // Configuration goes here
    });
});