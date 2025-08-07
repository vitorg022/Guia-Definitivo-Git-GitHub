// Crie um Formulario onde o ususaario Insira nota
// Armazene essas notas em um array
// Use o Metodo reduce para calcular
cons prompt = require( prompt-sync )();

let notas = []; // Declarado o vetor de notas

function inserirNotas(){
    let nota = Number(prompt("Digite a Nota: "))
    notas.push(nota);
}

function media(){
   let media = notas.reduce((media,nota)=>media+nota)/notas.length;
   console.log("A média é " +media);
}

function menu(){
    let continuar = true;
    while(continuar){
        console.log("===Sistema de notas/Medias===");
        console.log("|1. inserir Notas   |");
        console.log("|2. Calcular Media  |");
        console.log("|3. Sair            |");
        console.log("=====================")
        switch (operador){
            case "1":
                inserirNotas();
                break;
           
            case "2":
                calcularMedia();
                break;

            case "2":
                continuar = false;
                console.log("Saindo...");
                break;

        default:
            console.log("Informe uma opção Válida");
            break;

        } // Fim swith
    } // Fim While
} // Fim da Function

menu();