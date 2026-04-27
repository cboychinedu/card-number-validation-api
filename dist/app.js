"use strict";
/* =================================================================
 * Author: Engr. Mbonu Chinedum
 * Date Created: April 27, 2026 11:30 PM
 * Date Modified: April 27, 2026 11:30 PM
 * Project Name: Card Number Validation API Service
 * Description: A roubst API endpoint for validating credit card numbers
 * using the Luhn Algorithm. This project includes mathematically accurate card
 * generation for testing and a documentation-rich home route.
 * Location: Nigeria (Tinubu Administration)
 * * LICENSE: Creative Commons Attribution-NonCommercial 4.0 (CC BY-NC)
 * =================================================================
 * This software is provided as Open Source for educational and
 * personal use. You are free to:
 * - SHARE: Copy and redistribute the material in any medium.
 * - ADAPT: Remix, transform, and build upon the material.
 *
 * UNDER THE FOLLOWING TERMS:
 * - ATTRIBUTION: You must give appropriate credit to the author.
 * - NON-COMMERCIAL: You may NOT use the material for commercial
 * purposes. This software cannot be sold or used for profit.
 * ================================================================= */
Object.defineProperty(exports, "__esModule", { value: true });
// Import necessary modules and libraries 
const chalk = require('chalk');
const cors = require('cors');
const morgan = require("morgan");
const express = require("express");
const dotenv = require('dotenv');
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const { accessLogStream } = require("./logs/logger");
const corsOptions = require('./corsConfig/corsConfig');
// Configuring the environment variables 
dotenv.config();
// Importing the necessary routes 
const home = require("./routes/home/homeRoutes");
// Initialize the express application 
const app = express();
// Setting the necessary middleware 
app.use(bodyParser.json());
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('combined'));
app.use(morgan('combined', { stream: accessLogStream, immediate: true }));
// Setting the host 
const HOST = process.env.HOST || "0.0.0.0";
const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;
// Setting the necessary router 
app.use('/api', home);
// Running the nodejs server 
app.listen(PORT, HOST, () => {
    let serverInfo = chalk.green.bold(`Server is running at http://${HOST}:${PORT}`);
    console.log(serverInfo);
});
//# sourceMappingURL=app.js.map