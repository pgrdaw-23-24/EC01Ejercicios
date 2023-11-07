/*
3.EJERCICIO 3: DÍA DE LA SEMANA
El 1 de enero de 2021 fue viernes.
Prepara un programa que, dado un día y un mes (de 2021) calcule qué día de la semana es.
Por ejemplo, si el programa tiene de entrada:
const dia = 10
const mes = 1
debería imprimir “Domingo”.
No puedes utilizar ninguna función predefinida de manejo de fechas de JavaScript (puedes hacerlo
calculando cuántas semanas y días han pasado desde el 1 de enero, por ejemplo)
*/

const dia = 10;
const mes = 1;
const diaSemana = ["Viernes", "Sábado", "Domingo", "Lunes", "Martes", "Miércoles", "Jueves"] // 1-1-2021 Viernes

let tdias = 0;      // total dias trasncurridos
let nsemanas = 0;   // semanas enteras trascurridas
let ndias = 0;      // dias extra transcurridos

// sumar a tdias los días correspondientes a meses enteros transcurridos
for (i = 1; i < mes; i++) {
    if (i === 1 || i === 3 || i === 5 || i === 7 || i === 8 || i === 10 || i === 12 ) {
        tdias += 31;
    } else if (i === 4 || i === 6 || i === 9 || i === 11 ) {
        tdias += 30;
    } else {   
        tdias += 28;
    }
}

// Sumar a tdias los días correspondientes al mes en curso
tdias += dia;

// Cacular semanas transcurridas y días restantes
nsemanas = parseInt(tdias/7);
ndias = tdias%7;
// console.log("tdias: " + tdias + " = nsemanas: " + nsemanas + " + ndias: " + ndias); // debug

// Mostrar resultado
console.log(diaSemana[ndias-1]);

