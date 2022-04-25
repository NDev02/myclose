function clear() {
    localStorage.removeItem("form");
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