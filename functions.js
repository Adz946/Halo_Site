$(document).ready(function() {
    $("img").click( function () {
        $("#vid-" + this.id[4]).slideToggle("slow");
        $("#vid-" + this.id[4]).css({
            "width": "100%",
            "height": "100%",
            "display": "block"
        });
    })
})