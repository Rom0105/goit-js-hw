const inputDoc = document.querySelector("#name-input");
const spanDoc = document.querySelector("#name-output");

inputDoc.oninput = function () {
  if (inputDoc.value === "") {
    spanDoc.textContent = "незнакомец";
  } else {
    spanDoc.textContent = inputDoc.value;
  }
};
