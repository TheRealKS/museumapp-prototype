var fragments = new Map<String, HTMLElement>();
var contentloaded;

function fetchFragmentList() {
    fetch("fragments/aa_fragment.json")
    .then(res => {
        if (res.ok) return res.json();
    })
    .then(json => {
        fetchHTML(json);
    });
}

function fetchHTML(json : Array<String>) {
    var promises = [];
    for (let s of json) {
        promises.push(fetch("fragments/" + s.toString()).then(res => {if (res.ok) return res.text()}));
    }

    Promise.all(promises).then((values : Array<String>) => {
        for (var s of values) {
            var d = stringToDom(s);
            var key = d.getElementById("head").innerHTML.trim();
            fragments.set(key, d.body);
        }

        contentloaded = true;
    });
}

function stringToDom(str) : Document {
    var parser = new DOMParser()
    return parser.parseFromString(str, "text/html");
}