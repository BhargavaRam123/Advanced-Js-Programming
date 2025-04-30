const obj = {
  fname: "elon",
  lname: "musk",
};
Object.defineProperty(obj, "fullname", {
  get() {
    return this.fname + " " + this.lname;
  },
  set(value) {
    [this.fname, this.lname] = value.split(" ");
  },
  enumerable: true,
});
const desc = Object.getOwnPropertyDescriptor(obj, "fullname");
obj.fullname = "kimbel musk";
console.log(obj.fullname);
console.log("All accessor descriptors:", desc);
console.log("entire obj is ", obj);
