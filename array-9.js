const numbers = [1,2,3,4,5]

console.log(numbers);

let start = numbers.unshift(numbers.at(-1))
let end = numbers.pop()

console.log(numbers);