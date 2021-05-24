const validationDoc = Number(length);
document.querySelector("#validation-input").onblur = function () {
  if (this.getAttribute("data-length") > validationDoc) {
    this.classList.remove("valid");
    this.classList.add("invalid");
  } else {
    this.classList.remove("invalid");
    this.classList.add("valid");
  }
};

/* let inputDoc = document.querySelector("#validation-input");

let lenghtDoc = inputDoc.getAttribute("data-length");
let totallenghtDoc = parseInt(lenghtDoc, 10);

inputDoc.oninput = function () {
  if (inputDoc.value.length === totallenghtDoc) {
    inputDoc.classList.remove("invalid");
    inputDoc.classList.add("valid");
  }
  if (inputDoc.value.length === 0) {
    inputDoc.classList.remove("valid");
    inputDoc.classList.remove("invalid");
  }
  if (inputDoc.value.length !== totallenghtDoc && inputDoc.value.length !== 0) {
    inputDoc.classList.add("invalid");
  }
};
 */
