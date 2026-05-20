// In this tutorial, we will discuss how arrow function is helpful
// in the TypeScript applications. 

let inputData = [0, 1, 3, 4, 5]

// Tutorial 1: multiply inputData by 2 . 

// let's go with for loop
let results = [];
for (let i=0; i<inputData.length; i++) {
    results.push(inputData[i]*2);

}
console.log(results);

// We need four line of code. 

// let's go with map function. 

const resultMap = inputData.map(function ( a) { return a*2});
console.log(resultMap);

// We can make more shorter. 
const resultMap2 = inputData.map(a => a*2);
console.log(resultMap2);


// uses from implicit Functions; 

const saySomething = message => console.log(message);
saySomething("Hi there!")

const sayHello = () => console.log("Say Hello!")
sayHello();
// display long message 

const longMsg = () => (
    `<p>
    Hi, i am finally revise the tutorals. 
    </p>`
)

console.log(longMsg());

// direct return (), and you need return for {} brackets. 


///// Materials from the lecture. 
