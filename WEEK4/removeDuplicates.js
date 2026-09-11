function removeDuplicates(str) {
    let result = "";

    for (let char of str) {
        if (!result.includes(char)) {
            result += char;
        }
    }

    return result;
}

function runProgram() {
    let str = document.getElementById("string").value;

    document.getElementById("output").textContent =
        removeDuplicates(str);
}