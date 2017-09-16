"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var winston = require("winston");
var Log = (function () {
    function Log(message) {
        this.path = 'lib/log/log-result/log-lib.log';
        var logger = new (winston.Logger)({
            transports: [
                new (winston.transports.Console)(),
                new (winston.transports.File)({
                    filename: this.path,
                    level: 'error'
                })
            ]
        });
        logger.error(message + "\n");
    } // constructor
    return Log;
}()); // class
exports.Log = Log;
