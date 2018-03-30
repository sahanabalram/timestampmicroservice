module.exports = function (app) {
    // GET call to return JSON that formats natural and unix date
    app.get("/timestamp-microservice-sb.herokuapp.com/:value", function (request, response, next) { 
        // Gets the request for data for date
        let value = request.params.value;
        // Formating date in natural date view
        let naturalDateFormat = {
            year: "numeric",
            month: "long",
            day: "numeric"
        };
// if its not a number then it is a string value and need to create a natural date
        if(isNaN(value)){
            var naturalDate = new Date(value);
            naturalDate = naturalDate.toLocaleDateString("en-us",naturalDateFormat);
            var unixDate = new Date(value).getTime()/ 1000;
        } else {
            var unixDate = value;
            var naturalDate = new Date(value * 1000);
            naturalDate.toLocaleDateString("en-us",naturalDateFormat);
        }
        response.json({unix: unixDate, natural: naturalDate});
    });
}