/*
    Includes:

    - Busca dentro de un arreglo o de un string si existe
    un elemento

    - Recibe lo que va a buscar, no una funcion.
*/

const names = ["miguel", "juana", "federica"];
const numbers = [22, 34, 23, 54];

const hasInNames = names.includes("juana");
const hasInNumbers = numbers.includes(22);

console.log({ hasInNames, hasInNumbers });
