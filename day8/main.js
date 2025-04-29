const obj = { name: "hello", age: 10 };
console.log(obj);
console.log(obj.toString());
console.log(obj.valueOf());

const num = new Number(1);
console.log(num);
console.log(typeof num);
console.log(num.valueOf());
console.log(num.toString());

function Country(name, population) {
  this.name = name;
  this.population = population;
  this.valueOf = function () {
    return this.population;
  };
  this.toString = function () {
    return `country: ${this.name}`;
  };
}

let func = new Country("India", 140000);
console.log(func.toString());
