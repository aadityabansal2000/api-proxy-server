
const NodeCache = require('node-cache');
const cacheDuration=300;
const cache = new NodeCache({ stdTTL: process.env.CACHE_DURATION || cacheDuration });

exports.cacheMiddleware = (req, res, next) => {
  const { url } = req.query;

  if (!url) {
    return res.status(400).json({ error: 'URL parameter is required' });
  }

  const cachedResponse = cache.get(url);
  if (cachedResponse) {
    return res.json(cachedResponse);
  }
  next();
};

exports.setCache = (key, value) => {
  cache.set(key, value);
};
