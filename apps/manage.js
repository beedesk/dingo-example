var path      = require('path');
var util      = require('util');
var dingo     = require('dingo');

settings = dingo.settings;
settings.BASE_PATH = path.dirname(require.main.filename);
dingo.core.management.execute_from_command_line(process.argv);
