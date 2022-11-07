// Show toast function
const showToast = (title: string, message: string) => {
  // Get toast elements
  const toastEl = document.querySelector(".toast") as HTMLElement;
  const titleEl = toastEl.querySelector(".me-auto") as HTMLElement;
  const bodyEl = toastEl.querySelector(".toast-body") as HTMLElement;

  // Set title and message
  titleEl.textContent = title;
  bodyEl.textContent = message;

  // Show notification
  toastEl.classList.remove("hide");
  toastEl.classList.add("show");
};

export default showToast;
