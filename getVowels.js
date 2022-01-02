
const checkVowels = str => {
    let vowelCount =0

    let arr = str.split("");

    for(i=0; i < arr.length; i++) {
        switch(arr[i]) {
            case "a":
                vowelCount++;
                break;
                case "e":
                    vowelCount++;
                    break;
                    case "i":
                        vowelCount++;
                        break;
                        case "o":
                            vowelCount++
                            break;
                            case "u":
                                vowelCount++
                                break;
        }
    }
    return vowelCount
}

console.log(checkVowels("champion"))
console.log(checkVowels("aeiou"))