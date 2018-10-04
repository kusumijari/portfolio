$(".expandable").click(function () {
    $header = $(this);
    $content = $header.next();
    $content.slideToggle(750);
});

window.onscroll = function() {scrollFunction()};


function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("topButton").style.display = "block";
    } else {
        document.getElementById("topButton").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

(function(window, document){
    window.onload = init;
    function init () {
		// Get the modal
	    var modal = document.getElementById('modal');

	    // Get the image and insert it inside the modal - use its "alt" text as a caption
	    var modalImg = document.getElementById("img01");
	    var captionText = document.getElementById("caption");

	    $('img.modalImage').click(function(){
	        modal.style.display = "block";
	        modalImg.src = this.src;
	        captionText.innerHTML = this.alt;
	    });

	    // Get the <span> element that closes the modal
	    var span = document.getElementsByClassName("close")[0] ;

	    // When the user clicks on <span> (x), close the modal
      if (span) {
        span.onclick = function() {
	         modal.style.display = "none";
	      }
      }
    }
})(window, document);
