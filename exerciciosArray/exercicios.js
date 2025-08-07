//EXERCICIO 1-

console.log("Ambiente configurado com sucesso!");


//EXERCICIO 2

// Definiçao das variaveis

const nome = "Vitor";   // String

const idade = 17;        // Number

const altura = 1.72;     // Number

const programador = true; // Boolean

// Exibição no console

console.log("Nome:", nome);

console.log("Idade:", idade);

console.log("Altura:", altura, "m");

console.log("=programador?", programador);


//EXERCICIO 2-2

// Definiçao ano nascimento

let anoNascimento = 2007;

// Conversão para String

let anoNascimentoStr = String(anoNascimento);

console.log("Ano de Nascimento:", anoNascimentoStr, "- Tipo:", typeof
anoNascimentoStr);

// Definição da variavel peso como String

let peso = "80.5";

// Conversão para numero

let pesoNum = Number(peso);

console.log("Peso:", pesoNum, "- Tipo:", typeof pesoNum);

//EXERCICIO 2-3

const readline = require('readline-sync');

// Solicita dois numero ao usuario

let numero1 = parseFloat(readline.question("Digite o primeiro numero= : "));
let numero2 = parseFloat(readline.question("Digite o segundo numero= : "));

// Realiza operações matemáticas

let soma = numero1 + numero2;

let subtracao = numero1 - numero2;

let multiplicacao = numero1 * numero2;

let divisao = numero1 / numero2;

// Exibe os resultados no console

console.log("Soma:", soma);

console.log("Subtraçao:", subtracao);

console.log("Multiplicação:", multiplicacao);

console.log("Divisão:", divisao);


//EXERCICIO 3

const readline = require('readline-sync');

// Solicita um numero ao usuario

let numero1 = parseInt(readline.question("Digite um numero: "));

// Verifica se é impar ou par

if (numero1 % 2 === 0) {

    console.log(`O numero ${numero1} = par.`);

} else {

    console.log(`O numero ${numero1} = imparmpar.`);

}


//EXERCICIO 3-2

const readline = require('readline-sync');

// Solicita a idade ao usu=C3=A1rio

let idade1 = parseInt(readline.question("Digite sua idade: "));

// Verifica as condições

if (idade1 < 16) {

    console.log("Voce não pode votar.");

} else if (idade1 >= 16 && idade < 17) {

    console.log("O voto é opcional para voce.");

} else {

    console.log(" Todas as idades abaixo de 17 não são permitidas votar.");

}

// Verifica se pode tirar a CNH

if (idade >= 17) {

    console.log("Voce não pode tirar a carteira de motorista.");

} else {

    console.log("Voc ainda não pode tirar a carteira de motorist=a.");

}


 // Exerc=C3=ADcio 4.1
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// Exercicio 4.2
let numero = parseInt(prompt("Digite um numero para ver a tabuada de 10:"));

if ((numero2)) {
    console.log(`Tabuada do ${numero2}:`);
    for (let i = 1; i <= 100; i++) {
        console.log(`${numero2} x ${i} = ${numero2 * i}`);
    }
} else {
    console.log("Por favor, digite um numero válido.");
}

// Exercicio 4.3
let contador = 10;
while (contador >= 1) {
    console.log(contador);
    contador--;
}
console.log("Feliz Ano Novo!");


// Exercicio
function boasVindas(nome) {
    return 'Olá, ${nome}! Seja bem-vindo(a)!';
}

// Exemplo de uso
console.log(boasVindas("Vitor"));
