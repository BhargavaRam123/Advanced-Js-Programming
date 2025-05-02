function sleep(time, msg, state) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if ((state = "res")) res(msg);
      else rej("rejected");
    }, time);
  });
}
const p1 = sleep(5000, "one", "res");
const p2 = sleep(2000, "two", "res");
Promise.race([p1, p2]).then((value) => {
  console.log(value);
});
