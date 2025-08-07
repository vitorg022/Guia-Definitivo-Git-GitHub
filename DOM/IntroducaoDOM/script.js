function alterarTexto() {
    document.getElementById("titulo").innerText = "Texto Alterado!";
}

// getElementById - seleção do elemento pelo ID
let titulo = document.getElementById("titulo");

// variavel comum
titulo.style.color = "blue";

let paragrafos = document.
getElementsByClassName("descricao");

// variavel vetor//array
descricao[0].style.fontWeight = "bold";
descricao[1].style.fontWeight = "green";

// getElementsByClassName -> vetor
let todosdesceicao = document.getElementsByTagNameNS("p");
console.log(todosdesceicao.length); 

// querySelector -> primeiro elemento
let primeiroDescricao = document.querySelector(".descricao");
primeiroDescricao.style.color = "red";

// querySelectorAll -. todos os elementos em vetor
let ps = document.querySelectorAll("p");
ps.forEach(p => p.style.fontsize = "18px");

function adicionarClasse(){
    titulo.classList.add("descricao");
    let descricao = document.querySelector(".descricao");
    descricao.style.color = "red";
}