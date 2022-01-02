const makeNeg = num => {
    if(num < 1) return num;
    return num * -1
}

// OR
const negateInteger = num => {
    return -Math.abs(num)
}

console.log(makeNeg(10))
console.log(makeNeg(-10))
console.log(makeNeg(0))
console.log(negateInteger(0))
console.log(negateInteger(10))
console.log(negateInteger(-10))