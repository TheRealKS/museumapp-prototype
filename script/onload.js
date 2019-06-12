window.onload = function() {
    location.hash = "#index";

    //Bind buttons
    bindButton();

    content = document.getElementById("content");
    back = document.getElementById("backbttn");
    prevbttn = document.getElementById("prevbttn");
    nextbttn = document.getElementById("nextbttn")

    fetchFragmentList();
};

function bindButton() {
    var buttons = document.getElementsByClassName("clickable");
    for (var i = 0; i < buttons.length; i++) {
        var b = buttons[i];
        b.addEventListener("click", function(event) {
            if (!contentloaded) return;
            if (event.currentTarget.hasAttribute("tour")) {
                currenttour = event.currentTarget.getAttribute("tour");
            }
            if (event.currentTarget.classList.contains("back") && prev) {
                location.hash = prev;
                return;
            }
            location.hash = event.currentTarget.getAttribute("href");
        });
    }
}

window.onhashchange = handleHashChange;