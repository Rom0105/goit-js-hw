const selectId = document.querySelectorAll("h2");
console.log(`В списке ${selectId.length} категории`);

selectId.forEach((even) => {
  console.log("Категория:", even.textContent);
  console.log("Количество элементов:", even.nextElementSibling.children.length);
});
