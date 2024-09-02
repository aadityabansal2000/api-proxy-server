const rateLimit = require('express-rate-limit');
const rateLimitFreq=60 * 1000,maxRateLimit=5;
exports.rateLimiter = rateLimit({
  windowMs: process.env.RATE_LIMIT_INTERVAL || rateLimitFreq,
  max: process.env.RATE_LIMIT_MAX || maxRateLimit, 
  message: 'Too frequent requests, please try again later after some time !',
  statusCode: 429,
});
