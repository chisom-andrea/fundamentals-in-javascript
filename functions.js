//function declaration
function greet0() {
    console.log('hello world');
}
greet0();
//function expression
const speak = function() {
    console.log("what's up")
};
speak();
//hoisting works with function declaration but it doesn't work with function expression

//arguments and parameters
const speak1 = function(time = 'day', name = 'user') {
    console.log(`good ${time} ${name}`)
}
speak1();
speak1('morning', 'Mary');

//returning values
const area = function(radius) {
    let calcArea = Math.PI*radius**2;
    return calcArea
}
area(2);
