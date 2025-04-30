let obj = {
  name: "hello",
  age: 10,
};
const des = Object.getOwnPropertyDescriptor(obj, "name");
console.log(des);
Object.defineProperty(obj, "name", {
  writable: true,
  enumerable: false,
  configurable: false,
});
obj.name = "change";
for (let i in obj) {
  console.log("obj keys are:", i);
}
console.log("object name changed or not :", obj.name);
Object.defineProperty(obj, "name", {
  writable: false,
});
