document.getElementById("count-el").innerText =5
// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked (log it out)
// change the count-el in the HTML to reflect the new count

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