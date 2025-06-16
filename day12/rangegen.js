function* rangegen(start,end,step)
{
    for(let i = start;i<=end ;i+=step)
    {
        yield i;
    }
}
let range = rangegen(0,10,1)


for(const num of range)
{
    console.log("num value",num);
}