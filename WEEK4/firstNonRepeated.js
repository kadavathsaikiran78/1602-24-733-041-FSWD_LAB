function firstNonRepeated(str) {
    let count = {};

    for (let char of str) {
        if (count[char]) {
            count[char]++;
        } else {
            count[char] = 1;
        }
    }

    for (let char of str) {
        if (count[char] === 1) {
            return char;
        }
    }

    return "No non-repeated character";
}

function runProgram() {
    let str = document.getElementById("string").value;

    document.getElementById("output").textContent =
        firstNonRepeated(str);
}