var prompt = require("prompt-sync")();
// Pedir a idade do usuário
let idade = prompt("Qual a sua idade?");

// Converter para número (o prompt retorna string)
idade = parseInt(idade);

// Verificar a Idade
if (idade < 18) {
    console.log("Você é menor de idade.");
} else if (idade >= 18 && idade <= 60) {
    console.log("Você é adulto.");
} else {
    console.log("Você é idoso.");
}

// Tabuada do número 5
for (let i = 1; i <= 10; i++) {
    console.log(`5 x ${i} = ${5 * i}`);
}

// Imprimir os números pares de 1 a 20
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}
