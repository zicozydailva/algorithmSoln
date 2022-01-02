// const fizzBuzz = num => {
//     for(let i = 0; i < num; i++) {
//         if(i % 3 === 0 && i % 5 === 0) {
//             console.log("Fizz-Buzz")
//         } else if(i % 5 === 0) {
//             console.log("Fizz")
//         } else if (i % 3 === 0) {
//             console.log("Buzz")
//         } else {
//             console.log(i)
//         }
//     }
// }

// console.log(fizzBuzz(100))

const fizzBuzz = num => {
    for(i=0; i<=num; i++) {
        if(i % 5 === 0 && i % 3 === 0) {
            console.log("Fizz_Buzz")
        } else if(i % 5 === 0) {
            console.log("Fizz")
        } else if(i % 3 === 0) {
            console.log("Buzz")
        } else {
            console.log(i)
        }
    }
}

console.log(fizzBuzz(100))
