var prompt = require("prompt-sync")();

 // Calculadora Simples

 // Funções 
 // Soma
function soma(a,b){
    return (a+b);
}
 // Subtração 
 function subtraçao(a,b){
    return (a+b);
}
 // Multiplicação  
function  multiplicacao(a,b){
    return (a+b);
}
 // Divisão

 function divisao(a,b){
    return (a+b);
}

function menu(){
    console.log("Escolha a Operacao Desejada")
    console.log("1. Soma");
    console.log("2. Subtração");
    console.log("3. Multplicação");
    console.log("4. Divisão");

    let operacao = Number(prompt());
    switch (operacao) {
     case 1:
        var a = Number(prompt("Infome o 1º Número"));
        var b = Number(prompt("Infome o 2º Número"));
        console.log(sub(soma (a,b)));
        break;

     case 2:
        var a = Number(prompt("Infome o 1º Número"));
        var b = Number(prompt("Infome o 2º Número"));
        console.log(subtracao(soma (a,b)));
        break;

     case 3:
        var a = Number(prompt("Infome o 1º Número"));
        var b = Number(prompt("Infome o 2º Número"));
        console.log(multiplicacao(soma (a,b)));
        break;

     case 4:
        var a = Number(prompt("Infome o 1º Número"));
        var b = Number(prompt("Infome o 2º Número"));
        if (b===0) {
            console.log("Não será Dividido")
        }
        break;
        default:
            console.log("Operação Inválida")
            break;
}
 menu;

}
