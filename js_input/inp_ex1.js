
function add() {
    let a = parseInt(document.getElementById("num1").value);
    let b = parseInt(document.getElementById("num2").value);
    let r = a + b;
    document.getElementById("answer").innerHTML = r;
}
function subtract() {
    let a = parseInt(document.getElementById("num1").value);
    let b = parseInt(document.getElementById("num2").value);
    let r = a - b;
    document.getElementById("answer").innerHTML = r;
}
function multiply() {
    let a = parseInt(document.getElementById("num1").value);
    let b = parseInt(document.getElementById("num2").value);
    let r = a * b;
    document.getElementById("answer").innerHTML = r;
}
function divide() {
    let a = parseInt(document.getElementById("num1").value);
    let b = parseInt(document.getElementById("num2").value);
    let r = a / b;
    document.getElementById("answer").innerHTML = r;
}
