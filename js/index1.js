// Використовуючи попередній код написати скрипт закриття модального вікна по кліку на бекдроп
// Написати скрипт відкриття та закриття модального вікна по кнопці.
const buttonOpenModal = document.querySelector('[data-action="open-modal"]');
const buttonCloseModal = document.querySelector('[data-action="close-modal"]');

buttonOpenModal.addEventListener("click", toggleModal);
buttonCloseModal.addEventListener("click", toggleModal);

function toggleModal() {
  document.body.classList.toggle("show-modal");
}