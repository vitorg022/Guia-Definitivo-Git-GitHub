// Operações avançadas em vetores (arrays)

// Map - percorre e faz uma ação 
numerosNovos = numeros.map(x => x*3);
console.log(numerosNovos);

// filtros - percorre e faz uma seleção
let numeros = [10, 20, 30, 40, 50];

let numMaior20 = numeros.filter(x => x > 20);
console.log (numMaior20);

//reduce
let soma = mumeros.reduce((acumulador, valorAtual)) = (acumulador + valorAtual,0);
console.log(soma); //150

// sort (organizador)

let aleatorio = [1, 3, 6, 9, 5, 4, 7, 8, 0, 9];
aleatorio.sort();
console.log(aleatorio);