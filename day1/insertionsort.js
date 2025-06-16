const numbers = [5, 2, 9, 1, 5, 6, 3, 8, 4, 7];
for(let i=1;i<numbers.length;i++)
{
    key = numbers[i]
    j=i-1
    while(j>=0&&numbers[j]>key)
    {
        numbers[j+1] = numbers[j]
        j--
    }
    console.log(numbers)
    numbers[j+1] = key
} 

console.log(numbers)