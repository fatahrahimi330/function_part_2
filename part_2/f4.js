
function main(num1, num2){
    if (num1 > num2 && num1 <= 100){
        return `${num1} is near to 100!`;
    }
    return `${num2} is near to 100!`;
}

const input = main(30,30);

console.log(input);