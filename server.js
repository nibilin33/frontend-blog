/**
 * Created by Administrator on 2019/10/13.
 */
const express = require('express');
const path = require('path');
const app = express();
const http =  require("http");
const log4js = require('log4js');
log4js.configure({
    appenders: [
        { type: 'console', category: 'log' }
    ]
});
const logger = log4js.getLogger('app');
logger.setLevel('INFO'); // 级别 > INFO 的日志才会被打印
app.use(log4js.connectLogger(logger));
app.use(express.static(path.join(__dirname,'docs')));
app.use(function(request, response) {
    try {
        response.sendFile(path.resolve('docs/index.html'));
    }catch (e) {
        console.error(e.toString());
    }
});
http.createServer(app).listen(3000);

