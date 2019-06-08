var fragments = new Map();
function fetchFragmentList() {
    fetch("fragments/fragment.json")
        .then(function (res) {
        if (res.ok)
            return res.json();
    })
        .then(function (json) {
        fetchHTML(json);
    });
}
function fetchHTML(json) {
    var promises = [];
    for (var _i = 0, json_1 = json; _i < json_1.length; _i++) {
        var s = json_1[_i];
        promises.push(fetch("fragments/" + s.toString()).then(function (res) { if (res.ok)
            return res.text(); }));
    }
    Promise.all(promises).then(function (values) {
        for (var _i = 0, values_1 = values; _i < values_1.length; _i++) {
            var s = values_1[_i];
            var d = stringToDom(s);
            var key = d.getElementById("head").innerHTML.trim();
            fragments.set(key, d.body);
        }
    });
}
function stringToDom(str) {
    var parser = new DOMParser();
    return parser.parseFromString(str, "text/html");
}
