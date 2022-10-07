// Напиши скрипт, який для об'єкта user послідовно:

// додає поле mood зі значенням'happy'
// замінює значення hobby на'skydiving'
// замінює значення premium на false
// виводить вміст об'єкта user у форматі ключ:значение
// використовуючи Object.keys()та for...of
// const user = {
//   name: 'Mango',
//   age: 20,
//   hobby: 'html',
//   premium: true,
// };

// const user = {
//   name: "Mango",
//   age: 20,
//   hobby: "html",
//   premium: true,
// };

// user.mood = "happy";
// console.log(user);

// user.hobby = "skydiving";
// console.log(user);

// user.premium = false;
// console.log(user);

// 2 variant

const user = {
  name: "Mango",
  age: 20,
  hobby: "html",
  premium: true,
  mood(newMood) {
    this.mood = newMood;
  },
  updateHobby(newHobby) {
    //свойство, в котором лежит функция
    this.hobby = newHobby; //обращение к объекту через ключевое слово this
  },
  updatePremium(newPremium) {
    this.premium = newPremium;
  },
};

user.mood = "happy";
user.updateHobby("skydiving");
user.updatePremium(false);

const keys = Object.keys(user);
for (const key of keys) {
  console.log(`${key}:${user[key]}`);
}
