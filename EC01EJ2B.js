/*
2.EJERCICIO 2: BUENOS DÍAS
Construye un programa de Inteligencia Artificial que salude correctamente según la hora del día.
De 7 a 12 dirá “Buenos días”, de 12 a 20 “Buenas tardes”, de 20 a 2 “Buenas noches” y de 2 a 7 de
la mañana “¿Qué haces despierto a estas horas?”
Por ejemplo, en el siguiente caso:
const hora = 15
El programa diría “Buenas tardes”
*/

for (hora = -2; hora <= 26; hora++) {
    
    if (hora >= 0 && hora <= 24) {
        if (hora > 2 && hora <= 7) {
            console.log("Son las " + hora + ". ¿Qué haces despierto a estas horas?");
        } else if (hora > 7 && hora <= 12) {
            console.log("Son las " + hora + ". Buenos días");
        } else if (hora > 12 && hora <= 20) {
            console.log("Son las " + hora + ". Buenas tardes");
        } else {
            console.log("Son las " + hora + ". Buenas noches");
        }
    } else {
        console.log("Son las " + hora + " Hora no válida");
    }

}

