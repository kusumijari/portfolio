$(".expandable").click(function () {
    $header = $(this);
    $content = $header.next();
    $content.slideToggle(750);
});

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
	    var span = document.getElementsByClassName("close")[0];

	    // When the user clicks on <span> (x), close the modal
	    span.onclick = function() { 
	      modal.style.display = "none";
	    }
    }   
})(window, document);

