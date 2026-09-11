function checkPassword(password) {
    let pattern =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&*!]).{8,}$/;

    if (pattern.test(password)) {
        return "Strong Password";
    } else {
        return "Not a Strong Password";
    }
}

function runProgram() {
    let password = document.getElementById("password").value;

    document.getElementById("output").textContent =
        checkPassword(password);
}