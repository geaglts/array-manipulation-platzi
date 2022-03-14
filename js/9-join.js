/* 
    Join:
    - Une un arreglo de elementos mediante separadores.
    - No funciona con objetos.
*/

const names = ["miguel", "angel", "toledo", "santiago"];
console.log(names.join(" "));

const users = [
  { name: "geaglts", age: 22 },
  { name: "geaglts", age: 21 },
  { name: "mitoque", age: 40 },
];
console.log(users.join(" "));
