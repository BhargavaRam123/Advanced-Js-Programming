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
