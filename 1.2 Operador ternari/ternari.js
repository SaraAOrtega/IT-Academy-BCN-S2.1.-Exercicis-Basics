//Bloc 1.2: Operador Ternari//

//Nivel 1//

/*Exercici 1
Operador ternari bàsic: Escriu una funció potConduir que accepti l'edat com a paràmetre i utilitzi l'operador ternari per determinar 
si l'usuari pot conduir. Si l'edat és 18 o més, ha de retornar 'Pots conduir'. Si no, ha de retornar 'No pots conduir'.*/

let edad = 18; 

let carnet = edad >=18? 'Puede conducir' : 'NO puede conducir'; 

console.log(carnet); 


/*Exercici 2
Ús amb operadors de comparació: Escriu una expressió que utilitzi l'operador ternari per 
determinar quin dels dos nombres donats (num1 i num2) és més gran. Si num1 és més gran, retorna 'num1 és més gran'. Si no, 
retorna 'num2 és més gran'*/

let num1=7; 

let num2=6

let comparacion= num1 > num2 ? 'El número 1 es mayor': "El número 2 es mayor"; 

console.log (comparacion)



//Nivel 2//

/*Exercici 3
Ús enllaçat d'operadors ternaris: Escriu una expressió que utilitzi enllaços 
d'operadors ternaris per determinar si un número és positiu, negatiu o zero.

Operador ternari amb funcions: Crea una funció trobarMaxim que accepti tres paràmetres (a, b, c) 
i utilitzi l'operador ternari per determinar el valor màxim.*/

let numero = 9;

let positivoNegativo = numero > 0 ? 'Es positivo' : (numero < 0 ? 'Es negativo' : 'Es cero');

console.log(positivoNegativo);



const trobarMaxim = (a, b, c) => {
    const maximo= a > b ? (a > c ? a : c) : (b > c ? b : c);
    return maximo; 
}
let resultado = trobarMaxim(8, 10, 12);
console.log("El máximo es:", resultado); 


//Nivel 3//


/*Exercici 4

Operador ternari dins un bucle:
Escriu una funció parOImpar que accepti un array de números i utilitzi un bucle per a recórrer l'array.
Dins del bucle, utilitza l'operador ternari per a determinar si cada número és parell o imparell.*/

const parOImpar = (numeros) => {
    for (let i = 0; i < numeros.length; i++) {
        const resultado = numeros[i] % 2 === 0 ? 'Par' : 'Impar';
        console.log(`${numeros[i]} ${resultado}`);
    }
};

const arrayNumeros = [2, 8, 3, 11, 159, 178, 21, 123];
parOImpar(arrayNumeros);