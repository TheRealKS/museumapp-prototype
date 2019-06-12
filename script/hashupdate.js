var content;
var back;
var prev;
function handleHashChange(event) {
    var old = event.oldURL.split("#")[1];
    var _new = event.newURL.split("#")[1];
    if (!tour) {
        if (_new === "back") {
            _new = "#back";
            return;
        }
        if (_new === "tour") {
            startTour();
            return;
        }
        back.setAttribute("href", "#" + old);
        updateView(_new);
    }
    else {
        var dir = 0;
        if (_new.indexOf("tour_next") >= 0)
            dir = 1;
        if (_new.indexOf("tour_prev") >= 0)
            dir = -1;
        if (_new === "tour_ended") {
            endTour();
            updateView(_new);
            return;
        }
        tourNavigation(dir);
    }
}
function updateView(ctx) {
    if (fragments.has(ctx)) {
        content.innerHTML = fragments.get(ctx).innerHTML;
        if (document.getElementById("backvalue")) {
            prev = document.getElementById("backvalue").innerHTML;
        }
        else {
            prev = undefined;
        }
        bindButton();
    }
    else {
        console.error(ctx + " not found");
    }
}
