// Defining the interface for the error response 
export interface ErrorResponse {
    status: string;
    message: string;
    statusCode: number;
    isValid?: boolean;
    cardNumber?: string;
}