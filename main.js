//ao passar o mouse sobre o cabeçalho, a cor de fundo mude:

let cor1 = document.getElementById("cor1");

cor1.addEventListener("mouseover", mouseOver1);
cor1.addEventListener("mouseout", mouseOut1);

function mouseOver1() {
    cor1.style.background = "rgb(201, 173, 167)";
}

function mouseOut1() {
    cor1.style.background = "rgb(74, 78, 105)";
}

let cor2 = document.getElementById("cor2");

cor2.addEventListener("mouseover", mouseOver2);
cor2.addEventListener("mouseout", mouseOut2);

function mouseOver2() {
    cor2.style.background = "rgb(201, 173, 167)";
}

function mouseOut2() {
    cor2.style.background = "rgb(74, 78, 105)";
}

//ao clicar em um artigo, uma mensagem de alerta exibindo o título do projeto seja mostrada:

let a1 = document.querySelector("#a1");
let t1 = document.querySelector("#t1");

a1.addEventListener("click", mostrarT1);

function mostrarT1() {
    alert("Você clicou em " + t1.innerHTML);
}

let a2 = document.querySelector("#a2");
let t2 = document.querySelector("#t2");

a2.addEventListener("click", mostrarT2);

function mostrarT2() {
    alert("Você clicou em " + t2.innerHTML);
}

let a3 = document.querySelector("#a3");
let t3 = document.querySelector("#t3");

a3.addEventListener("click", mostrarT3);

function mostrarT3() {
    alert("Você clicou em " + t3.innerHTML);
}
