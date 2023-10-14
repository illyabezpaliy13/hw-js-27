// Напиши скрипт, який би при втраті фокуса на інпут, 
// перевіряв його вміст на правильну кількість символів.
const inputValidRef = document.querySelector('[data-length="6"]');

inputValidRef.addEventListener("blur", () => {
    const isValid = inputValidRef.value.length === 6;
    inputValidRef.classList.toggle("valid", isValid);
    inputValidRef.classList.toggle("invalid", !isValid);
  });