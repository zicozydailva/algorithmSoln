const revInt = int => {
    let toStr = int.toString().split("").reverse().join("");
    return parseInt(toStr)
}

console.log(revInt(2021))

