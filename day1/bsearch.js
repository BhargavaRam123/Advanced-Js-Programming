function binarysearch(s,e,arr,tar)
{
    while(s<=e)
    {
        let mid = (s+e)/2;
        if(arr[mid] ===  tar)
        {
            return mid;
        }
        else if(arr[mid] > tar)
        {
            e = mid-1
        }
        else{
            s= mid+1
        }
    }
    return -1;
}
let s=0;
let arr = [1,2,3,4,5,6]
let e = arr.length
console.log(binarysearch(s,e,arr,5))