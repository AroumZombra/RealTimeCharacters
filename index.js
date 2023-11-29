const textAreaEl = document.getElementById("textarea");
const totalCounterEl = document.getElementById("Total-Counter");
const remaineCounterEl = document.getElementById("Remaining-Counter");



textAreaEl.addEventListener("keyup", ()=>{
updateCounter();

});
updateCounter();
function updateCounter(){
totalCounterEl.innerText = textAreaEl.value.length;
remaineCounterEl.innerText = textAreaEl.getAttribute("maxLength") - textAreaEl.value.length;

};