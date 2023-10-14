// Напиши скрипт який, при наборі тексту в інпут input#name-input (подія input),
// підставляє його поточне значення в span#name-output. якщо інпут порожній,
// в спані повинен відображатися рядок 'незнайомець'.

const inputRef = document.getElementById("name-input");
const textRef = document.getElementById("name-output");

inputRef.addEventListener("input", () => {
    textRef.textContent = inputRef.value === "" ? "Незнайомець" : inputRef.value;
  });