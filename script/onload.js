window.onload = function() {
    location.hash = "#index";

    //Bind buttons
    bindButton();

    content = document.getElementById("content");
    back = document.getElementById("backbttn");

    fetchFragmentList();
};

function bindButton() {
    var buttons = document.getElementsByClassName("clickable");
    for (var i = 0; i < buttons.length; i++) {
        var b = buttons[i];
        b.addEventListener("click", function(event) {
            location.hash = event.target.getAttribute("href");
        });
    }
}

window.onhashchange = handleHashChange;