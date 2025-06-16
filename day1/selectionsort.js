//repeatedly select the smallest element and sort it with the first unsorted element 
let arr = [2,1,6,4]
for (let i = 0; i < arr.length; i++) {
    let min = i 
    for(let j=i+1;j<arr.length;j++)
        {
            if(arr[min]>arr[j])
            {
                min = j
            }
        }   
        [arr[i],arr[min]] = [arr[min],arr[i]]
}
console.log(arr)