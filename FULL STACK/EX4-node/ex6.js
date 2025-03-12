const obj={name:"Mani",Age:20,city:"SVKS"};
console.log(obj);

const keys = Object.keys(obj)

delete obj[keys[1]];

console.log(obj)
console.log(Object.keys(obj).length)