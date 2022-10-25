// Получить массив всех умений всех пользователей
// (поле skills), при этом не должно быть повторяющихся умений
// и они должны быть отсортированы в алфавитном порядке.
// const getSortedUniqueSkills = users => {
//   // твой код
// };
// console.log(getSortedUniqueSkills(users));
// // [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit',
// 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non',
// 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]

import users from "./users.js";

const getSortedUniqueSkills = users
  .flatMap((user) => user.skills)
  .filter((skill, index, users) => users.indexOf(skill) === index)
  .sort((a, b) => a.localeCompare(b));

console.log(getSortedUniqueSkills);
