var fs = require('fs');
var path = require('path');

module.exports = function(file, ext, callback) {
  fs.readdir(file, function(err, data){
    if(err) {
      return callback(err);
    }
    var filtered = [];
    for(i = 0; i < data.length; i++) {
      if(path.extname(data[i]) === '.' + ext){
        filtered.push(data[i]);
      }
    }
    return callback(null, filtered);
  });
};