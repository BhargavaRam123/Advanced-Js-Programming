const obj = {
  fname: "elon",
  lname: "musk",
  get fullname() {
    return this.fname + " " + this.lname;
  },
  set fullname(value) {
    [this.fname, this.lname] = value.split(" ");
  },
};
console.log(obj.fullname);

obj.fullname = "kimbel musk";

console.log(obj.fullname);
