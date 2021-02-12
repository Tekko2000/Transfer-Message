// var txt = document.getElementById("txt");
// var warning = document.getElementById("warning");
// var result = document.getElementById("result");

function transfer() {
    var txt = document.getElementById("txt")
    var warning = document.getElementById("warning")
    var result = document.getElementById("result")
    if (txt.value == "") {
        warning.innerHTML = "Bitte gib Deine Nachricht ein!"
        warning.style.color = "red"
        result.style.display = "none"
    } else {
        result.innerHTML = txt.value
        result.style.color = "blue"
        result.style.display = "block"
        warning.innerHTML = ""
    }
}
