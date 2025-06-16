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

let user = {
  get name() {
    return this._name;
  },

  set name(value) {
    if (value.length < 4) {
      alert("Name is too short, need at least 4 characters");
      return;
    }
    this._name = value;
  },
};

user.name = "Pete";
alert(user.name); // Pete

user.name = ""; // Name is too short...
