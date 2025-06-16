let arr = [2,3,4,10]
let tar = 3
let f = 0
for(let i=0;i<arr.length;i++)
{
    if(arr[i]===tar)
    {
        f=1
    }
}
if(f===1)
{
    console.log("value found")
}
else{
    console.log("value not found")
}