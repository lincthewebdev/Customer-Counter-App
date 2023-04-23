document.getElementById("count-el").innerText =5
let count = 0
function increment (){
  count = count +1
  countEl.textContent = count
}
let countEl = document.getElementById("count-el")
console.log(countEl)
function save(){
console.log(count)
let saveEl = document.getElementById("save-el") 
let countStr = count + " - "
saveEl.textContent += countStr
countEl.textContent = 0
count =0
}