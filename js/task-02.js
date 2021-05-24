const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

let listDoc = document.querySelector("#ingredients");
const foodDoc = ingredients.forEach((ingredient) => {
  let items = document.createElement("li");
  items.innerHTML = ingredient;
  listDoc.append(items);
});
