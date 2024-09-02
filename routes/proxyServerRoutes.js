const express = require('express');
const { authentication } = require('../middlewares/authMiddleware');
const { handleProxyRequest } = require('../controllers/proxyServerController');
const { rateLimiter } = require('../middlewares/rateLimitMiddleware');

const router = express.Router();

router.use(authentication);

router.use(rateLimiter);

router.get('/', handleProxyRequest);

module.exports = router;
