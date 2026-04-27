"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Importing the necessary modules 
const fs = require('fs');
const path = require('path');
// Create a write stream (in append mode) for the log file 
const accessLogStream = fs.createWriteStream(path.join(__dirname, 'requests.log'), { flags: 'a' });
// Exporting the logger module 
module.exports = { accessLogStream };
//# sourceMappingURL=logger.js.map