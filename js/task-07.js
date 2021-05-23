const inputDoc = document.querySelector("#font-size-control");
const inputTextDoc = document.querySelector("#text");

const funDoc = () => {
  inputTextDoc.style.fontSize = `${inputDoc.value}px`;
};

inputDoc.addEventListener("input", funDoc);
