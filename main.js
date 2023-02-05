let btn = document.getElementById("tog");

let circ = document.getElementById("cir");
let info = document.querySelector(".name");
let body = document.querySelector("body");
btn.onclick = function() {
    console.log("hello mahmoud");
    btn.classList.toggle("move");
    circ.classList.toggle("col");
    body.classList.toggle("black");
    info.classList.toggle("showName");
};