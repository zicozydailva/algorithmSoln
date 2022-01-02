const basicArithmeticOp = (operator, num1, num2) => {
    return eval(num1 + operator + num2)
}

console.log(basicArithmeticOp("+", 20, 20))

// OR

const basicOp = (op, num1, num2) => {
    if(op === "+") {
        return num1 + num2
    }
    if(op === "-") {
        return num1 - num2
    }
    if(op === "/") {
        return num1 / num2
    }
    if(op === "*") { {
        return num1 * num2
    }}
}

console.log(basicOp("+", 23, 23))
console.log(basicOp("-", 23, 23))
console.log(basicOp("/", 23, 23))
console.log(basicOp("*", 23, 23))




const basic = (op, num1, num2) => {
    return eval(num1 + op + num2)
}

console.log(basic("*", 10, 10))