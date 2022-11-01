// Напиши скрипт для створення галереї зображень по масиву даних.
// В HTML є список ul#gallery.
// <ul id="gallery"></ul>
// Використовуй масив об'єктів images для створення тегів
// img вкладених в li. Для створення розмітки використовуй шаблонні
// рядки і insertAdjacentHTML().
// Всі елементи галереї повинні додаватися в DOM за одну операцію вставки.
// Додай мінімальне оформлення галереї флексбоксами або грід через css-класи.
const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const galeryList = document.querySelector("ul");
console.log(galeryList);
const createGalery = images
  .map(({ url, alt }) => `<li> <img src='${url}' alt='${alt}' width=200> </li>`)
  .join("");

galeryList.insertAdjacentHTML("afterbegin", createGalery);

// galeryList.style.

// 2 variant
// const galleryListEl = document.querySelector("ul");

// const elements = images.map((image) => {
//   const galleryItemEl = document.createElement("li");
//   galleryItemEl.classList.add("img-item");

//   const galleryImgEl = document.createElement("img");
//   galleryImgEl.src = image.url;
//   galleryImgEl.alt = image.alt;

//   galleryItemEl.appendChild(galleryImgEl);

//   return galleryItemEl;
// });

// galleryListEl.append(...elements);
