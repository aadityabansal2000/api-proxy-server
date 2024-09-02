Prerequisites : <br/>
  Node.js (version 14 or higher) <br/>
  npm (comes with Node.js)

Install Dependencies : <br/>
  npm install

Set Up Environment Variables :<br/>
  AUTH_TOKEN=api_proxy_auth_token <br/>
  CACHE_DURATION=300 <br/>
  PORT=3000 <br/>
  RATE_LIMIT_INTERVAL=60000 <br/>
  RATE_LIMIT_MAX=5 <br/>

To start the server: <br/>
  cd api-proxy-server <br/>
  node index.js

Make requests to api endpoint i.e http://localhost:3000/proxy 
  
Pass the external public API URL as a query parameter on postman or thunderclient for e.g : https://fakestoreapi.com/products <br/>
e.g http://localhost:3000/proxy?url=https://fakestoreapi.com/products <br/>
Include the Authorization header with your token  <br/>
key : authorization <br/>
value : api_proxy_auth_token

Logs will be stored in the logs/proxyServer.log file in the following format: <br/>
  2024-09-02T12:00:00.000Z 127.0.0.1 GET /proxy 200 - - 25.3 ms


