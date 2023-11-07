/*
1.EJERCICIOS REST Y SPREAD
1.1 ELEMENTOS ÚNICOS
Escribe una función llamada uniques que acepte un número variable de argumentos y devuelva un
array que contenga todos los argumentos pero eliminando los repetidos.
Por ejemplo:
uniques(2, 4, 'patata', [1,2], [1, 2], 'patata', 4) => [2, 4, 'patata', [1,2], [1,2])
Ten en cuenta que [1,2] y [1,2] son dos arrays diferentes, y por tanto no se consideran duplicados
*/

function uniques(...args) {
    uniq = new Set(args);
    console.log(args);  // for debugging
    console.log(uniq);
}

/*
1.2 Combinación de Arrays
Escribe una función combineArrays que, usando el operador spread, reciba dos arrays como
parámetros y devuelva un array con el contenido de ambos arrays: primero el segundo y después el
primero.
Por ejemplo:
combineArrays([1,2], [3,4]) => [3,4,1,2]
*/

function combineArrays(arr1, arr2) {
    let comb = [...arr2, ...arr1];
    console.log(comb)
}

/*
1.3 Suma de números
Crea una función llamada sumNumbers que acepte un número arbitrario de argumentos (de
cualquier tipo) y devuelva la suma de los argumentos numéricos.
Por ejemplo:
sumNumbers('hola', 2, 3, [10, 20, 30], { value: 300 }) => 5
*/

function sumNumbers(...args) {
    let suma = 0;
    for (valor of args) {
        if (!isNaN(valor)) {
            suma += valor;
            console.log("+ " + valor);  // for debugging
        }        
    }
    console.log("Suma: " + suma);
} 