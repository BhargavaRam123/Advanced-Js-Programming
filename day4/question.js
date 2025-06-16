let arr = [10, 3, 8, 5, 2, 11];
let n = 4;
let max = -1;
for (let i = 1; i <= n; i++) {
  max = -1;
  let index = -1;
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] > max) {
      max = arr[j];
      index = j;
    }
  }
  arr.splice(index, 1);
}
console.log(n, "th greatest term is:", max);
