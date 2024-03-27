let number1 = Math.ceil(Math.random() * 20)
let number2 = Math.ceil(Math.random() * 20)
let number3 = Math.ceil(Math.random() * 20)
let number4 = Math.ceil(Math.random() * 20)
let number5 = Math.ceil(Math.random() * 20)
const numbers = [number1, number2, number3, number4, number5]

console.log(numbers);

if (number1 > number2){
    console.log(number1);
}
else if (number5 > number4){
    console.log(number5);
}
else if (number2 > number1 && number2 > number3){
    console.log(number2);
}
else if (number3 > number2 && number3 > number4){
    console.log(number3);
}else if (number4 > number3 && number4 > number5){
    console.log(number4);
}