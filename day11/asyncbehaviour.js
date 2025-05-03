function resolveAfter2Seconds() {
  // taken from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("resolved");
    }, 2000);
  });
}

const asyncFuntion = async () => {
  const result = await resolveAfter2Seconds();
  console.info("asyncFuntion finish, result is: ", result);
};

const first = async () => {
  await asyncFuntion();
  console.log("first completed");
  debugger;
};

const second = () => {
  console.log("second completed");
  debugger;
};

function main() {
  first();
  second();
}

main();

function fetchdata() {
  return new Promise(function (resolve) {
    console.log("you are in the promise callback");
    setTimeout(function () {
      console.log("you are inside settimeout");
      resolve("promise resolved");
    }, 500);
  });
}

fetchdata().then(function (v) {
  console.log("you are inside then");
  console.log("the value is", v);
});

console.log("hello world");
setTimeout(() => {
  console.log("you are in outside settimeout function");
}, 500);
