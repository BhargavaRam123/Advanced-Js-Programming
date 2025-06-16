function fetchdata() {
  return new Promise((res) => {
    setTimeout(() => {
      res(1);
    }, 1000);
  });
}
async function exp() {
  // let val = await fetchdata();
  // console.log("using await", val);
  console.log("hello world");
  return 1;
}
console.log(exp());
