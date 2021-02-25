/**Получаю ссылку на <ul> */
const categoriesListEl = document.getElementById("categories");

/**Получаю ссылку на li.item */
const allCategoriesEl = categoriesListEl.querySelectorAll(".item");
console.log(`В списке ${allCategoriesEl.length} категории`);

const arrCategoryEl = [...allCategoriesEl].map((item) => {
  console.log(`Категория: ${item.firstElementChild.textContent}`);
  console.log(`Количество элементов: ${item.querySelectorAll('li').length}`);
})
