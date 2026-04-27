# Card Number Validation API

A robust API service for validating credit card numbers using the **Luhn Algorithm**. This project provides a mathematically accurate way to verify card numbers and includes a built-in documentation page.

## Getting Started

### Prerequisites
- Node.js installed
- npm installed

### Installation
1. Install dependencies:
   ```bash
   npm install .
   ```

2. Build the project:
   ```bash
   npm run build
   ```

3. Start the server:
   ```bash
   npm run dev
   ```
   The server will be running at `http://localhost:3001`.

---

## API Usage with Postman

To use this API with Postman, follow these steps:

### 1. View Documentation
Before sending requests, you can view the interactive documentation by visiting:
- **URL:** `http://localhost:3001/api`
- **Method:** `GET`

### 2. Validate Card Number (POST Request)
Send a POST request to the following endpoint:
- **URL:** `http://localhost:3001/api`
- **Method:** `POST`
- **Headers:** `Content-Type: application/json`

---

## Example Requests

### ✅ Valid Card Request
To test a valid card number, use the following JSON body:

**Endpoint:** `POST http://localhost:3001/api`

**Body:**
```json
{
    "cardNumber": "401170277372404218"
}
```

**Example Success Response:**
```json
{
    "status": "success",
    "isValid": true,
    "message": "Card number is valid!",
    "cardNumber": "**************4218",
    "statusCode": 200
}
```

### ❌ Fake (Invalid) Card Request
To test an invalid or fake card number, use the following JSON body (as requested):

**Endpoint:** `POST http://localhost:3001/api`

**Body:**
```json
{
    "cardNumber": "401170277372404210"
}
```

**Example Error Response:**
```json
{
    "status": "error",
    "isValid": false,
    "message": "Card number is not valid!",
    "cardNumber": "**************4210",
    "statusCode": 400
}
```

---

## Project Structure
- `app.ts`: Main entry point and server configuration.
- `routes/`: Contains API route definitions (Home and Users).
- `validateCard/`: Core logic for the Luhn Algorithm.
- `interface/`: TypeScript interfaces for consistent response structures.
- `logs/`: Request logging configuration.
- `test/`: Scripts for generating valid/invalid test cards.

## License
Creative Commons Attribution-NonCommercial 4.0 (CC BY-NC)
Created by Engr. Mbonu Chinedum
