// Получить массив пользователей попадающих
// в возрастную категорию от min до max лет (поле age).
// const getUsersWithAge = (users, min, max) => {
//   // твой код
// };
// console.log(getUsersWithAge(users, 20, 30));
// // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]
// console.log(getUsersWithAge(users, 30, 40));
// // [объект Moore Hensley, объект Sharlene Bush,
// объект Blackburn Dotson, объект Sheree Anthony]

import users from "./users.js";

const getUsersWithAge = (users, min, max) => {
  // if (users.age > min && users.age < max) return getUsersWithAge;
  users.filter(({age}) => age >= min && < max)
};

console.log(getUsersWithAge(users, 20, 30));

console.log(getUsersWithAge(users, 30, 40));
