/*
2.DIAMANTE
Crea una función diamante que cree un diamante con todas las letras hasta la letra pasada como
parámetro. Es suficiente con que funcione con letras mayúsculas. No hace falta que hagas
validaciones sobre parámetros.
Por ejemplo:
diamante('C')
--A--
-B-B-
C---C
-B-B-
--A--
*/

function diamante(letra) {
    const abecedario = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let posicion = abecedario.indexOf(letra);
    console.log(abecedario);                                        // for debug
    console.log("Letra: " + letra + " - Posición: " + posicion);    // for debug

    // lineas hasta la mitad
    for (i = 0; i <= posicion; i++) {                               // filas
        let linea = "";
        for (j = 0; j < (2 * posicion + 1); j++) {                  // columnas
            if ((j == posicion - i) || (j == posicion + i)) {
                linea = linea + abecedario[i];
            } else {
                linea = linea + '-';
            }
        }
        console.log(linea);
    }

    // resto de lineas
    for (i = posicion - 1; i >= 0; i--) {                           // filas
        let linea = "";
        for (j = 0; j < (2 * posicion + 1); j++) {                  // columnas
            if ((j == posicion - i) || (j == posicion + i)) {      
                linea = linea + abecedario[i];
            } else {
                linea = linea + '-';
            }
        }
        console.log(linea);
    }
}

diamante('F')