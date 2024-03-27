let number1 = Math.trunc(Math.random() * 10);
let number2 = Math.trunc(Math.random() * 10);
let number3 = Math.trunc(Math.random() * 10);
let number4 = Math.trunc(Math.random() * 10);
let number5 = Math.trunc(Math.random() * 10);

let number6 = Math.trunc(Math.random() * 10);
let number7 = Math.trunc(Math.random() * 10);
let number8 = Math.trunc(Math.random() * 10);

const numbers = [number1, number2, number3, number4, number5]
const numbers2 = [number6, number7, number8]
let sort1 = numbers.sort()
let sort2 = numbers2.sort()

console.log(numbers);
console.log(numbers2);

let intersection = 0
let includes = numbers.includes(numbers2)

if (numbers.includes(number6)){
    intersection++
}
if (numbers.includes(number7)){
    intersection++
}
if (numbers.includes(number8)){
    intersection++
}

numbers[5] = numbers2
let flat = numbers.flat()
let sort = flat.sort()

for (let i = 0; i < flat.length; i++) {
    for (let j = 0; j < i; j++)
    if (flat[j] === flat[i]) {
        delete flat[i]
    }
}

let flat2 = flat.flat()

console.log(flat2);
console.log("Intersections: " + intersection);