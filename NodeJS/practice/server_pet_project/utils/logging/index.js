require('winston-daily-rotate-file');

const winston = require('winston');
const { config } = require('@config');

const { format, transports } = winston;
const { combine, label, printf, colorize } = format;
const colorizer = colorize();

class Logging {
    constructor() {
        this.level = this.validateLogLevel(config.logger.level);
        this.maxSize = config.logger.maxFileSize;
        this.maxFiles = config.logger.maxLiveTime;
        this.datePattern = config.logger.datePattern;
        this.appMode = config.app.nodeEnv;
        this.container = new winston.Container();
    }

    static getInstance() {
        if (!Logging.instance) {
            Logging.instance = new Logging();
        }

        return Logging.instance;
    }

    registerLogger(namespace) {
        try {
            this.namespace = namespace;
            this.container.add(this.namespace, {
                format: combine(
                    format.timestamp(),
                    label({ label: this.namespace }),
                    format.splat(),
                    this.appMode === 'production' ? this.verboseFormat() : this.verboseFormatColor()
                ),
                level: this.level,
                transports: this.getTransportsPatterns(),
            });

            return this.container.get(this.namespace);
        } catch (error) {
            console.error(`Logger error: ${error}`);
        }
    }

    getTransportsPatterns() {
        const transportsPatterns = {
            production: () => [
                new transports.DailyRotateFile({
                    filename: 'combine.log',
                    datePattern: this.datePattern,
                    zippedArchive: true,
                    maxSize: this.maxSize,
                    maxFiles: this.maxFiles,
                    format: combine(format.timestamp(), label({ label: this.namespace }), format.splat(), this.verboseFormat()),
                }),
                new transports.DailyRotateFile({
                    filename: 'error.log',
                    level: 'error',
                    datePattern: this.datePattern,
                    zippedArchive: true,
                    maxSize: this.maxSize,
                    maxFiles: this.maxFiles,
                    format: combine(format.timestamp(), label({ label: this.namespace }), format.splat(), this.verboseFormat()),
                }),
            ],
            development: () => [
                new transports.Console({
                    level: this.level,
                    format: combine(format.timestamp(), label({ label: this.namespace }), format.splat(), this.verboseFormatColor()),
                }),
            ],
        };

        return transportsPatterns[this.appMode || 'development']();
    }

    formatLoggerMessage(data) {
        return `${data.level} [${data.timestamp}] ${data.label} - ${data.message}`;
    }

    verboseFormatColor() {
        return printf((data) => {
            const coloredData = colorizer.transform(data, {
                all: false,
                level: true,
                message: true,
            });

            return this.formatLoggerMessage(coloredData);
        });
    }

    verboseFormat() {
        return printf((data) => this.formatLoggerMessage(data));
    }

    validateLogLevel(level) {
        const defaultLevel = 'debug';

        if (level) {
            const standartLevel = level.toLowerCase();

            if (standartLevel in winston.config.cli.levels) {
                return standartLevel;
            }
        }

        return defaultLevel;
    }
}

module.exports = Logging;
