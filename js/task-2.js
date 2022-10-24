// Получить массив объектов пользователей по цвету глаз (поле eyeColor).
// const getUsersWithEyeColor = (users, color) => {
//   // твой код
// };
// console.log(getUsersWithEyeColor(users, 'blue')); // [объект Moore Hensley,
// объект Sharlene Bush, объект Carey Barr]

import users from "./users.js";

const getUsersWithEyeColor = users
  .filter((users) => users.eyeColor)
  .includes("blue");
console.log(getUsersWithEyeColor);
