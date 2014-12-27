var fs = require('fs');
var myNumber = undefined;

function catFile(callback) {
  fs.readFile(process.argv[2], 'utf8', function fetchContents(err, data){
    myNumber = data.split('\n').length - 1;
    callback();
  })
}

function printNumber() {
  console.log(myNumber);
}

catFile(printNumber);