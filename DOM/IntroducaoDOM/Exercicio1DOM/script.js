function alterarTexto() {
    document.getElementById("titulo").innerText = "Texto Alterado!";
}

// getElementById - seleção do elemento pelo ID
let titulo = document.getElementById("titulo");

// variavel comum
titulo.style.color = "blue";

let todosDescricao = document.getElementsByTagName("p");
console.log(todosDescricao);

function alterarCorFundo(){
    
}