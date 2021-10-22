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
let numberCover = document.querySelector(".cover");
console.log("cover", numberCover);

function sqr(event) {
  console.log("target", event.target);
  console.log("curretntarget", event.currentTarget);
  if (event.target.nodeName === "P") {
    const data = Number(event.target.textContent);
    event.target.innerHTML = Math.pow(data, 2);
  }
}
numberCover.addEventListener("click", sqr);
//Task-6
const block = document.querySelector("div");
function cheangeColorToTomato() {
  block.style.backgroundColor = "tomato";
  block.removeEventListener("click", cheangeColorToTomato);
  block.addEventListener("click", cheangeColorToGreen);
}
function cheangeColorToGreen() {
  block.style.backgroundColor = "green";
  block.removeEventListener("click", cheangeColorToGreen);
  block.addEventListener("click", originalColor);
}
function originalColor() {
  block.style.backgroundColor = "white";
  block.removeEventListener("click", originalColor);
}
block.addEventListener("click", cheangeColorToTomato);
