exports.authentication = (req, res, next) => {

  const authToken = req.headers['authorization'];

  if (authToken === process.env.AUTH_TOKEN) 
  {
    return next();
  }

  return res.status(401).json({ error: 'Unauthorized access!' });
};
