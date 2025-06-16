let p = new Promise((res) => {
  console.log("am i the first");
  setInterval(() => {
    console.log("i am in the settimeout");
  }, 1000);
  res("msg");
});
p.then((m) => {
  console.log("am i getting the chance", m);
});

console.log("global console");
