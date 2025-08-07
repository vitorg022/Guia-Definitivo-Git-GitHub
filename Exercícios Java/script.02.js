// Funçoes de String(texto)

var texto = "Aula de JavaScript";
console.log(texto.length); // Conta o nº caracteries

console.log(texto.toUpperCase()); // tudo MAIÚSCULO
conaole.log(texto.toLocaleLowerCase()) // tudo  MAIÙSCULO

// Manipulaçao de texto
console.log(texto.substring(0,4)) //Aula
console.log(texto.slice(-10)); //JavaScript
console.log(texto.replace("JavaScript" , "TyperScript"));


// split (usar um caracter em comum para separar em um vetor)

let linguagens = "JavaScript, C++, Python, Java, PHP";
let arrayLinguagens = linguagens.split(",");
console.log(arrayLinguagens);

// Trim (Tesoura
let tesoura= "  JavaScript  ";
console.log(tesoura.trim());
