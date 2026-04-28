"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Importing the necessary modules
const path = require("path");
const { Router } = require('express');
const { validateCardNumber } = require("../../validateCard/validateCard");
// Creating the router object 
const home = Router();
// Welcome Home page 
home.get("/", async (request, response) => {
    // Getting the path to the template folder 
    const templateFolder = path.join(__dirname, "/templates/home.html");
    return response.sendFile(templateFolder);
});
// Vaidate the credit card 
home.post("/validate-card", (request, response, next) => {
    // Using try catch block to handle the requests 
    try {
        // Getting the request body 
        const cardDetails = request.body;
        // Getting the card number 
        const cardNumber = cardDetails.cardNumber;
        // Checking if the card number is missing
        if (!cardNumber) {
            // Build the error response 
            const errorResponse = {
                status: "error",
                message: "Missing card number in the request body!",
                statusCode: 400
            };
            // Sending the error resposne 
            return response.send(errorResponse).status(errorResponse.statusCode);
        }
        // Else if the card number is not missing, execute the block 
        // of code below 
        else {
            // Check if the card is valid 
            const isValid = validateCardNumber(cardNumber);
            // If the card is valid, return a success message 
            if (isValid) {
                // Build the success message 
                const successResponse = {
                    status: "success",
                    isValid: true,
                    message: "Card number is valid!",
                    cardNumber: cardNumber.replace(/.(?=.{4})/g, '*'),
                    statusCode: 200
                };
                // Sending the success message 
                return response.send(successResponse).status(successResponse.statusCode);
            }
            // Else fi the card is not valid, return an error message 
            else {
                // Build the error message 
                const errorResponse = {
                    status: "error",
                    isValid: false,
                    message: "Card number is not valid!",
                    cardNumber: cardNumber.replace(/.(?=.{4})/g, '*'),
                    statusCode: 400
                };
                // Sending the error response 
                return response.send(errorResponse).status(errorResponse.statusCode);
            }
        }
    }
    // Catch the error 
    catch (error) {
        // Build the error message 
        const errorResponse = {
            status: "error",
            message: error.message,
            statusCode: 500
        };
        // Sending the error response 
        return response.send(errorResponse);
    }
});
// Exporting the home route 
module.exports = home;
//# sourceMappingURL=homeRoutes.js.map