//Bloc 1.3: Callbacks//

//Nivel 1//

/*Exercici 1
Callback bàsic: Escriu una funció anomenada processar que accepti dos paràmetres: un nombre i una funció de callback. 
La funció processar ha d'invocar la funció de callback, passant el nombre com a paràmetre.*/

const processar = (numero, callback) => {
    callback(numero);
};
const mostrarMensaje = (numero) => {
    console.log("El número es:", numero );
};
processar("78", mostrarMensaje); 


/*Exercici 2
Callbacks amb operacions matemàtiques: Escriu una funció calculadora que accepti tres paràmetres: 
dos nombres i una funció de callback. La funció calculadora ha d'invocar la funció de callback amb els dos nombres com a paràmetres. 
Després, crida calculadora amb una funció que faci la suma dels dos nombres.*/


const calculadora = (num1, num2, callback) => {
    callback(num1, num2);
};
const suma = (num1, num2) => {
    const resultado = num1 + num2;
    console.log("La suma es:", resultado);
};
calculadora(5, 8, suma); 


//NIVEL 2//

/*Exercici 3
Ús de callbacks en funcions asíncrones: Escriu una funció esperarISaludar que accepti dos 
paràmetres: un nom i una funció de callback. La funció ha d'esperar 2 segons i llavors invocar la funció de callback, 
passant el nom com a paràmetre.*/

const esperarISaludar = (nombre, callback) => {
    setTimeout(() => {
        callback(nombre);
    }, 2000);
};

const callbackHola = (nombre) => {
    console.log(`Hola, ${nombre}`);

};
esperarISaludar("Sara", callbackHola);


/*
Exercici 4
Callbacks amb arrays: Escriu una funció processarElements que accepti dos paràmetres: un array i 
una funció de callback. La funció processarElements ha d'invocar la funció de callback per cada element de l'array.*/

const processarElements = (array, callback) => {
    for (let i = 0; i < array.length; i++) {
        callback(array[i]);
    }
};

const callbackElementos = (elemento) => {
    console.log(`Procesar Elementos: ${elemento}`);
};

const array1 = [1, 2, 3, 4, 5];
processarElements(array1, callbackElementos);


//Nivell 3//


/*Exercici 5
Escriu una funció processarCadena que accepti dos paràmetres: una cadena de caràcters i una funció de callback. 
La funció processarCadena ha de convertir la cadena a majúscules i llavors invocar la funció de callback amb la cadena transformada.*/

const processarCadena = (cadena, callback) => {
    const cadenaEnMayusculas = cadena.toUpperCase();
    callback(cadenaEnMayusculas);
}
const cadenaEjemplo = "Cadena en mayúsculas!";
const callbackEjemplo = (cadena) => {
    console.log(`Cadena transformada: ${cadena}`);
};
processarCadena(cadenaEjemplo, callbackEjemplo);
