let obj = {
  name: "hello",
};
const des = Object.getOwnPropertyDescriptor(obj, "name");
console.log(des);
Object.defineProperty(obj, "name", {
  writable: false,
});
obj.name = "change";
console.log(obj);
