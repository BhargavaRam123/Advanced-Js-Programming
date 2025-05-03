function fetchdata() {
  return new Promise((res) => {
    setTimeout(() => {
      res(1);
    }, 1000);
  });
}
let val = fetchdata().then((v) => v);
console.log(val + 1);
