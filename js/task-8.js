// Массив имен всех пользователей у которых есть друг с указанным именем.
// const getUsersWithFriend = (users, friendName) => {
//   // твой код
// };
// console.log(getUsersWithFriend(users, 'Briana Decker'));
// // [ 'Sharlene Bush', 'Sheree Anthony' ]
// console.log(getUsersWithFriend(users, 'Goldie Gentry'));
// // [ 'Elma Head', 'Sheree Anthony' ]

import users from "./users.js";

const getUsersWithFriend = (users, friendName) => {
  return users.filter(({ friends }) => friends.includes(friendName));
};

console.log(getUsersWithFriend(users, "Briana Decker"));

console.log(getUsersWithFriend(users, "Goldie Gentry"));
