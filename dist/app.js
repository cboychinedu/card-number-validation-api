"use strict";
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
const HOST = process.env.HOST || "localhost";
const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3001;
// Setting the necessary router 
app.use('/api', home);
// Running the nodejs server 
app.listen(PORT, HOST, () => {
    let serverInfo = chalk.green.bold(`Server is running at http://${HOST}:${PORT}`);
    console.log(serverInfo);
});
//# sourceMappingURL=app.js.map