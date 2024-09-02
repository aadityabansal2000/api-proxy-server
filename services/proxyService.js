const axios = require('axios');
const NodeCache = require('node-cache');

const cache = new NodeCache({ stdTTL: process.env.CACHE_DURATION || 300 });

exports.fetchData = async (url) => {

  const cachedResponse = cache.get(url);
  if (cachedResponse) {
    return cachedResponse;
  }

  const response = await axios.get(url);

  cache.set(url, response.data);

  return response.data;
};
