// function sleep(time, msg, state) {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       if ((state = "res")) res(msg);
//       else rej("rejected");
//     }, time);
//   });
// }
// const p1 = sleep(5000, "one", "res");
// const p2 = sleep(2000, "two", "res");
// Promise.race([p1, p2]).then((value) => {
//   console.log(value);
// });

function fetchdata() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("data fetched successfully");
    }, 3000);
  });
}
function timeout(value) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error(`Operation timed out after:${value}`));
    }, value);
  });
}

function fetchtimeout(value) {
  Promise.race([fetchdata(), timeout(value)])
    .then((value) => console.log(value))
    .catch((value) => console.log(value));
}

fetchtimeout(1000);
