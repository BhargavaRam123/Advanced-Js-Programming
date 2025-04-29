let obj = {
  name: "Jane Doe",
  score: 99,
  toString() {
    return `Your name: ${this.name}`;
  },
};

// Next: The hint for converting obj is "number" so valueOf() is tried first.
// valueOf() returns the Object.prototype.valueOf() default, which is the object itself and not a primitive.
// So toString() is tried next, which returns a string primitive.
// Then it coerces this string primitive to a number to be able to carry out the subtraction.
// The string primitive converts to NaN (Not a Number).
console.log(obj - 5); // logs: NaN // NaN - 5 = NaN

obj.valueOf = function () {
  return this.score;
}; // custom method valueOf() is added to obj.

console.log(obj - 5); // logs: 94 // hint is "number"
console.log(obj + 3); // logs: 102 // hint is "default"

console.log(obj + " points"); // logs: "99 points"

// Next: strict equality operators do not coerce into type conversion.
console.log(obj == 99); // logs: true // hint is "default"
console.log(obj === 99); // logs: false // no hint, obj is not converted"
