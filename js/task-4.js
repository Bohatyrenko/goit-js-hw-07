const decrementBtnEl = document.querySelector('[data-action="decrement"]');
const incrementBtnEl = document.querySelector('[data-action="increment"]');
const counterValue = document.querySelector("#value");
console.log(counterValue);

let value = 0;

const fn = () => (counterValue.textContent = value);

const increment = () => {
  value += 1;
  fn();
};

const decrement = () => {
  value -= 1;
  fn();
};
incrementBtnEl.addEventListener("click", increment);
decrementBtnEl.addEventListener("click", decrement);
