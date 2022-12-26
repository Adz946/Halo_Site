$(document).ready(function() {
    $("img").click( function () {
        $("#vid-" + this.id[4]).slideToggle("slow");
        $("#vid-" + this.id[4]).css({
            "width": "100%",
            "height": "auto",
            "display": "block"
        });
    })
})

class entry {
    constructor(title, rYear, image, synopsis, trailer) {
        this.title = title;
        this.rYear = rYear;
        this.image = image;
        this.synopsis = synopsis;
        this.trailer = trailer;
    }
}

let H_CE = entry("Halo Combat Evolved", 2001, "Halo_CE.png", 
    "United Nations Space Command, must battle a genocidal alien race known as the " +
    "Covenant following his violent crash-landing on Halo, an ancient and mysterious " + 
    "ring-world.", "U95yDEhEUl8");

let H_2 = entry("Halo 2", 2004, "Halo_2.png",
    "As the alien Covenant invade Earth, the Master Chief must defend humanity's " + 
    "homeworld whilst discovering more about the rings called Halo", "FrOvnXjlcBA");

let H_3 = entry("Halo 3", 2007, "Halo_3.png", 
    "The story centers on the interstellar war between twenty-sixth century humanity, " +
    "a collection of alien races known as the Covenant, and the alien parasite Flood", 
    "RSvFnsexuvo");