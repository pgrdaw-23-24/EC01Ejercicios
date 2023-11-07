/*
5.EJERCICIO 5: LA MODA
Prepara un programa que construya una matriz de veinte números aleatorios entre 0 y 10. Una vez
construida dicha matriz, el programa debe calcular cual es la moda.
Para obtener un número aleatorio entre 0 y 10 puedes utilizar el siguiente código:
Math.floor(Math.random() * 10);
Puedes consultar cómo se calcula la moda en este
enlace:https://www.disfrutalasmatematicas.com/datos/moda.html
Un ejemplo de ejecución del programa sería:
[ 1, 2, 4, 5, 4 ,4 ,4 ,4 ,4 ,4 ,0 ,7, 8, 4 ,9, 7, 3, 3, 1, 0]
Moda: 4
*/

let matriz = [];                        // guarda los valores generados aleatroriamente
let contador = [0,0,0,0,0,0,0,0,0,0];   // cuenta cuantas veces aparece cada número
let moda = 0;

for (i=0; i<20; i++) {
    matriz[i] =  Math.floor(Math.random() * 10);    // generar nuevo valor de la matriz
    ++contador[matriz[i]];                          // aumentar en contador correspondiente

    if (contador[matriz[i]] >= contador[moda]) {    // comparar si contador del numero generado > el de la moda
        moda = [matriz[i]];                         // actualizar moda al valor generado
    }    
}

// Mostrar resultados
console.log("Matriz: [" + matriz + "]");
// console.log("Contador: " + contador);            // for debug
console.log("Moda: " + moda + " - Veces: " + contador[moda]);
