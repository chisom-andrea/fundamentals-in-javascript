const result1 = document.querySelector("#title");
console.log(result1);

const result2 = document.querySelector(".box");
console.log(result2);

const result3 = container2.querySelector(".box");
console.log(result3);

const result4 = document.querySelector(".box100");
console.log(result4);
//if an unknown class or id is passed "null" will be returned

const result5 = document.querySelectorAll(".bag");
console.log(result5);
// result5.forEach((e) =>{
//     e.style.color = "red";
// });

const result6 = document.querySelectorAll("li");
console.log(result6);