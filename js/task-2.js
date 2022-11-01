// В HTML є пустий список ul#ingredients.
// <ul id="ingredients"></ul>
// В JS є масив рядків.
// const ingredients = [
//   'Картопля',
//   'Гриби',
//   'Часник',
//   'Помідори',
//   'Зелень',
//   'Приправи',
// ];
// Напиши скрипт, який для кожного елемента масиву
// ingredients створить окремий li, після чого вставить
// всі li за одну операцію в список ul.ingredients.
// Для створення DOM-вузлів використовуй document.createElement().

const ingredients = [
  "Картопля",
  "Гриби",
  "Часник",
  "Помідори",
  "Зелень",
  "Приправи",
];

const ingredientsItem = document.querySelector("#ingredients");
// console.log(ingredientsItem);
// console.log(ingredients);
const listItemRef = ingredients.map((ingredient) => {
  const listRef = document.createElement("li");
  listRef.textContent = ingredient;
  return listRef;
});
ingredientsItem.append(...listItemRef);
