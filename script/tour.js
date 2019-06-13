var tour = false;
var currenttour;
var currentindex = -1;
var currenttour_sequence;
var tour_modern = [
    "view_gober_untitled",
    "view_x"
];
var tour_classic = [
    "view_korenveld",
    "view_haarlem"
];
var tour_temp = [
    "view_pauw",
    "view_zelf"
];
var prevbttn;
var nextbttn;
function startTour() {
    if (currenttour && currenttour !== "") {
        if (currenttour === "modern") {
            currenttour_sequence = tour_modern;
        }
        else if (currenttour === "classic") {
            currenttour_sequence = tour_classic;
        }
        else if (currenttour === "temp") {
            currenttour_sequence = tour_temp;
        }
    }
    back.innerHTML = "End Tour";
    back.setAttribute("href", "#tour_ended");
    document.getElementById("prevbttn").classList.toggle("tournav");
    document.getElementById("nextbttn").classList.toggle("tournav");
    tour = true;
    tourNavigation(1);
}
function endTour() {
    currentindex = -1;
    back.innerHTML = "Back";
    back.setAttribute("href", "#index");
    document.getElementById("prevbttn").classList.toggle("tournav");
    document.getElementById("nextbttn").classList.toggle("tournav");
    tour = false;
}
function tourNavigation(direction) {
    currentindex += direction;
    if (currentindex >= 0 && currentindex < currenttour_sequence.length) {
        updateView(currenttour_sequence[currentindex]);
        nextbttn.setAttribute("href", "tour_next" + currentindex);
        prevbttn.setAttribute("href", "tour_prev" + (currentindex - 1));
    }
    else {
        endTour();
        updateView("tour_ended");
    }
}
