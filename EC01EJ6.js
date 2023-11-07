/*
6.EJERCICIO 6: ALUMNOS DE PRIMERO Y SEGUNDO
Tienes una estructura que contiene los alumnos matriculados en cada uno de los módulos de un
ciclo de formación profesional. La estructura tiene el siguiente formato:
const modulos = [
{
nombre: 'Sistemas informáticos',
curso: 1,
alumnos: [
'Don Pepito', 'Perico', 'Don José'
]
},
...
{
nombre: 'Desarrollo Web en entorno cliente',
curso: 2,
asignatura: '',
alumnos: [
'Juan', 'Perico', 'Andrés', 'Don Pepito'
]
},
...
]
Construye un programa que imprima los alumnos que están matriculados a la vez en asignaturas
de primer y segundo curso.
Con los datos visibles en el ejemplo anterior debería imprimir: 'Perico' y 'Don Pepito'
Ten en cuenta que la estructura puede contener más asignaturas de primero y segundo, y no
tienen por qué estar en orden.
ciclo de formación profesional. La estructura tiene el siguiente formato:
*/

const modulos = [
    {
        nombre: 'Sistemas informáticos',
        curso: 1,
        alumnos: [
            'Don Pepito', 'Perico', 'Luis', 'Don José', 'Carlos'
        ]
    },
    {
        nombre: 'Entornos de desarrollo',
        curso: 1,
        alumnos: [
            'Don José', 'Carlos', 'Luis'
        ]
    },
    {
        nombre: 'Desarrollo Web en entorno cliente',
        curso: 2,
        asignatura: '',
        alumnos: [
            'Juan', 'Perico', 'Andrés', 'Don Pepito', 'Luis'
        ]
    }
]

let primero = [];
let segundo = [];
let ambos = [];
let anadir = false;

// Añadir cada alumno al curso que corresponda evitando repetidos
for (asig of modulos) {

    for (alum in asig.alumnos) {

        curs = asig.curso;
        nomb = asig.alumnos[alum];

        if (curs === 1) {
            anadir = true;
            for (i = 0; i < primero.length; i++) {
                if (primero[i] === nomb) {
                    anadir = false;
                    break;
                }
            }
            if (anadir) {
                primero.push(nomb);
            }
        } else if (curs === 2) {
            anadir = true;
            for (i = 0; i < segundo.length; i++) {
                if (segundo[i] === nomb) {
                    anadir = false;
                    break;
                }
            }
            if (anadir) {
                segundo.push(nomb);
            }
        }
    }
}

// Comprobar si cada alumno de primero está también en segundo y añadirlo a ambos
for (nomb1 of primero) {
    for (nomb2 of segundo) {
        if (nomb1 === nomb2) {
            ambos.push(nomb1);
        }
    }
}

// Mostrar resultados
console.log("Primero: " + primero);
console.log("Segundo: " + segundo);
console.log("Ambos: " + ambos);
