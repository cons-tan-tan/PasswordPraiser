const checkPassword = require("zxcvbn");


const passwordElements = document.querySelectorAll("input[type=password]");

const amount = passwordElements.length;
if (amount > 0) {
    // pass = prompt("ユーザー名を入力してください", "")
    // const result = checkPassword(pass)
    // alert(result.guesses + "\n" + result.feedback.warning + "\n" + result.feedback.suggestions)

    passwordElements.forEach((value, key, parent) => {
        value.addEventListener("focus", (event) => {
            event.target.value = "password";
        });
        value.addEventListener("blur", (event) => {
            event.target.value = "";
        });
    });
}
