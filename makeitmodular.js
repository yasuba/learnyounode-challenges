var mymodule = require('./mymodule.js');
var file = process.argv[2];
var ext = process.argv[3];

mymodule(file, ext, function(err,data){
  if(err){
    return console.error('There was an error', err);
  }
  for(i = 0; i< data.length; i++){
    console.log(data[i]);
  }
});