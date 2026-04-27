/**
 * Luhn Algorithm Logic
 * 1. From the rightmost digit, moving left, double the value of every second digit.
 * 2. If doubling results in a number > 9, subtract 9 from it.
 * 3. Sum all the digits.
 * 4. If the total modulo 10 equals 0, the number is valid.
 */
// Creating a function for validating the card number 
const validateCardNumber = (number: number) => {
    // Remove spaces or dashes and non numbers or non digits
    const digits = number.toString().replace(/\D/g, '');

    // If the digits length is less than 13 or the length is greater than 19, 
    // return false 
    if (digits.length < 13 || digits.length > 19) {
        // Return false 
        return false;
    }

    // Set the sum and shouldDouble to 0, and false 
    let sum = 0;
    let shouldDouble = false;

    // Loop through the digits 
    for (let i = digits.length - 1; i >= 0; i--) {
        // Extract and cast the current digit to a number to perform Luhn doubling and summation
        // Get the character at position 'i' and convert it from a String to a Number
        let digit = parseInt(digits.charAt(i));

        // If the value of shouldDouble is true, execute the block 
        // of code below 
        if (shouldDouble) {
            digit *= 2;

            // if the digit is greater than 9, decrement the value by 9 
            if (digit > 9) {
                digit -= 9;
            }
        }

        // Increment the sum by the digit 
        sum += digit;
        shouldDouble = !shouldDouble;
    }

    // Return the result 
    return (sum % 10) === 0;
}

// Exporting the function 
module.exports.validateCardNumber = validateCardNumber; 