const doubleInteger = int => {
    const answer = int.map(num => num * 2)
    return answer
}

console.log(`Doubled Integer is: ` + doubleInteger([1,2,3]))
console.log(`Doubled Integer is: ` + doubleInteger([10,20,30]))