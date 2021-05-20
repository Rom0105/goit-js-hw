const counterValue = {
  value: 0,
  increment() {
    this.value += 1;
  },
  decrement() {
    this.value -= 1;
  },
};

const decrementDoc = document.querySelector(".decrement-doc");
const incrementDoc = document.querySelector(".increment-doc");
const valueDoc = document.querySelector("#value");

decrementDoc.addEventListener("click", function () {
  counterValue.decrement();
  valueDoc.textContent = counterValue.value;
});
incrementDoc.addEventListener("click", function () {
  counterValue.increment();
  valueDoc.textContent = counterValue.value;
});
