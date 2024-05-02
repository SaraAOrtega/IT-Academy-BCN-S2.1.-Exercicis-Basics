//Bloc 1.5: Rest & Spread operators//

//Nivel 1//

/*Exercici 1
Map: Teniu un array de números [1, 2, 3, 4]. Crea una nova array que contingui el quadrat de cada número. */

const exercici1 = [1, 2, 3, 4];


const cuadrados = exercici1.map(numero => numero ** 2);

console.log(cuadrados); // Resultado: [1, 4, 9, 16]



/*Exercici 2
Filter: Teniu una array de números [1, 2, 3, 4]. Crea una nova array que només contingui els números parells.*/

const exercici2 = [1, 2, 3, 4];


const parells = exercici2.filter(numero => numero % 2 ===0);

console.log(parells);



/*Exercici 3
Find: Teniu una array de números [1, 10 , 8, 11]. Utilitza la funció find per a trobar el primer número que és major a 10.*/

const exercici3 = [1, 10, 8, 13,14];
const mayor10 = exercici3.find(numero => numero > 10);

console.log(mayor10);


/*Exercici 4
Reduce: Teniu una array de números [13, 7, 8, 21]. Fes servir la funció reduce per a calcular la suma total dels números.*/

const exercici4 = [13, 7, 8, 21];
const suma = exercici4.reduce((total, numero) => total + numero, 0);

console.log(suma); // Resultado: 49


//NIVEL 2//

/*Exercici 5
Donat un array "[ 1, 3, 7, 10 ,15, 17, 11, 5, 8, 12, 9 ]", crea una funció en una sola línia que faci el següent:

Filtra els nombres majors o iguals a 10.
Multiplica cada nombre filtrat per 2.
Calcula la suma dels nombres filtrats i multiplicats per 2.
La funció ha de retornar el resultat de la suma*/


const array = [1, 3, 7, 10, 15, 17, 11, 5, 8, 12, 9];

const resultado = array.filter(numero => numero >= 10).map(numero => numero * 2).reduce((total, numero) => total + numero, 0);

console.log(resultado); //130


//Nivell 3//


/*Exercici 6
Every / Some: Usa every i some per a determinar si tots o alguns dels elements de l'array [11, 12, 13, 14] són majors que 10, respectivament*/

const array2 = [11, 12, 13, 14];

// Determinar si todos los elementos son mayores que 10
const todos10 = array.every(numero => numero > 10);
console.log("¿Todos los números son mayores que 10?", todos10); // Resultado: true

// Determinar si algunos de los elementos son mayores que 10
const algunos10 = array.some(numero => numero > 10);
console.log("¿Alguno números es mayor que 10?", algunos10); // Resultado: true

