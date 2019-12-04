"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const winston = require("winston");
/**
 * Wrapper for Winston logger.
 */
exports.transports = {
    console: new winston.transports.Console({ level: 'info' }),
    file: new winston.transports.File({ filename: 'combined.log', level: 'error' })
};
const logger = winston.createLogger({
    level: 'info',
    format: winston.format.combine(winston.format.colorize(), winston.format.timestamp({
        format: 'YYYY-MM-DD HH:mm:ss'
    }), winston.format.printf(info => `${info.timestamp} ${info.level}: ${info.message}`)),
    transports: [
        exports.transports.console,
        exports.transports.file
    ]
});
function get() {
    return logger;
}
exports.get = get;
function logFile(name) {
    exports.transports.file.filename = name;
}
exports.logFile = logFile;
function logFileLoggingLevel(level) {
    exports.transports.file.level = name;
}
exports.logFileLoggingLevel = logFileLoggingLevel;
function consoleLoggingLevel(level) {
    exports.transports.console.level = name;
}
exports.consoleLoggingLevel = consoleLoggingLevel;
function consoleLoggingSilent(silent) {
    exports.transports.console.silent = silent;
}
exports.consoleLoggingSilent = consoleLoggingSilent;
function debug(message) {
    logger.log('debug', message);
}
exports.debug = debug;
function verbose(message) {
    logger.log('verbose', message);
}
exports.verbose = verbose;
function info(message) {
    logger.log('info', message);
}
exports.info = info;
function warn(message) {
    logger.log('warn', message);
}
exports.warn = warn;
function error(message) {
    logger.log('error', message);
}
exports.error = error;
