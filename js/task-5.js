const refs = {
  inputEl: document.querySelector("#name-input"),
  spanEl: document.querySelector("#name-output"),
};

refs.inputEl.addEventListener("input", onInputChange);

function onInputChange(event) {
  event.currentTarget.value === ""
    ? (refs.spanEl.textContent = "незнакомец")
    : (refs.spanEl.textContent = event.currentTarget.value);
}
