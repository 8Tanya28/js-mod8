// Напиши функцію getAllPropValues(arr, prop),
// яка отримує масив об'єктів та ім'я властивості.
// Повертає масив значень певної властивості prop кожного об'єкта в масиві.
// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 2 },];
// const getAllPropValues = function(arr, prop) {  твой код };
//  * Вызовы функции для проверки работоспособности твоей реализации.
// console.log(getAllPropValues(products, 'name')); // ['Радар', 'Сканер', 'Дроид', 'Захват']
// console.log(getAllPropValues(products, 'quantity')); // [4, 3, 7, 2]
// console.log(getAllPropValues(products, 'category')); // []

const products = [
  { name: "Радар", price: 1300, quantity: 4 },
  { name: "Сканер", price: 2700, quantity: 3 },
  { name: "Дроид", price: 400, quantity: 7 },
  { name: "Захват", price: 1200, quantity: 2 },
];

const getAllPropValues = (arr, prop) => {
  const names = [];

  for (const product of products) {
    names.push(product.name);
  }
  return names;

  const quantitys = [];
  for (const product of products) {
    quantitys.push(product.quantity);
  }
  return quantitys;
};

console.log(getAllPropValues(products, "name")); // ['Радар', 'Сканер', 'Дроид', 'Захват']
console.log(getAllPropValues(products, "quantity")); // [4, 3, 7, 2]
console.log(getAllPropValues(products, "category")); // []
