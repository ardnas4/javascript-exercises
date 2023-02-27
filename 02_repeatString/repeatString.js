const repeatString = function(string, num) {
    var resultStr = "";

    if (num < 0) {
        return "ERROR";
    }
    
    for (let i = 0; i < num; i++) {
        resultStr += string;
    }

    return resultStr;
};

// Do not edit below this line
module.exports = repeatString;
