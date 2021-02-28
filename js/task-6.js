const inputEl = document.querySelector("#validation-input");
inputEl.classList.add("validation-input");
inputEl.addEventListener("blur", onInputBlur);

function onInputBlur(event) {
  if (event.currentTarget.value.length === 6) {
    event.currentTarget.classList.add("valid");
    event.currentTarget.classList.remove("invalid");
  }
  if (event.currentTarget.value.length !== 6) {
    event.currentTarget.classList.add("invalid");
    event.currentTarget.classList.remove("valid");
  }
  if (event.currentTarget.value.length === 0) {
    event.currentTarget.classList.remove("valid");
    event.currentTarget.classList.remove("invalid");
  }
}


