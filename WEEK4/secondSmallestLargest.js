function secondSmallestLargest(arr) {
    let unique = [...new Set(arr)];

    unique.sort(function (a, b) {
        return a - b;
    });

    let secondSmallest = unique[1];
    let secondLargest = unique[unique.length - 2];

    return "Second Smallest: " + secondSmallest +
        "\nSecond Largest: " + secondLargest;
}

function runProgram() {
    let input = document.getElementById("numbers").value;

    let arr = input.split(",").map(Number);

    document.getElementById("output").textContent =
        secondSmallestLargest(arr);
}