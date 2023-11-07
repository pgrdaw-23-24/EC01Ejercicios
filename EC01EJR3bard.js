// Función para calcular el cambio a devolver
function calcularCambio(monedas, cambio) {
    // Ordenamos las monedas de mayor a menor valor
    monedas.sort((a, b) => b - a);
  
    // Inicializamos un arreglo para almacenar el cambio
    const cambioAdevolver = [];
  
    // Iteramos sobre las monedas
    for (const moneda of monedas) {
      // Calculamos el número de monedas de la misma denominación que caben en el cambio
      const n = Math.floor(cambio / moneda);
  
      // Si cabe al menos una moneda, la añadimos al cambio
      if (n > 0) {
        cambioAdevolver.push({
          denominación: moneda,
          cantidad: n,
        });
  
        // Actualizamos el cambio restante
        cambio -= n * moneda;
      }
    }
  
    // Devolvemos el cambio calculado
    return cambioAdevolver;
  }
  
  // Ejemplo de uso
  const monedas = [0.10, 0.50, 1, 2, 5];
  const cambio = 9.50;
  
  const cambioCalculado = calcularCambio(monedas, cambio);
  
  console.log(cambioCalculado); // [{"denominación": 0.50, "cantidad": 1}, {"denominación": 2, "cantidad": 2}, {"denominación": 5, "cantidad": 1}]
  