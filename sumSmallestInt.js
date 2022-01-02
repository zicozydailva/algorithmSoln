// It sums the two smallest int
const sumSmallest = num => {
    const [num1, num2] = num.sort((a, b) => a - b)
    return num1 + num2
}

console.log(sumSmallest([3,4,10,20]))