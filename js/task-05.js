const inputDoc = document.querySelector("#name-input");
const spanDoc = document.querySelector("#name-output");

inputDoc.addEventListener("input", nameInput);

function nameInput(event) {
  spanDoc.textContent = event.currentTarget.value;
}
