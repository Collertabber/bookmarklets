function add() {
let person = prompt("Please enter your name", "console.log('Hello World!')");
let count = localStorage.length
localStorage[count] = "" + person + "";
document.getElementById("demo").innerHTML = localStorage[count];
}
function load() {
let i = prompt("Enter Bookmarklet id here:", "1");
i = i - 1;
let key = localStorage.key(i);
eval(localStorage.getItem(key));
}
function list() {
for(let i=0; i<localStorage.length; i++) {
  let key = localStorage.key(i);
  alert(`${key}: ${localStorage.getItem(key)}`);
}
}
function clear() {
localStorage.clear();
document.getElementById("demo").innerHTML = "";
}
