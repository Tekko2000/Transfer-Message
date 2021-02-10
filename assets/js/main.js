var txt = document.getElementById("txt");
var warning = document.getElementById("warning");
var result = document.getElementById("result");

function transfer() {
    if (txt.value == "") {
        warning.innerHTML = "Bitte gib Deine Nachricht ein!"
        warning.style.color = "red"
    } else {
        result.innerHTML = txt.value;
        result.style.color = "blue";
    }
}