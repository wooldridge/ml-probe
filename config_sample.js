var pjson = require('./package.json');
var path = require('path');

var config = {};

config.path = path.dirname(require.main.filename) + "/";

config.host = "localhost";

config.auth = {
  user: 'USERNAME',
  pass: 'PASSWORD',
  sendImmediately: false
};

config.database = {
  "name": pjson.name,
  "port": 8558
};

config.databaseSetup = {
  "database-name": config.database.name
};

config.forestSetup = {
  "forest-name": config.database.name + '-1',
  "database": config.database.name
}

config.restSetup = {
  "rest-api": {
    "name": config.database.name + "-rest",
    "database": config.database.name,
    "modules-database": config.database.name + "-modules",
    "port": config.database.port,
    "error-format": "json"
  }
}

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = config;
}
