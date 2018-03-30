module.exports = function (app) {
    // GET call to return JSON that formats natural and unix date
    app.get("/date/:value", function (request, response, next) { 
        let value = request.params.value;
        response.json({unix: value});
    });
}