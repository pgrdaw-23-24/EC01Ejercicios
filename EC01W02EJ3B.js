/*
3.LCD
Crea un programa que, dado un número, imprima en pantalla una representación de ese número
en un display LCD utilizando los caracteres — y |.

lcd(45)
     —
| | |
 —   —
  |   |
     —
*/

function lcd(numero) {

    // mapa de leds
    // linea 1: " — "
    // linea 2: "| |"
    // linea 3: " — "
    // linea 4: "| |"
    // linea 5: " — "

    // matriz de leds para cada digito (5 filas)
    const leds = [
        [' — ', '| |', '   ', '| |', ' — '],    // 0
        ['   ', '  |', '   ', '  |', '   '],    // 1
        [' — ', '  |', ' — ', '|  ', ' — '],    // 2
        [' — ', '  |', ' — ', '  |', ' — '],    // 3
        ['   ', '| |', ' — ', '  |', '   '],    // 4
        [' — ', '|  ', ' — ', '  |', ' — '],    // 5
        [' — ', '|  ', ' — ', '| |', ' — '],    // 6
        [' — ', '  |', '   ', '  |', '   '],    // 7
        [' — ', '| |', ' — ', '| |', ' — '],    // 8
        [' — ', '| |', ' — ', '  |', ' — '],    // 9
    ]

    let display = ['', '', '', '', ''];     // inicializar display de 5 lineas
    numero = String(numero);                // convertir numero en String para iterar

    for (i = 0; i < 5; i++) {               // generar cada linea del display
        for (digito of numero) {            // generar la parte de cada digito en cada linea
            display[i] += ' ' + leds[digito][i];
        }
        console.log(display[i]);            // dibujar la linea
    }
}

// probar
lcd(1234567890);
