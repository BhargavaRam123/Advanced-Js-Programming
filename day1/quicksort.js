function quicksortfunc(arr) {
  if (arr.length === 0) return [];
  let pivot = arr[0];
  let leftarr = [];
  let rightarr = [];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > pivot) {
      rightarr.push(arr[i]);
    } else {
      leftarr.push(arr[i]);
    }
  }
  return [...quicksortfunc(leftarr), pivot, ...quicksortfunc(rightarr)];
}

let arr = [3, 1, 6, 2];
console.log(quicksortfunc(arr));

// It is a divide-and-conquer algorithm that makes it easier to solve problems.
// It is efficient on large data sets.
// It has a low overhead, as it only requires a small amount of memory to function.
// It is Cache Friendly as we work on the same array to sort and do not copy data to any auxiliary array.
// Fastest general purpose algorithm for large data when stability is not required.
// It is tail recursive and hence all the tail call optimization can be done.
