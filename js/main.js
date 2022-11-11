const modal = document.querySelector(".modal-container");
const modalCloseButton = modal.querySelector(".modal-close-button");
const openModalButton = document.querySelector(".check-in-button");
const p = document.querySelector(".page-container")

const showModal = () => {

  modal.classList.remove("modal-container-close");
};

const closeModal = () => {

  modal.classList.add("modal-container-close");
};

openModalButton.addEventListener("click", showModal);

modalCloseButton.addEventListener("click", closeModal);
