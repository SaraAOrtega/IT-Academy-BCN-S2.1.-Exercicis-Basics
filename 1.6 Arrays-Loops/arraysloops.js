//Bloc 1.6: Arrays - Loops//

//NIVEL 1//  

/*Exercici 1
forEach: 
Teniu una array de noms. Utilitza forEach per a imprimir cada nom a la consola: 
let noms = ['Anna', 'Bernat', 'Clara'];
*/

let noms = ['Anna', 'Bernat', 'Clara'];

noms.forEach((nombres) => console.log(nombres));


/*Exercici 2
for-of: 
Teniu una array de noms.
Utilitza un bucle for-of per a imprimir cada nom a la consola: 
let noms = ['Anna', 'Bernat', 'Clara'];
*/
let array1 = ['Anna', 'Bernat', 'Clara'];

for (const nombres of array1){
    console.log (nombres)
}

/*Exercici 3
filter: 
Teniu una array de números. 
Utilitza filter per a crear una nova array que només contingui els números parells. 
let numeros = [1, 2, 3, 4, 5, 6]; */


const pares = (value) => {
    return value % 2 === 0;
};

let numeros = [1, 2, 3, 4, 5, 6];

let resultado = numeros.filter(pares);

console.log(resultado); 


//NIVEL 2//

/*Exercici 4
for-in: Teniu un objecte amb parells clau-valor: let obj = { nom: Ona, edat: 25, ciutat: 'Barcelona' }; 
Utilitza un bucle for-in per a imprimir a la consola cada clau i el seu valor corresponent.*/

let obj = { nom: 'Ona', edat: 25, ciutat: 'Barcelona' };

for (let clau in obj) {
  console.log(clau + ':', obj[clau]);
}


/*Exercici 5
for-of amb break: Teniu una array de números. Utilitza un bucle for-of per a imprimir a la consola els números fins a trobar el número 5, 
llavors atura el bucle: let numeros = [1, 2, 3, 4, 5, 6];*/

let num = [1, 2, 3, 4, 5, 6];

for (let numero of num) {
  console.log(numero);
  if (numero === 5) {
    break;
  }
}

//Nivell 3//


/*Exercici 6
Exercici 6
for-of amb index: Utilitza un bucle for-of per a imprimir a la consola cada element 
de l'array i la seva posició (index): let noms = ['Anna', 'Bernat', 'Clara']*/

let nombres = ['Anna', 'Bernat', 'Clara'];

for (let indice in nombres) {
  console.log(indice, nombres[indice]);
}
