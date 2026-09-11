function substrings(str) {
    let result = [];

    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j <= str.length; j++) {
            result.push(str.substring(i, j));
        }
    }

    return result;
}

function runProgram() {
    let str = document.getElementById("string").value;

    document.getElementById("output").textContent =
        substrings(str).join(", ");
}