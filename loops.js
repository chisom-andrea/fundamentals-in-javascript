// loops
// for

for (let i = 0; i < 5; i++) {
    console.log('in loop:', i);
}
console.log('loop ended!');

const firstNames = ['shawn', 'mendez', 'selena', 'gomez','tom', 'holland'];
for (let i = 0; i < firstNames.length; i++) {
    console.log(i);
}
const lastNames = ['shawn', 'mendez', 'selena', 'gomez','tom', 'holland'];
for (let i = 0; i < lastNames.length; i++) {
    console.log(lastNames[i]);
}
// const otherNames = ['shawn', 'mendez', 'selena', 'gomez','tom', 'holland'];
// for (let i = 0; i < otherNames.length; i++) {
// let html = `<div>${names[i]}</div>`;
// console.log(html);
// }

// while
let a = 0; 
while(a < 5) {
    console.log('in loop:', a);
    a++;
}
const someNames = ['shawn', 'mendez', 'selena', 'gomez','tom', 'holland'];
let b = 0;
while(b < someNames.length) {
    console.log(someNames[b]);
    b++;
}

// do while 
let c = 5
do {
    console.log('value of i is', c);
    c++;
} while (c < 5);

//if
const age1 = 20;
if(age1 > 20 ) {
    console.log('you are older');
}
const names = ['shawn', 'mendez', 'selena', 'gomez','tom', 'holland'];
if(names.length > 4) {
    console.log("that's to many");
}
const password1 = 'dogsandcats';
if(password1.length >= 8) {
    console.log('password ok');
}
const password2 = 'dogsandcatsandmice';
if (password2.length >= 12){
    console.log('password strong')
} else if(password2.length >= 8) {
     console.log('password ok');
 } else {
    console.log('passwod not ok');
 }
// break & continue
const scores = [20, 30, 0, 50, 70, 100, 10, 60, 90]
for(let i = 0; i < scores.length; i++){    
    if(scores[i]=== 0){
        continue;
    }
    console.log('your score:', scores[i]);
    if(scores[i] === 100){
    console.log('you got the highest score');
    break;
    }
}
//switch case
const grade = 'D';
switch(grade){
    case 'A':
        console.log('You got an A!');
        break;
    case 'B':
        console.log('You got a B!');
        break;
    case 'C':
        console.log('You got a C!');
        break;
    case 'D':
        console.log('You got a D!');
        break;
    case 'E':
        console.log('You got an E!');
        break;
    default:
        console.log('Not a passing grade');
}