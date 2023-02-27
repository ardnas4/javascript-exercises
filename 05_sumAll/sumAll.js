const sumAll = function(a, b) {
    if ((a < 0 || b < 0) || (typeof a !== "number") || (typeof b !== "number")) {
        return "ERROR";
    }

    let sum = 0;
    let start = 0, end = 0;

    if (a > b) {
        start = b;
        end = a;
    }

    else {
        start = a;
        end = b;
    }

    for (let i = start; i <= end; i++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;