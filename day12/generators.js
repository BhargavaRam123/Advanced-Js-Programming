function* generate()
{
    yield 1;
    yield 2;
    yield 3;

}

let generator = generate()
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());