/* 
    - Reduce toma un conjunto de elementos y regresa
    un solo valor
*/

const elementos = [1, 2, 3, 3, 3, 4];

// Sumar elementos con for normal
/* let sumaTotal = 0;
for (let index = 0; index < elementos.length; index++) {
  const element = elementos[index];
  sumaTotal += element;
} */

// Suma de elementos con reduce
/* 
    - Como podemos ver con reduce es mucho mas facil de realizar
    este tipo de reducciones a un solo valor.

    - Recibe 2 parametros: una funcion y el estado inicial.
*/
/* const sumaTotal = elementos.reduce((sum, element) => sum + element, 0);
console.log(sumaTotal);
 */

// Reduce reloaded
// Histograma de cuantos numeros se repiten
/* const elementosRepetidos = elementos.reduce((prev, current) => {
  if (prev[current]) {
    prev[current] = prev[current] + 1;
  } else {
    prev[current] = 1;
  }
  return prev;
}, {});
console.log(elementosRepetidos); */

// pipeline: La salida de uno es la entrada del otro
const items = [1, 2, 3, 4, 5, 6, 7, 67, 45, 34, 100, 34, 56];
const rangos = items.reduce((prev, current) => {
  if (current > 0 && current <= 50) {
    // hay un elemento dentro del rango
    if (prev["0-50"]) {
      // Ya hay un elemento dentro del objeto de rangos
      // se le suma 1
      prev["0-50"] += 1;
    } else {
      // Si es el primero el valor se iguala a uno
      prev["0-50"] = 1;
    }
  } else if (current > 50 && current <= 100) {
    // hay un elemento dentro del rango
    if (prev["51-100"]) {
      // Ya hay un elemento dentro del objeto de rangos
      // se le suma 1
      prev["51-100"] += 1;
    } else {
      // Si es el primero el valor se iguala a uno
      prev["51-100"] = 1;
    }
  }
  return prev;
}, {});
console.log(rangos);
