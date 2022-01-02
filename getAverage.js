const getAverage = scores => {
    const average = scores.length;
    const sum = scores.reduce((a, b) => a+b, 0)
    const answer = sum/average;
    return Math.floor(answer)
}

console.log(getAverage([20,80.2,2001]))