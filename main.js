function clear() {
    localStorage.removeItem("form");
}

function load() {
    let f = localStorage.getItem("form");
    let j = JSON.parse(f);
    if(!f) {
        return;
    }
    for(let key of Object.keys(j)) {
        if(j[key] === '✅') {
            document.querySelector(`#${key}`).checked = true;
        } else if(j[key] === '❌') {
            document.querySelector(`#${key}`).checked = false;
        } else {
            document.querySelector(`#${key}`).value = j[key];
        }
    }
}

function submit() {
    localStorage.setItem("form", JSON.stringify(jsonify()));
    window.open("email.html", "_blank");
}

function jsonify() {
    let values = {};
    let labels = document.querySelectorAll("label");
    for(let label of labels) {
        let input = label.nextElementSibling;
        values[input.id] = input.value;
        if(input.getAttribute("type") === "checkbox") {
            values[input.id] = input.checked ? "✅": "❌";
        }
    }
    return values;
}