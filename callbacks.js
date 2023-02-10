//Eg 1
const firstObj = [{name: 'Chisom', age: 17}, {name: 'Zara', age: 16}, {name: 'Tobe', age: 9}]

console.log(firstObj);

const newObj = {name: 'Sharon', age: 20};

const add = (callback) => {
    setTimeout(() => {
        const another = firstObj.push(newObj);
        callback(another)
    }, 4000)
}
const fullList = () => {
    console.log(firstObj);
}
add(fullList);


//Eg 2
const order = (preparing) =>{
    setTimeout(() => {
        const food = 'pizza'
        preparing(food)
    }, 5000)
}

const orderReady = (food) => {
    console.log(`${food} is ready`)
}

 order(orderReady);
 console.log('play games')