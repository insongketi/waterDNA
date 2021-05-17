let request = require("request");

exports.sendRequest = function (requestOptions,callback) {
    request(requestOptions, function (error, response, body) {
       if(error) {
           try{
               console.error('There is an error ', error);
               callback(null);
           }
           catch (e) {
               console.log(e.toString());
               sendRequest(requestOptions);
           }

           } else {
           // console.log(response.body); //comment it out when not needed
           callback(response.body);
       }
       console.log(response.body);
//       console.log("success");
    });
}