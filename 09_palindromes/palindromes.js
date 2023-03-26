const palindromes = function (word) {
    let left = 0, right = word.length - 1;

    while (right > left) {
        // search for the next letter for the left pointer
        while (word[left].toUpperCase() == word[left].toLowerCase()) {
            left++;
        }

        // search for the next letter for the right pointer
        while (word[right].toUpperCase() == word[right].toLowerCase()) {
            right--;
        }

        if (word[left].toLowerCase() != word[right].toLowerCase()) {
            return false;
        }

        left++;
        right--;
    }

    return true;
};

// Do not edit below this line
module.exports = palindromes;
