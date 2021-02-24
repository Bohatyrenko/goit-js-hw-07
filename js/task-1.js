const categoriesListEl = document.getElementById("categories");

const allCategoriesEl = categoriesListEl.querySelectorAll(".item");
const categoryEl = [...allCategoriesEl];
console.log(categoryEl);

const titleCategoriesEl = categoriesListEl.getElementsByTagName("h2");
const titleCategoryEl = [...titleCategoriesEl];
const nameCategoryEl = titleCategoryEl.map((item) => {
  return `Категория: ${item.textContent}`;
});
console.log(nameCategoryEl);

const quantityEl = categoriesListEl.getElementsByTagName("ul");
const quantyEl = [...quantityEl];
const getQuantityEl = quantyEl.map((item) => {
  return item.length;
});
console.log(`Количество элементов: ${getQuantityEl.length}`);
