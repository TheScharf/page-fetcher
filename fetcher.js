let args = process.argv.slice(2);
const fs = require('fs');
const request = require('request');

request(args[0].toString(), function(error, response, body) {
  fs.writeFile(args[1].toString(), response.toString(), error => {
    if (error) {
      console.log('error');
      return;
    }
    console.log('statusCode: ', response && response.statusCode);
    console.log('body: ', body);
  });
});