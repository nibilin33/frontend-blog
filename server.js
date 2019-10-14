/**
 * Created by Administrator on 2019/10/13.
 */
const express = require('express');
const path = require('path');
const app = express();
const http =  require("http");
const log4js = require('log4js');
log4js.configure({
    appenders: { cheese: { type: 'file', filename: 'cheese.log' } },
    categories: { default: { appenders: ['cheese'], level: 'error' } }
});
const logger = log4js.getLogger('cheese');
app.use(log4js.connectLogger(logger));
app.use('/frontend-blog', express.static(path.join(__dirname,'docs')));
// app.use(express.static(path.join(__dirname,'docs')));
app.use(function(request, response) {
    try {
        response.sendFile(path.resolve('docs/index.html'));
    }catch (e) {
        logger.error('sendFile error %s', e.toString());
    }
});
http.createServer(app).listen(3000, '0.0.0.0', function () {
    var host = this.address().address;
    var port = this.address().port;
    logger.error('Service listening http at http://%s:%s', host, port);
});


