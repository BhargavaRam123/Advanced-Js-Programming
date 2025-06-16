let obj = {
  name: "value",
  age: 10,
};

console.log(Object.getPrototypeOf(obj));
console.log(obj.valueOf());
Object.getPrototypeOf(obj).valueOf = function () {
  return this.age;
};
console.log(obj.valueOf());

let obj2 = {
  name: "value",
};
console.log(obj2.valueOf());

const num = new Number("5");
console.log(typeof num); // logs: "object"
console.log(num ** 2); // logs: 25 // hint is "number", so method valueOf() returns the primitive value; the number 25 in this case.

let obj3 = {
  name: "Jane Doe",
  score: 99,
  toString() {
    return [this.name, this.score]; // returns an array
  },
};

// Next: hint is "string", but both toString() and valueOf() return an object and not a primitive.
console.log(`${obj3}`); // trows TypeError: can't convert obj to string
