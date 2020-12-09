const fs = require('fs');

fs.readFile('./planets.txt', function (err, data) {
    console.log(data.toString());

});