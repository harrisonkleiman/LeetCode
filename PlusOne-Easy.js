// You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

// Increment the large integer by one and return the resulting array of digits.

// Input: digits = [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.
// Incrementing by one gives 123 + 1 = 124.
// Thus, the result should be [1,2,4].

var PlusOne = function(digits) {
    // convert array to string 
    let i = digits.length - 1; 
    while (i >= 0) {
        if (digits[i] < 9) {
            digits[i]++;
            return digits;
        }
        digits[i] = 0;
        i--;
    }
    digits.unshift(1);
    return digits;
}


// The code is a function that takes an integer and returns the result of adding one to it.
// The code starts by declaring a variable called i, which is initialized with the value of digits.length - 1 (i = digits.length - 1).
// This means that i will start at 0 and count up until it reaches the length of digits (digits[i] = 0).
// The while loop iterates over each digit in turn, starting from index number 9 and counting up to index number 8.
// If the current digit is less than nine then we increment its value by one (digit[i++]).
// Otherwise, if this is not true for any other digit in the array then we set its value back to zero (digit[i=0]).
// Once all values have been processed through this process they are returned as an array using unshift().
// The code attempts to add one to the value of a given number.
// The code starts by declaring a variable called "digits" which will hold the current value of the number being added on.
// The next line declares a function called plusOne that takes in an argument of digits, which is an array of numbers.
// This function adds one to each element in the array and returns it as a new array with all elements set to 0.