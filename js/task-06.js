const validationDoc = document.querySelector("#validation-input");
validationDoc.addEventListener("focus", onInputFocus);
validationDoc.addEventListener("blur", onInputBlur);
function onInputFocus(event) {
  validationDoc.classList.remove("valid");
  validationDoc.classList.remove("invalid");
}
function onInputBlur(event) {
  Number(event.currentTarget.value.length) ===
  Number(validationDoc.dataset.length)
    ? validationDoc.classList.add("valid")
    : validationDoc.classList.add("invalid");
}
