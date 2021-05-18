const selectId = document.querySelector("#categories");
console.log(selectId);

const titleDoc = document.querySelector("h2");
console.log("Категория:", titleDoc.textContent);

const itemDoc = document.querySelector(".items");

const itemsDoc = itemDoc.children;
console.log("Количество элементов:", itemsDoc.length);
