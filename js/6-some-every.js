const elements = [1, 2, 3, 4, 5, 6, 10];

/* 
    - Some regresa verdadero si al menos un valor
    cumple con alguna condicion, si ninguno cumple
    regresa falso.
*/

// Hay un par
const isEven = elements.some((value) => value % 2 === 0);
console.log({ isEven });

/* 
    - every por el contrario regresa verdadero si
    todos los elementos del arreglo cumplen con la 
    condicion establecida.

    - en caso de que alguna no la cumpa regresa false
*/

const allUnderTen = elements.every((item) => item < 10);
console.log({ allUnderTen });
