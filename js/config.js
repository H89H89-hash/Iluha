/*here you can see task-1 and task-2(Здесь вы можите увидеть задание-1 и задание-2)*/
const image1 = document.getElementById("img1");
function theEventListenerIsHeardEvent() {
  alert(image1.src);
  image1.removeEventListener("click", theEventListenerIsHeardEvent);
}
image1.addEventListener("click", theEventListenerIsHeardEvent);
