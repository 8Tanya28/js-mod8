// Получить массив только неактивных пользователей (поле isActive).
// const getInactiveUsers = users => {
//   // твой код
// };
// console.log(getInactiveUsers(users)); // [объект Moore Hensley,
// объект Ross Vazquez, объект Blackburn Dotson]

import users from "./users.js";

const getInactiveUsers = users.filter(({ isActive }) => isActive);

console.log(getInactiveUsers);
