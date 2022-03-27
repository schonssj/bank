var http = require('http')
    ,app = require('./config/express');

http.createServer(app).listen(8080, function() {
    console.log('Server listen on port: ' + this.address().port);
});

