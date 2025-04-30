let obj = {
  name: "hello",
};
const des = Object.getOwnPropertyDescriptor(obj, "name");
console.log(des);
