//Bloc 1.4: Rest & Spread operators//

//Nivel 1//

/*Exercici 1
Operador Spread en Arrays: Crea dues arrays, array1 i array2. Utilitza l'operador spread per a crear 
una tercera array que contingui tots els elements de array1 i array2 */

const array1 = [0,1,2,3]

const array2 = [4,5,6,7]

const array3 =[...array1, ...array2]

console.log (array3)

/*Exercici 2
Operador Rest en Funcions: Crea una funció 'suma' 
que utilitzi l'operador rest per a acceptar un nombre indeterminat d'arguments i retornar la seva suma.*/

function suma(...numeros) {
  return numeros.reduce((total, num) => total + num, 0);
}

console.log(suma(5, 10, 15, 30)); // Devuelve 60

//NIVEL 2//

/*Exercici 3
Copiant objectes amb Spread: Crea un objecte 'objecte1'. Després crea un segon objecte, 
'objecte2', que sigui una còpia de 'objecte1' utilitzant l'operador spread. Canvia una propietat de 'objecte2' 
i comprova que 'objecte1' no ha canviat.*/

const objecto1 = [1,2,3]

const objecto2 = [...objecto1]

objecto2[0] = 5;

console.log("Objecto1 original:", objecto1);
console.log("Objecto2 modificado:", objecto2);

/*Exercici 4
Rest en Destructuring: Crea una array amb diversos elements. Utilitza destructuring i l'operador rest per a assignar els primers dos 
elements a variables, i després assignar la resta dels elements a una tercera variable.*/

const elementos = [58, 45, "hola", 89];

let [a, b, ...rest] = elementos;

console.log("a:", a); // Resultado: 58
console.log("b:", b); // Resultado: 45
console.log("rest:", rest); // Resultado: ["hola", 89]


//Nivell 3//


/*Exercici 5
Spread en Funcions: Crea una funció que accepti tres arguments. Després, crea una array amb tres elements i crida 
la funció utilitzant l'operador spread amb aquesta array.*/

function miFuncion(a, b, c) {
    console.log("Argumento 1:", a);
    console.log("Argumento 2:", b);
    console.log("Argumento 3:", c);
  }
  const miArray = [1, 2, 3];
  
  miFuncion(...miArray);
  

/*Exercici 6
Fusionant Objectes amb Spread: Crea dos objectes amb propietats diferents. 
Utilitza l'operador spread per a fusionar aquests dos objectes en un de nou.*/

const objeto1 = { a: 1, b: 2 };
const objeto2 = { c: 3, d: 4 };

const objetoFusionado = { ...objeto1, ...objeto2 };

console.log(objetoFusionado); // Resultado: { a: 1, b: 2, c: 3, d: 4 }
