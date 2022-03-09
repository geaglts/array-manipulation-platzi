/*
    - El map es una funcion que transforma un array original
    de forma inmutable o sea que no afecta al original.

    - Por lo que el map retorna un nuevo array.
*/
const list = ["✨", "🎎", "🧵", "🧤", "🎭"];
// const objectList = list.map((item) => ({ name: item }));

const app = document.querySelector("#app");
const iconElements = list.map((item) => `<li>${item}</li>`);
app.innerHTML = iconElements.join("");

// Map Reloaded

/* 
    - Si usamos map con objectos al momento de regresar
    el objeto lo que hace es hacer referencia a memoria.

    - Eso quiere decir que si modificamos un objeto
    del array dentro del map se modifica el objeto
    original.

    - Esto lo podemos solucionar con spread operator o con
    object.assing
*/

const users = [
  { name: "miguel", age: "" },
  { name: "maria", age: "" },
  { name: "miguel angel", age: "" },
];
// Problema 1
// Este map hace que ambos arreglos se modifiquen
/* const badMutedUsers = users.map((user) => {
  user.isPerson = true;
  return user;
});
console.log({ badMutedUsers, users }); */

// Solucion: Problema 1
const goodMutedUsers = users.map((user) => ({ ...user, isPerson: true }));
console.log({ goodMutedUsers, users });
