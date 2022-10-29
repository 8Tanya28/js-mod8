// Получить массив имен пользователей по полу (поле gender).
// const getUsersWithGender = (users, gender) => {
//   // твой код
// };
// console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley',
// 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

import users from "./users.js";

const getUsersWithGender = users(users, gender) => {
  .map((user) => user.gender)
  .filter({ gender })
  .includes("male");
};
console.log(getUsersWithGender(users, 'male'));
