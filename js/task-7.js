const inputEl = document.querySelector("#font-size-control");
const spanEl = document.querySelector("#text");

function fnInput(event) {
  return (spanEl.style.fontSize = `${+event.currentTarget.value}px`);
}

inputEl.addEventListener("input", fnInput);
