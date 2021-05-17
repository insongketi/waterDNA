let request = require("request");

exports.sendRequest = function (requestOptions,callback) {
    request(requestOptions, function (error, response, body) {
       if(error) {
           console.error('There is an error ', error);
           callback(null);
           } else {
           // console.log(response.body); //comment it out when not needed
           callback(response.body);
       }
       console.log(response.body);
//       console.log("success");
    });
}