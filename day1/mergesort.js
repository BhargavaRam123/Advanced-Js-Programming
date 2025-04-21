// function merge(a,mid,b,larr,rarr)
// {
//     // console.log("left and right array values",larr,rarr)
//     // console.log("bound values",a,mid,b)
//     let ans  = []
//     let i = 0;
//     let j =  0
//     while( i<=mid-a && j<=b-mid-1)
//     {
//         if(larr[i]<rarr[j])
//         {
//             ans.push(larr[i])
//             i++
//         }
//         else{
//             ans.push(rarr[j])
//             j++
//         }
//     }
//     while(i<=mid-a)
//     {
//         ans.push(larr[i])
//         i++
//     }
//     while(j<=b-mid-1)
//     {
//         ans.push(rarr[j])
//         j++
//     }
//     // console.log("merged array:",ans)
//     // for(let k=a;k<=b;k++)
//     // {
//     //     arr[i] = ans[i-a]
//     // }
//     return ans;
// }
// function divide(a,b,arr)
// {
//     if(a===b)
//         return [arr[a]]
//     let mid =   Math.floor((a+b)/2)
//     // console.log("mid value",mid)
//     let larr = divide(a,mid,arr)
//     let rarr = divide(mid+1,b,arr)
//     return merge(a,mid,b,larr,rarr)
// }

// const arr = [1,10,3,5,2,7]
// let a = 0 ,b = arr.length-1
// console.log(divide(a,b,arr))
// // console.log("final answer",arr)

const arr = [1, 10, 3, 5, 2, 7];
function divide(a, b, arr) {
  if (a >= b) return;
  let m = Math.floor((a + b) / 2);
  divide(a, m, arr);
  divide(m + 1, b, arr);
  merge(a, b, m, arr);
}

function merge(a, b, m, arr) {
  let temp = [];
  let i = a,
    j = m + 1;
  while (i <= m && j <= b) {
    if (arr[i] > arr[j]) {
      temp.push(arr[j]);
      j++;
    } else {
      temp.push(arr[i]);
      i++;
    }
  }
  while (i <= m) {
    temp.push(arr[i]);
    i++;
  }
  while (j <= b) {
    temp.push(arr[j]);
    j++;
  }
  console.log("temp array :", temp);
  for (let k = a; k <= b; k++) {
    arr[k] = temp[k - a];
  }
}
divide(0, arr.length - 1, arr);
console.log(arr);
