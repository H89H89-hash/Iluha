"use strict";
//Task-3
const input = document.querySelector("#input");
const text = document.getElementById("test");
let isFunctionWork = false;
function showValue() {
  isFunctionWork = true;
  text.innerHTML = input.value;
  return console.log(isFunctionWork);
}

input.addEventListener("blur", showValue);
//Task-4
const inp = document.querySelector("#inp");
function theEventListenerTwoIsHeardEvent() {
  alert(inp.value);
  inp.removeEventListener("click", theEventListenerTwoIsHeardEvent);
}
inp.addEventListener("click", theEventListenerTwoIsHeardEvent);
//Task-5
let numbers = document.querySelector("p");
function sqr() {
  let num = Number(numbers.textContent);
  numbers.innerHTML = Math.SQRT2(num);
}
numbers.addEventListener("click", sqr);
//numbers.addEventListener("copy", );
