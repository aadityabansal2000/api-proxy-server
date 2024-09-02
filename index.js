const express = require('express');
const morgan = require('morgan');
const proxyServerRoutes= require('./routes/proxyServerRoutes');
const { logCreater } = require('./utils/logCreater');

require('dotenv').config();

const app= express();

const PORT= process.env.PORT || 3000;

app.use(morgan(':date[iso] :remote-addr :method :url :status :res[content-length] - :response-time ms', { stream: logCreater.stream }));

app.use('/proxy', proxyServerRoutes);

app.listen(PORT,()=>{console.log(`Server running at port ${PORT}`)});