let number1 = Math.ceil(Math.random() * 20)
let number2 = Math.ceil(Math.random() * 20)
let number3 = Math.ceil(Math.random() * 20)
let number4 = Math.ceil(Math.random() * 20)
let number5 = Math.ceil(Math.random() * 20)
const numbers = [number1, number2, number3, number4, number5]

console.log(numbers);

if (number1 > number2 && number1 > number3 && number1 > number4 && number1 > number5){
    console.log("max: " + number1);
}
else if (number5 > number4 && number5 > number3 && number5 > number2 && number5 > number1){
    console.log("max: " + number5);
}
else if (number2 > number1 && number2 > number3 && number2 > number4 && number2 > number5){
    console.log("max: " + number2);
}
else if (number3 > number1 && number3 > number2 && number3 > number4 && number3 > number5){
    console.log("max: " + number3);
}
else if (number4 > number5 && number4 > number3 && number4 > number2 && number4 > number1){
    console.log("max: " + number4);
}

if (number1 < number2 && number1 < number3 && number1 < number4 && number1 < number5){
    console.log("min: " + number1);
}
else if (number5 < number4 && number5 < number3 && number5 < number2 && number5 < number1){
    console.log("min: " + number5);
}
else if (number2 < number1 && number2 < number3 && number2 < number4 && number2 < number5){
    console.log("min: " + number2);
}
else if (number3 < number2 && number3 < number4 && number3 < number1 && number3 < number5){
    console.log("min: " + number3);
}
else if (number4 < number3 && number4 < number5 && number4 < number2 && number4 < number1){
    console.log("min: " + number4);
}