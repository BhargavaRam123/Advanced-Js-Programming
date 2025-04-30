const obj = {
  fname: "elon",
  lname: "musk",
  get fullname() {
    return this.fname + " " + this.lname;
  },
};
console.log(obj.fullname);
