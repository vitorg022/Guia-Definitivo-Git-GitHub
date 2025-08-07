//  array e matrizes
 // Declaração de um arrayz
 let dados = []; // uso de colchetes permite a declaração de uma

 let numeros = [1,2,3,4,5,6,7,8,9];
 let palavras = ["Bola", "Sapato", "Caixa"];

 console.log(numeros.length); // quantidades de elementos do array

 // indices do array 

 // imprimir o 5º elemento de um array
 console.log(numeros[4]);

 // adicionar elementos dp array
 palavras.push("Cachorro"); // no final do array
 console.log(palavras);

 palavras.unshift("prédio");
 console.log(palavras);

 // remover elementos
 palavras.pop(); // remove o ultimo elemento 
 palavras.shift(); // remove o primeiro elemento

 // forEach - repetição em um vetor 
 palavras.forEach(palavra => {
    console.log(palavra);
 });

 palavras.splice(1,1);

 // manipulações de arrays
 let numerosDobro = numeros.mmap(x => x*10);
 console.log(numerosDobro);

  // Alterar o Valor de um Elemento
  palavras[2]="Sacola";
  console.log(palavras);

  // Percorrer um Array
  for(let i = 0; i<numeros.length;i++){
   console.log("numero["+i+"]="+numeros[i])
  }

  // Manipulação de um Array
  let NumerosDobro = numeros.map(x => x*10);
  console.log(numerosDobro);
  