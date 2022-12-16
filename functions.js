$(document).ready(function() {
    $("img").click( function () {
        $("#vid-" + this.id[4]).slideToggle("slow");
        $("#vid-" + this.id[4]).css({
            "padding": "2%",
            "height": "auto",
            "max-width": "100%",
            "margin-left": "auto",
            "margin-right": "auto"
        });
    })
})