const loginSys = (nameInput, passwordInput) => {
    const username = "Zicoraw"
    const password = "Secret"

    if(username === nameInput && password === passwordInput) {
        return true
    } 
     else return false
}

const answer = loginSys("Zicoraw", "Secret")
console.log(answer)