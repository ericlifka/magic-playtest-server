(function () {
    window.urlParts = {
        create: function () {
            var urlParts = {};
            var href = window.location.href;
            var parts = href.split('?');
            var params = parts[1];
            if (!_.isUndefined(params)) {
                params = params.split('&');
                _.each(params, function (param) {
                    param = param.split('=');
                    urlParts[param[0]] = param[1];
                });
            }
            return urlParts;
        }
    };
})();
