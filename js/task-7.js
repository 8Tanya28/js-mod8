// Получить общую сумму баланса (поле balance) всех пользователей.
// const calculateTotalBalance = users => {
//   // твой код
// };
// console.log(calculateTotalBalance(users)); // 20916

import users from "./users.js";

const calculateTotalBalance = users.reduce(function (total, user) {
  return total + user.balance;
}, 0);

console.log(calculateTotalBalance);
