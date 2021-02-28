const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const ingredientsListEl = document.querySelector("#ingredients");

const itemIngredientsEl = ingredients.map((item) => {
  const itemListEl = document.createElement("li");
  itemListEl.textContent = item;
  return itemListEl;
});

ingredientsListEl.append(...itemIngredientsEl);
console.log(ingredientsListEl);
