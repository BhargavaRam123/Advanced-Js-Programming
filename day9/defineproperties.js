const obj = {
  key3: "value3",
  key4: "value4",
};
Object.defineProperties(obj, {
  key1: {
    value: "value1",
    writable: true,
    configurable: false,
  },
  key2: {
    value: "value2",
    writable: false,
    configurable: false,
  },
});

const prop = Object.getOwnPropertyDescriptor(obj, "key1");
const prop1 = Object.getOwnPropertyDescriptor(obj, "key2");
console.log("property values:", prop, prop1);
const all = Object.getOwnPropertyDescriptors(obj);
console.log("all values are ", all);
