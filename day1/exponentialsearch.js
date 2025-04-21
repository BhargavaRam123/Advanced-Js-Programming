function exponentialSearch(arr, target) {
  const n = arr.length;

  if (arr[0] === target) {
    return 0;
  }

  let i = 1;
  while (i < n && arr[i] <= target) {
    i = i * 2;
  }

  return binarySearch(arr, i / 2, Math.min(i, n - 1), target);
}

const sortedArray = [2, 3, 4, 10, 40, 50, 60, 70, 80, 90];
const target = 50;
const result = exponentialSearch(sortedArray, target);

if (result !== -1) {
  console.log(`Element found at index ${result}`);
} else {
  console.log("Element not found in the array");
}
