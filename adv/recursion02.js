// Solves factorial is maths || SUMMATION
function sumrange(num) {
    // base case:
    if(num === 1) return 1;
    return num + sumrange(num-1)
}

console.log(sumrange(4))
console.log(sumrange(3))



// Alt solution without recursion 
function factorial(num) {
   let total = 1;
   for(let i = num; i > 0; i--) {
       total *= i
   }
   return total
}

console.log(factorial(3))