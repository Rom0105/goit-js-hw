const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const listDoc = document.querySelector("#ingredients");

const itemDocPotato = document.createElement("li");
itemDocPotato.textContent = "Картошка";
const itemDocMushrooms = document.createElement("li");
itemDocMushrooms.textContent = "Грибы";
const itemDocGarlic = document.createElement("li");
itemDocGarlic.textContent = "Чеснок";
const itemDocTomatoes = document.createElement("li");
itemDocTomatoes.textContent = "Помидоры";
const itemDocGreens = document.createElement("li");
itemDocGreens.textContent = "Зелень";
const itemDocCondiments = document.createElement("li");
itemDocCondiments.textContent = "Приправы";

listDoc.append(
  itemDocPotato,
  itemDocMushrooms,
  itemDocGarlic,
  itemDocTomatoes,
  itemDocGreens,
  itemDocCondiments
);
