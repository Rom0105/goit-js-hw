const inputDocId = document.querySelector("#validation-input");
console.log(inputDocId);
inputDocId.addEventListener("input", docInput);

function docInput(event) {
  inputDocId.textContent = event.classList.add(".validation-input.valid");
}
