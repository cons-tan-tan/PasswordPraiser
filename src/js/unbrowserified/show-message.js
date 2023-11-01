const checkPassword = require("zxcvbn")


const passwordElements = document.querySelectorAll("input[type=password]")

const amount = passwordElements.length
if (amount > 0) {
    pass = prompt("ユーザー名を入力してください", "")
    const result = checkPassword(pass)
    alert(result.score)

    // passwordElements.forEach((value, key, parent) => {
    //
    // });

}
