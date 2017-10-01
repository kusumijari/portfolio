// $(document).ready(function () {
//     $(".expandable").click(function () {
//         console.log("Clicked");
//         $(this).find('.toggle_visibility').toggle();
//     });
// }); 

$(".expandable").click(function () {
    console.log("Clicked");
    $header = $(this);
    $content = $header.next();
    $content.slideToggle(500);
});