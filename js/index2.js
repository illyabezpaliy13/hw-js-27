// Напиши скрипт в якому є три радіобатони зі значенями кольрів.
// При обиранніна будь якого колір фону боді змінюється відповідно

const radioButtonsRef = document.querySelectorAll('input[type="radio"]');

radioButtonsRef.forEach((radioButton) => {
  radioButton.addEventListener("change", () => {
    document.body.style.backgroundColor = radioButton.value;
  });
});