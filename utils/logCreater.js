const fs = require('fs');
const path = require('path');
const { createLogger, format, transports } = require('winston');

const logDirectory = path.join(__dirname, '../logs');


if (!fs.existsSync(logDirectory)) {
  fs.mkdirSync(logDirectory);
}

const logCreater = createLogger({
  format: format.combine(
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    format.printf(({ timestamp, level, message }) => `${timestamp} ${level}: ${message}`)
  ),
  transports: [
    new transports.File({ filename: path.join(logDirectory, 'proxyServer.log') }),
    new transports.Console(),
  ],
});

logCreater.stream = {
  write: function (message) {
    logCreater.info(message.trim());
  },
};

module.exports = { logCreater };
