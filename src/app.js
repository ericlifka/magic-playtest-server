var express = require('express');
var searchHandlers = require('./requestHandlers/searchQueries');

var app = module.exports = express.createServer();

app.configure(function () {
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);
    app.use(express.static(__dirname + '/public'));
    app.use(express.errorHandler({dumpExceptions:true, showStack:true}));
});

app.get('/', function (request, response) {
    response.send("hi");
});

app.get('/search/supportedSets', searchHandlers.supportedSets);

app.listen(3000, function () {
    console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
});
