let obj = {
  toString() {
    return "2.1";
  },
  valueOf() {
    return "3";
  },
}; // toString() returns a primitive string "2.1".

// obj.valueOf() does not convert to a primitive:

console.log(`The result is: ${obj * 2}`); // logs: "The result is: 4.2" // obj coerced to string, coerced to number
console.log(`The result is: ${obj + 2}`); // logs: "The result is: 2.12" // obj coerced to string, concatenated with "2"

obj.valueOf = function () {
  return 2.1;
};

console.log(`The result is: ${obj * 2}`); // logs: "The result is: 4.2"
console.log(`The result is: ${obj + 2}`); // logs: "The result is: 4.1" // hint is "default"
