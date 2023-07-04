const { log } = require("console");

console.log("Lets learn 7 types primitive datatypes")

// NN(num,null) BB(boolean, byte) SS(string, symbol) U(undefined)

let a = null;
let b = 123;
let c = true;
let d = BigInt('987');
let e = 'code';
let f = Symbol("thats symbol datatypes");
let g

console.log(a,b,c,d,e,f,g)


// Objects - are non primitivie datatype, Can create key value pair things 

const newObject = {
  "Irfan": true,
  "Ankith": false,
  "Shiva": 420,
  "Pavan": undefined  
}
console.log(newObject["Pavan"])