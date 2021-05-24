const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const listDoc = document.querySelector("#ingredients");
const foodDoc = ingredients.map((ingredient) => {
  let items = document.createElement("li");
  items.textContent = ingredient;

  return items;
});
listDoc.append(...foodDoc);
