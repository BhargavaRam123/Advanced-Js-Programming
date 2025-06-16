function* simplecalculator(){
    let count=0
    console.log("count value:",count);
    while(true)
    {
        yield count++;
    }
}
let calcgen = simplecalculator()
console.log(calcgen.next());
console.log(calcgen.next());
console.log(calcgen.next());