let number1 = Math.ceil(Math.random() * 10);
let number2 = Math.ceil(Math.random() * 10);
let number3 = Math.ceil(Math.random() * 10);
let number4 = Math.ceil(Math.random() * 10);
let number5 = Math.ceil(Math.random() * 10);
const numbers = [number1, number2, number3, number4, number5]

alert(numbers);

let x = +prompt("x = ")
let is = 0
for(i=0; i<numbers.length; i++){
    if(numbers[i] == x){
        is = is +1
    }
}

alert(x + " is " + is)