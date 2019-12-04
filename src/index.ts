import * as winston from 'winston';

/**
 * Wrapper for Winston logger.
 */

export const transports = {
  console: new winston.transports.Console({ level: 'info'}),
  file: new winston.transports.File({ filename: 'combined.log', level: 'error' })
};


const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(winston.format.colorize(), winston.format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss'
    }),
    winston.format.printf(info => `${info.timestamp} ${info.level}: ${info.message}`)),
  transports: [
    transports.console,
    transports.file
  ]
});


export function get(): winston.Logger {
  return logger;
}

export function logFile(name: string) {
  transports.file.filename = name;
}

export function logFileLoggingLevel(level: string) {
  transports.file.level = name;
}

export function consoleLoggingLevel(level: string) {
  transports.console.level = name;
}

export function consoleLoggingSilent(silent: boolean) {
  transports.console.silent = silent;
}

export function debug(message: string) {
  logger.log('debug', message);
}

export function verbose(message: string) {
  logger.log('verbose', message);
}

export function info(message: string) {
  logger.log('info', message);
}

export function warn(message: string) {
  logger.log('warn', message);
}

export function error(message: string) {
  logger.log('error', message);
}
