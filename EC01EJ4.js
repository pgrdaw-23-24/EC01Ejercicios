/*
4.EJERCICIO 4: FIZZBUZZ
Escribir un programa que muestre en pantalla los números del 1 al 300 sustituyendo los números
que terminen en 3 por la palabra “fizz”, los números que acaben en 5 por “buzz” y los números que
acaben en 15 por la palabra “fizzbuzz”.
Un ejemplo de salida sería:
1, 2, fizz, 4, buzz,... , 14, fizzbuzz, 16,...
Puedes separar los números por coma o escribir uno en cada línea
*/

for (i=1; i<=300; i++) {
    if (i%100 === 15) {
        console.log("fizzbuzz")
    } else if (i%10 === 5) {
        console.log("buzz")
    } else if (i%10 === 3) {
        console.log("fizz")
    } else {
        console.log(i)
    } 
}
