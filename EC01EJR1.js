/*
1. EJERCICIO 1
Dada una serie de números, dividirla en dos series diferentes: una con los números más grandes y
otra con los números más pequeños.
Por ejemplo:
Serie: 1, 5 ,8,40, 100, -3, 2.5, 3000
Salida
-------
Pequeños: -3, 1, 2.5, 5
Grandes: 8, 40, 100, 3000
Puedes representar la serie como una constante, no hace falta que el programa lea los datos. No
importa el orden en el que estén los números en las dos series que construyas
*/

console.log("Ejecutando Ejercicio1");

let serie = [1, 5, 8, 40, 100, -3, 2.5, 3000];
let peq = [];
let gra = [];

console.log("Serie: " + serie);

for (i = 0; i < serie.length; i++) {

    let maspeq = 0; // cantidad de elementos más pequeños
    let masgra = 0; // cantidad de elementos más grandes

    // comparar cada elemento del array con todos los demás elementos del array
    for (j = 0; j < serie.length; j++) {
        if (serie[j] < serie[i]) {
            maspeq++;
        } else if (serie[j] > serie[i]) {
            masgra++;
        }
    }

    // añadir a la lista de números grandes o pequeños
    if (masgra > maspeq) {
        peq.push(serie[i]);
    } else if (masgra < maspeq) {
        gra.push(serie[i]);
    }

    console.log("serie[" + i + "]: " + serie[i] + " - Mayores: " + masgra + " - Menores: " + maspeq);

}

// mostrar listas
console.log("Pequeños: " + peq);
console.log("Grandes:  " + gra);
