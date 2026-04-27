// Defining the interface for the error response 
export interface SuccessResponse {
    status: string;
    isValid: boolean;
    message: string;
    cardNumber: string;
    statusCode: number;
}