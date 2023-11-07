/*
3. EJERCICIO 3
Crea un programa que calcule el cambio a devolver. El programa tendrá como entrada una lista de
monedas/billetes disponibles y la cantidad a devolver. Como salida, devolverá el cambio a utilizar
(puedes hacer que lo devuelva como texto o como cualquier estructura de datos que consideres)
Por ejemplo:
Entrada
----------------
Monedas disponibles: [ 0.10, 0.50, 1, 2, 5]
Cambio a devolver: 9.50
Resultado: 0.50x1, 2x2, 1x5
Debe devolver el cambio con la menor cantidad posible de monedas y billetes. En el ejemplo
anterior, la solución 0.10x5, 4x1, 1x5 sería incorrecta ya que se usan 11 monedas, al contrario que
en la solución del ejemplo en la que se utilizan 4
*/

let disp = [0.01, 0.02, 0.05, 0.10, 0.20, 0.50, 1, 2, 5, 10, 20, 50];
let cambio = 9.53;
let resto = cambio;
let resul = "";

for (i=disp.length-1; i>=0; i--) {

    if (disp[i]<=resto) {
        resul = resul + disp[i] + "x" + parseInt(resto/disp[i]) + ", ";
        resto = resto%disp[i] + 0.00001;  // añado 0.00001 para compensar el redondeo
        // console.log(i + ". " + disp[i] + " - resul: " + resul + " resto: " + resto) // para depuración
    }
}

console.log("Resultado: " + resul)