var fs = require('fs');
var path = require('path');
var util = require('util');

console.log('loading local settings');
var dev_settings = (fs.existsSync('./development_settings.js')?
                    require('./development_settings'): undefined);

var DIR_TMP = './tmp';

var settings = {
  ALLOWED_ORIGINS: [
    'https://www.example.com'
  ],

  DEBUG: (process.env.PRODUCTION !== 'true'),

  SERVER_PORT: (process.env.PORT || 5000),

  ACCEPT_INSECURE_HTTP: true,

  INSTALLED_APPS: [
    'home',
    'common',
    'blogs'
  ],

  MIDDLEWARE_CLASSES: [
    'common.middleware.bodyparser',
    'common.middleware.https',
    'common.middleware.cors'
  ],

  DIR_UPLOAD: path.join(DIR_TMP, 'rand')

};

module.exports = util._extend(settings, dev_settings);
