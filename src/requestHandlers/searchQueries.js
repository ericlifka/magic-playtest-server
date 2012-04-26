exports.supportedSets = function (request, response) {
    response.send(JSON.stringify([
        'Core 2012'
    ]));
};