//Bloc 1.7: Promises & Async/Await//

//NIVEL 1//  

/*Exercici 1
Creació d'una Promesa: Crea una promesa que es resolgui després de 2 segons i que retorni la cadena de text 'Hola, món'.
*/

promesaSaludo = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('¡Hola, mundo! ');
    }, 2000);
});

promesaSaludo.then((resultado) => {
    console.log(resultado);
});




/*Exercici 2
Utilització d'una Promesa: Utilitza la promesa creada en l'exercici anterior. Crea un .then que imprimeixi el resultat a la consola.
*/

promesaSaludo

    .then((resultado) => {
        console.log(resultado);

    })

    .catch((error) => {
        console.log(error);
    });



/*Exercici 3
Promesa amb reject: Crea una promesa que es resolgui després de 2 segons si l'input és igual a 
'Hola', i que la rebutgi si l'input és qualsevol altra cosa. */


promesaSaludo2 = (input) => {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            if (input === 'Hola') {
                resolve('Saludo recibido');

            } else {
                reject('Saludo NO recibido');
            }
        }, 2000);
    });
};

promesaSaludo2('Hola')
    .then((resultat) => {
        console.log(resultat);
    })
    .catch((error) => {
        console.error(error);
    });


/*Exercici 4
Ús de async/await: Escriu una funció asíncrona que utilitzi la funció await per a esperar 
el resultat de la promesa creada a l'exercici 1, i que després imprimeixi aquest resultat a la consola. */

promesaSaludo3 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('¡Hola, mundo!');
        }, 2000);
    });
};

funcionAsincrona = async () => {
    try {
        let resultat = await promesaSaludo3();
        console.log(resultat);
    } catch (error) {
        console.error(error);
    }
};

funcionAsincrona();


//NIVEL 2//

/*Exercici 5
Gestió d'errors amb async/await: Modifica la funció de l'exercici 4 per a que capturi 
qualsevol possible error utilitzant un bloc try/catch.*/

promesaSaludo4 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('¡Hola, mundo! ');
        }, 2000);
    });
};

funcionAsincrona = async () => {
    try {
        let resultat = await promesaSaudo4();
        console.log(resultat);
    } catch (error) {
        console.error(error);
    }
};

funcionAsincrona();


//Nivell 3//


/*Exercici 6
Promise.all: Crea dues promeses que es resolguin després de 2 i 3 segons, respectivament. 
Utilitza Promise.all per a esperar que ambdues promeses es resolguin, i imprimeix els resultats a la consola.*/

let promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('promesa 1');
    }, 2000);
});

let promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('promesa 2');
    }, 3000);
});

Promise.all([promise1, promise2]).then(results => {
    console.log(results);
});