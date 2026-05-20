// In this section, we will talk about reduce. 

let arrVal = [0, 1, 2, 3, 4];

const output = arrVal.reduce((acc, val) => acc+ val);
console.log(output);

const output1 = arrVal.reduce((acc, val) => acc+val, 14);
console.log(output1)