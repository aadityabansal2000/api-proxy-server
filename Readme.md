Prerequisites :
  Node.js (version 14 or higher)
  npm (comes with Node.js)

Install Dependencies :
  npm install

Set Up Environment Variables :
  AUTH_TOKEN=api_proxy_auth_token
  CACHE_DURATION=300
  PORT=3000
  RATE_LIMIT_INTERVAL=60000
  RATE_LIMIT_MAX=5

To start the server:
  cd api-proxy-server
  node index.js

Make requests to api endpoint i.e http://localhost:3000/proxy 
  
Pass the external public API URL as a query parameter on postman or thunderclient for e.g : https://fakestoreapi.com/products

Include the Authorization header with your token 
key : authorization
value : api_proxy_auth_token

Logs will be stored in the logs/proxyServer.log file in the following format:
  2024-09-02T12:00:00.000Z 127.0.0.1 GET /proxy 200 - - 25.3 ms


