/*
3.LCD
Crea un programa que, dado un número, imprima en pantalla una representación de ese número
en un display LCD utilizando los caracteres — y |.
lcd(3):
—
 |
—
 |
—
lcd(45)
     —
| | |
 —   —
  |   |
     —
*/

function lcd(numero) {

    // mapa de leds
    // _1_
    // 2_3
    // _4_
    // 5_6
    // _7_

    // mapeo de leds activos para cada digito
    const leds = [
        '123567',   // 0
        '36',       // 1
        '13457',    // 2
        '13467',    // 3
        '2346',     // 4
        '12467',    // 5
        '124567',   // 6
        '136',      // 7
        '1234567',  // 8
        '123467'    // 9
    ]

    let codigo = leds[numero];
    
    // linea 1
    if (codigo.indexOf('1') == -1) {
        console.log('   ');
    } else {
        console.log(' - ');
    }

    // linea 2
    if ((codigo.indexOf('2') == -1) && (codigo.indexOf('3') == -1)) {
        console.log('   ');
    } else if ((codigo.indexOf('2') !== -1) && (codigo.indexOf('3') == -1)) {
        console.log('|  ');
    } else if ((codigo.indexOf('2') == -1) && (codigo.indexOf('3') !== -1)) {
        console.log('  |');
    } else {
        console.log('| |');
    }

    // linea 3
    if (codigo.indexOf('4') == -1) {
        console.log('   ');
    } else {
        console.log(' - ');
    }

    // linea 4
    if ((codigo.indexOf('5') == -1) && (codigo.indexOf('6') == -1)) {
        console.log('   ');
    } else if ((codigo.indexOf('5') !== -1) && (codigo.indexOf('6') == -1)) {
        console.log('|  ');
    } else if ((codigo.indexOf('5') == -1) && (codigo.indexOf('6') !== -1)) {
        console.log('  |');
    } else {
        console.log('| |');
    }

    // linea 5
    if (codigo.indexOf('7') == -1) {
        console.log('   ');
    } else {
        console.log(' - ');
    }
}

lcd(0)
lcd(1)
lcd(2)
lcd(3)
lcd(4)
lcd(5)
lcd(6)
lcd(7)
lcd(8)
lcd(9)
