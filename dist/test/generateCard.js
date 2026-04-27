"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Helper: Validates a card number using the Luhn Algorithm
 */
const isLuhnValid = (number) => {
    const digits = number.toString().replace(/\D/g, '');
    let sum = 0;
    let shouldDouble = false;
    for (let i = digits.length - 1; i >= 0; i--) {
        let digit = parseInt(digits.charAt(i));
        if (shouldDouble) {
            digit *= 2;
            if (digit > 9)
                digit -= 9;
        }
        sum += digit;
        shouldDouble = !shouldDouble;
    }
    return (sum % 10) === 0;
};
/**
 * Generates a mathematically valid card number
 */
const generateValidCard = (length = 16, prefix = '') => {
    let cardNum = prefix;
    while (cardNum.length < length - 1) {
        cardNum += Math.floor(Math.random() * 10).toString();
    }
    let sum = 0;
    let shouldDouble = true;
    for (let i = cardNum.length - 1; i >= 0; i--) {
        let digit = parseInt(cardNum.charAt(i));
        if (shouldDouble) {
            digit *= 2;
            if (digit > 9)
                digit -= 9;
        }
        sum += digit;
        shouldDouble = !shouldDouble;
    }
    const checkDigit = (10 - (sum % 10)) % 10;
    return cardNum + checkDigit;
};
/**
 * Generates a fake/invalid card number
 */
const generateInvalidCard = (length = 16) => {
    let cardNum = '';
    for (let i = 0; i < length; i++) {
        cardNum += Math.floor(Math.random() * 10).toString();
    }
    // Now isLuhnValid is defined, so this won't crash
    if (isLuhnValid(cardNum)) {
        let lastDigit = parseInt(cardNum.slice(-1));
        let newDigit = (lastDigit + 1) % 10;
        cardNum = cardNum.slice(0, -1) + newDigit;
    }
    return cardNum;
};
// --- Execution ---
const valid = generateValidCard(16, '4');
const invalid = generateInvalidCard(16);
console.log("Valid Card:", valid, "-> Check:", isLuhnValid(valid));
console.log("Invalid Card:", invalid, "-> Check:", isLuhnValid(invalid));
//# sourceMappingURL=generateCard.js.map