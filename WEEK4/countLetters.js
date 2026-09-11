function countLetters(str) {
    let count = {};

    for (let char of str) {
        if (count[char]) {
            count[char]++;
        } else {
            count[char] = 1;
        }
    }

    let output = "";

    for (let char in count) {
        output += char + ":" + count[char] + ", ";
    }

    return output;
}

function runProgram() {
    let word = document.getElementById("word").value;

    document.getElementById("output").textContent =
        countLetters(word);
}