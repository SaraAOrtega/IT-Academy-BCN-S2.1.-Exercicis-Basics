//Bloc 1.1: Arrow functions//

//Nivel 1//

/* Exercici 1
Conversió de funcions: Tens una funció add que accepta dos paràmetres i retorna la seva suma. 

Converteix-la en una funció de fletxa. Per exemple: function add(a, b) {return a + b;}.*/

let add =(a, b) =>{
    let resultado= a + b;  
}; //no se hace un return porque solo hay una operación//
console.log (5+10); 


/*Exercici 2
Funció de fletxa sense paràmetres: 
Crea una funció de fletxa anomenada randomNumber que no necessiti paràmetres i que retorni un número aleatori entre 0 i 100.*/


let randomNumber = () => {
    return Math.floor(Math.random() * 100 + 1); 
}

let resultado = randomNumber(); 

console.log(resultado);

/*Exercici 3
Ús de 'this' en les funcions de fletxa: Crea una classe person que tingui una propietat name i una funció greet que utilitzi 
una funció de fletxa. La funció ha d'imprimir una salutació que inclogui el nom de la persona. Per exemple: console.log(Hola, ${this.name});*/

class Person {
    constructor(nombre) {
        this._nombre = nombre;
    }
}

let greet = (nombre) => { // Aquí agregamos un parámetro nombre
    return "Hola, " + nombre; 
}

let saludo = greet("Sara"); // Llamamos a la función greet con el nombre que queremos saludar

console.log(saludo);

//Nivel 2//

/*Exercici 4
Funció de fletxa dins d'un loop: Crea una funció anomenada printNumbers que accepti un array de números i 
utilitzi un loop for per imprimir cada número a la consola utilitzant una funció de fletxa.*/

const printNumbers = (numeros) => {
    for (let i = 0; i < numeros.length; i++) {
      console.log(numeros[i]);
    }
  };
  const numeros = [2, 4, 6, 8, 10];
  printNumbers(numeros);
  
/*Exercici 5
Funció de fletxa amb 'setTimeout': Crea una funció de fletxa que imprimeixi 
un missatge a la consola després d'esperar 3 segons.*/

const esperar = () => {
    setTimeout(() => {
        console.log('Has esperado 3 segundos');
    }, 3000); // 3000 milisegundos = 3 segundos
};
esperar();

