// Importing the necessary types
import type { Request, Response, NextFunction } from 'express';
import type { ErrorResponse } from '../../interface/errorResponse';
import type { SuccessResponse } from "../../interface/successResponse";

// Importing the necessary modules
const path = require("path");
const { Router } = require('express');
const { validateCardNumber } = require("../../validateCard/validateCard");

// Creating the router object 
const home = Router();

// Welcome Home page 
home.get("/", async (request: Request, response: Response) => {
    // Getting the path to the template folder 
    const templateFolder = path.join(__dirname, "/templates/home.html");
    return response.sendFile(templateFolder);
})

// Vaidate the credit card 
home.post("/validate-card", (request: Request, response: Response, next: NextFunction) => {
    // Using try catch block to handle the requests 
    try {
        // Getting the request body 
        const cardDetails = request.body;

        // Getting the card number 
        const cardNumber = cardDetails.cardNumber;

        // Checking if the card number is missing
        if (!cardNumber) {
            // Build the error response 
            const errorResponse: ErrorResponse = {
                status: "error",
                message: "Missing card number in the request body!",
                statusCode: 400
            }

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
                const successResponse: SuccessResponse = {
                    status: "success",
                    isValid: true,
                    message: "Card number is valid!",
                    cardNumber: cardNumber.replace(/.(?=.{4})/g, '*'),
                    statusCode: 200
                }

                // Sending the success message 
                return response.send(successResponse).status(successResponse.statusCode);
            }

            // Else fi the card is not valid, return an error message 
            else {
                // Build the error message 
                const errorResponse: ErrorResponse = {
                    status: "error",
                    isValid: false,
                    message: "Card number is not valid!",
                    cardNumber: cardNumber.replace(/.(?=.{4})/g, '*'),
                    statusCode: 400
                }

                // Sending the error response 
                return response.send(errorResponse).status(errorResponse.statusCode);
            }
        }
    }

    // Catch the error 
    catch (error: any) {
        // Build the error message 
        const errorResponse: ErrorResponse = {
            status: "error",
            message: error.message,
            statusCode: 500
        }

        // Sending the error response 
        return response.send(errorResponse);
    }
})

// Exporting the home route 
module.exports = home; 