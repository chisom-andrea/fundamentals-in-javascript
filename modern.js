const firstName = "Chisom";
const lastName = "Nzeka";
//to concatenate two strings
const fullName = firstName + " " + lastName;
// console.log(fullName);
//length
// console.log(fullName.length);
//something passed into a method is an argument
//to find the index of an element
let sentence = "Father Abraham cooked egg";
// console.log(sentence);
// console.log('índexof', sentence.indexOf('e'));
// console.log('lastindexof', sentence.lastIndexOf('a'));
// string methods
// console.log(fullName.toUpperCase());
// console.log(sentence.slice(0, 14));
// console.log(sentence.substr(7, 7));
// console.log(sentence.replace('k', 'p'));
//math methods
let radius = 10;
const pi = 3.14;
console.log(radius, pi);
console.log(10/2);
console.log(radius%3);
let area = pi*radius**2;
console.log(area);
let like = 9;
like++;
console.log(like);
like--;
console.log(like);
like+=10;
console.log(like);
like-=3;
console.log(like);
like*=3;
console.log(like);
//concatenating
let message = 'The site has ' + like + ' likes';
console.log(message);

const drawing = 'Different Shades of water';
const creator = 'Osinachi';
const likes = 20;

// concatination way
let result0 = 'The painting: ' + drawing + ' by ' + creator + ' has ' + likes + ' likes.';
console.log(result0);
// template string way
let result1 = `The painting ${drawing} by ${creator} has ${likes} likes.`;
console.log(result1);

// html templates
let html = `
<h2>${creator}</h2>
<p>${drawing} is masterpiece.</p>
<span> It has ${likes} likes</span>
`;
console.log(html);

//boolean methods
let email = 'someone@somehwere.com';
let result2 = email.includes('@');
let result3 = email.includes('?');
console.log(result2);
console.log(result3);
let age = 30;
console.log(age == 30);
console.log(age == '30');
console.log(age == 20);
console.log(age != 20);
console.log(age != 30);
console.log(age === 30);
console.log(age === '30');
console.log(age !== '30');
console.log(age !== 30);

//type conversions
let score = '100';
console.log(score + 1);
score = Number(score);
console.log(score + 1);
let name = 'John';
console.log(Number(name));
let result4 = String(50);
console.log(result4, typeof result4);
let result5 = Boolean(10);
let result6 = Boolean(0);
console.log(result5, typeof result5);
console.log(result6, typeof result6);
//negative and positive number are true but zero is false 
let number = Boolean('0');
console.log(number, typeof number);
let another = Boolean('');
console.log(another, typeof another);
//string of any length are true while empty string are false



//logic
const password = 'dogsndcatsandmice';
if (password.length >= 12 && password.includes('@')){
    console.log('password strong')
} else if(password.length >= 8 || password.includes('@')) {
    console.log('password ok');
} else {
    console.log('passwod not ok');
}
let user = false;
if(!user){
    console.log('log in to contiue');
}





