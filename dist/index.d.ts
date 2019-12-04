import * as winston from 'winston';
/**
 * Wrapper for Winston logger.
 */
export declare const transports: {
    console: winston.transports.ConsoleTransportInstance;
    file: winston.transports.FileTransportInstance;
};
export declare function get(): winston.Logger;
export declare function logFile(name: string): void;
export declare function logFileLoggingLevel(level: string): void;
export declare function consoleLoggingLevel(level: string): void;
export declare function consoleLoggingSilent(silent: boolean): void;
export declare function debug(message: string): void;
export declare function verbose(message: string): void;
export declare function info(message: string): void;
export declare function warn(message: string): void;
export declare function error(message: string): void;
