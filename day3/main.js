function func(...arr) {
  console.log(arr);
}
let a = 1,
  b = 2,
  c = 3;
func(a, b, c);

const newarr = [1, 3, 4, 5, 5];
function func1(a, b, c, d, e) {
  console.log(a, b, c, e);
}
func1(...newarr);

const person = {
  name: "Alice",
  sayHiRegular: function () {
    console.log(`Hi, I'm ${this.name}`);
  },
  sayHiArrow: () => {
    console.log(`Hi, I'm ${this.name}`);
  },

  friendsGreeting: function () {
    console.log(`${this.name}'s friends say:`);

    setTimeout(function () {
      console.log(`Regular function: Hi, ${this.name}!`); // 'this' is window/global object
    }, 100);

    setTimeout(() => {
      console.log(`Arrow function: Hi, ${this.name}!`); // 'this' is person object
    }, 100);
  },
};

person.sayHiRegular();
person.sayHiArrow();
person.friendsGreeting();
