// Modal Elements
const modalEl = document.querySelector("#kt_modal_1") as HTMLElement;

const closeModal = () => {
  const modalBackgroundEl = document.querySelector(
    ".modal-backdrop"
  ) as HTMLElement;
  modalEl.classList.remove("show");
  modalBackgroundEl.classList.remove("show");
};

export default closeModal;
