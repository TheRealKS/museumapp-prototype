var content : Element;
var back : Element;

declare function bindButton();

function handleHashChange(event : HashChangeEvent) {
    var old = event.oldURL.split("#")[1];
    var _new = event.newURL.split("#")[1];

    if (_new === "back") {
        old = "#back";
        return;
    }

    if (fragments.has(_new)) {
        back.setAttribute("href", "#" + old);
        content.innerHTML = fragments.get(_new).innerHTML;
        bindButton();
    } else {
        console.error(_new + " not found");
    }
}