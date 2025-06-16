let obj = {
  key1: "value1",
  key2: "value2",
  key3: "value3",
};
Object.defineProperty(obj, "key1", {
  writable: true,
  enumerable: true,
  configurable: false,
});

delete obj.key1;
console.log(obj);

Object.defineProperty(obj, "key1", {
  writable: true,
  enumerable: false,
  configurable: false,
});
