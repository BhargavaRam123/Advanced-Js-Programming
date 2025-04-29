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
