let myObj = {
  name: "Chisom",
  age: 17,
};

let myObjSerialized = JSON.stringify(myObj);
console.log(myObjSerialized);
//serialized is like to make it more readable or something (to stringify)

localStorage.setItem("content", myObjSerialized);
console.log(localStorage);
//didn't work cuz it;s not stringified

let myObjDeserialized = JSON.parse(localStorage.getItem("content"));
console.log(myObjDeserialized);

const input = document.querySelector("input"),
  h2 = document.querySelector("h2");
h2.innerHTML = localStorage.getItem("value");

input.addEventListener("keyup", display);
function display() {
  localStorage.setItem("value", input.value);
  h2.innerHTML = localStorage.getItem("value");
}
