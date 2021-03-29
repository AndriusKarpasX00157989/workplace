function buttonAction() {
    document.getElementById('rand-num').innerHTML= getRand1to10();
}
function getRand1to10() {
    let r = Math.floor(Math.random() * 10) + 1;
    //document.getElementById('rand-num').innerHTML= r;
    return r;
}
function tripl (){
    document.getElementById("tripled").innerHTML = document.getElementById("rand-num").innerHTML * 3;
}

