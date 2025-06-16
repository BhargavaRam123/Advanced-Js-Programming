let prom = new Promise((resolve, reject) => {
  let num = 9;
  if (num % 2 === 0) {
    resolve("msg from resolve");
  } else {
    reject("msg form reject");
  }
});
prom.then((m) => console.log(m)).catch((m) => console.log(m));
