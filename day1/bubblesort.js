let arr = [1,5,3,8,2,9]
let l = arr.length
for(let i=0;i<l-1;i++)
{
    for(let j=0;j<l-i-1;j++)
    {
        if(arr[j]>arr[j+1])
        {
            [arr[j],arr[j+1]]= [arr[j+1],arr[j]]
        }
    }
}
console.log("sorted array is ",arr)