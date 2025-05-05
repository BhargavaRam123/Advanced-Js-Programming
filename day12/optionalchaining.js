const obj ={}
let val = obj.name?.value
console.log(val);

//calling a non existant method in the obj 

let funcr = obj.methd?.()

console.log(funcr);

//using optional chaining with arrays

let arr = [1,2,4,5]


console.log(arr[44]);



function printMagicIndex(arr) {
    console.log(arr[42]);
  }
  
  printMagicIndex([0, 1, 2, 3, 4, 5]); // undefined
//   printMagicIndex(); // undefined; if not using ?., this would throw an error: "Cannot read properties of undefined (reading '42')"

  
  let obj1 = {
    propName:"hello"
  }

  const nestedProp = obj1?.["prop" + "Name"];
  console.log("nested value:",nestedProp);