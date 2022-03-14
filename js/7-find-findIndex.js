const users = [
  { name: "geaglts", age: 22 },
  { name: "geaglts", age: 21 },
  { name: "mitoque", age: 40 },
];

/*
    FIND
    - Find regresa un objeto en base a una
    condicion.

    - En caso de que haya mas de un elemento que cumpla
    con la condicion se regresa el primero que encuentre.

    - En caso de que no encuentre un elemento regresa
    "undefined".
*/

// CODIGO
const user = users.find((item) => item.name === "geaglts");
console.log({ user });

/*
    FIND-iNDEX
    - Find index regresa la posicion dentro del
    arreglo en la que se encuentran.

    - Para que esto suceda se debe declarar una
    condicion.

    - En caso de que haya mas de un elemento que cumpla
    con la condicion se regresa el primero que encuentre.

    - En caso de que no encuentre un elemento regresa
    "-1"
*/

// CODIGO
const userIndex = users.findIndex((item) => item.name === "geaglts");
console.log({ userIndex });

const findItemAndIndexByName = (name = "") => {
  const user = users.find((item) => item.name === name);
  const userIndex = users.findIndex((item) => item.name === name);
  return { userIndex, user };
};

console.log(findItemAndIndexByName("mitoque"));
