const selectId = document.querySelectorAll("h2");
console.log(`В списке ${selectId.length} категории`);

const titleDoc = document.querySelector("h2");
console.log("Категория:", titleDoc.textContent);

const itemDoc = document.querySelector(".item");
const itemsDoc = itemDoc.querySelectorAll("li");
console.log("Количество элементов:", itemsDoc.length);
