// Напиши функцію countProps(obj), що вважає кількість властивостей
// в об'єкті. Функція повертає число – кількість властивостей.
// const countProps = function(obj) {
//   // твой код
// };
// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(countProps({})); // 0
// console.log(countProps({ name: 'Mango', age: 2 })); // 2
// console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3

const countProps = function (obj) {
  const keys = Object.keys(obj);
  return keys.length;
};

console.log(countProps({})); // 0
console.log(countProps({ name: "Mango", age: 2 })); // 2
console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 })); // 3
