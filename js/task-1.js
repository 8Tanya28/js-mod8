// Получить массив имен всех пользователей (поле name).
// const getUserNames = users => {
//   // твой код
// };
// console.log(getUserNames(users));
// // [ 'Moore Hensley', 'Sharlene Bush',
// 'Ross Vazquez', 'Elma Head', 'Carey Barr',
// 'Blackburn Dotson', 'Sheree Anthony' ]

import users from "./users.js";

const getUserNames = users.map((user) => user.name);
console.log(getUserNames);
