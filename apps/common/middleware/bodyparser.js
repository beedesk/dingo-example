var connect = require('connect');
var settings = require('dingo').settings;

module.exports = {process_request: connect.bodyParser({
  keepExtensions: true, uploadDir: settings.DIR_UPLOAD,
  maxFieldsSize: (32 * 1024 * 1024)
})};
