$(".expandable").click(function () {
    $header = $(this);
    $content = $header.next();
    $content.slideToggle(750);
});