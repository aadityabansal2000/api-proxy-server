const proxyServiceProvider = require('../services/proxyServiceProvider');

exports.handleProxyRequest = async (req, res) => {
  const { url } = req.query;

  if (!url) {
    return res.status(400).json({ error: 'URL parameter is required' });
  }

  try {
    const data = await proxyServiceProvider.fetchData(url);
    return res.json(data);
  } catch (error) {
    return res.status(error.response ? error.response.status : 500).json({
      error: 'Failed to fetch data from the external API',
      details: error.message,
    });
  }
};
