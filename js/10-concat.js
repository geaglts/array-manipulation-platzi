/* 
    Concat:
    - Si tenemos 2 array los podemos fucionar con concat, 
    es un metodo inmutable por lo que no modifica los
    originales.
*/

const numbers = [1, 2, 3, 4];
const letters = ["a", "b", "c", "d"];

const concatenation = numbers.concat(letters);
const concatWithSpread = [...numbers, ...letters];
// En este caso se separa el string en caracteres
const concatStringWithSpread = [...concatWithSpread, ..."test"];
// El metodo push regresa cuantos elementos tiene ahora
// el nuevo arreglo que se genero.
// Pero este metodo si muta al arreglo original por lo que
// Debemos tener mucho cuidado con el.
numbers.push(...[5, 6, 7, 8]);

console.log({
  concatenation,
  numbers,
  letters,
  concatWithSpread,
  concatStringWithSpread,
  modeNumbers,
});
