/* 
    - Como dice su nombre el filter sirve para
    filtrar elemntos.

    - No se como se puede entender esto pero el filter
    filtra.
*/

const users = [
  { name: "miguel", age: 20 },
  { name: "maria", age: 21 },
  { name: "miguel angel", age: 22 },
];
// Filtra por nombre
const nombre = "mariA";
const filteredByName = users.filter((user) =>
  user.name.trim().toLowerCase().includes(nombre.trim().toLowerCase())
);
// Funcion para filtrar por nombre
function filterByName(name = "") {
  const users = [
    { name: "miguel", age: 20 },
    { name: "maria", age: 21 },
    { name: "miguel angel", age: 22 },
  ];
  return users.filter((user) =>
    user.name.trim().toLowerCase().includes(name.trim().toLowerCase())
  );
}
console.log({ filterByName: filterByName("juan") });
