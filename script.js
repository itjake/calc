let firstNum = document.querySelector(".first__num");
let secondNum = document.querySelector(".second__num");
let btn = document.querySelector(".button");
let result = document.querySelector(".result");
let select = document.querySelector(".select")

btn.addEventListener('click', function () {
  if (select.value === "sum") {
    let sum = parseInt(firstNum.value) + parseInt(secondNum.value);
    result.innerHTML = sum;
  } else if (select.value === "sub") {
    let minus = parseInt(firstNum.value) - parseInt(secondNum.value);
    result.innerHTML = minus;
  } else if (select.value === "mul") {
    let multi = parseInt(firstNum.value) * parseInt(secondNum.value);
    result.innerHTML = multi;
  } else if (select.value === "div") {
    let divide = parseInt(firstNum.value) / parseInt(secondNum.value);
    result.innerHTML = divide;
  }
});
