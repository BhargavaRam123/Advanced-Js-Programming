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
