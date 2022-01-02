const sumPositive = arr => {
    let sum = 0;
    for(i=0; i< arr.length; i++) {
        if(arr[i] > 0) {
            sum += arr[i]
        }
    }
    return sum
}

console.log(sumPositive([20, -10, 244]))