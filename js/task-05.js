const inputDoc = document.querySelector("#name-input");
const spanDoc = document.querySelector("#name-output");
console.log(inputDoc);
console.log(spanDoc);

inputDoc.addEventListener("input", nameInput);

function nameInput(event) {
  spanDoc.textContent = event.currentTarget.value;
}
