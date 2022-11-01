// Напиши скрипт який, при наборі тексту в інпут input#name-input
// (подія input), підставляє його поточне значення в span#name-output.
// якщо інпут порожній, в спані повинен відображатися рядок 'незнайомець'.

// <input type="text" placeholder="Ваше ім'я?" id="name-input" />
// <h1>Привіт, <span id="name-output">незнайомець</span>!</h1>

const inputRef = document.querySelector("#name-input");
const spanRef = document.querySelector("#name-output");

inputRef.addEventListener("input", onInputChange);

function onInputChange(event) {
  //console.log(e.currentTarget);
  spanRef.textContent = event.target.value;

  if (event.target.value === "") {
    spanRef.textContent = "Незнайомець";
  }
}
