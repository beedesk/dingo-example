var path      = require('path');
var util      = require('util');
var dingo     = require('dingo');
var settings  = dingo.settings;

var BASE_PATH = path.dirname(require.main.filename);
//console.log('cache require(): ' + util.inspect(require('settings')));

if (process.argv.length <= 2) {
  console.log('Type "manage.js help <subcommand>" for help on a specific subcommand.');
  console.log('[http]');
  console.log('\trunserver\n');
  process.exit(1);
}

if (process.argv[2] === 'runserver') {
  var command_args = process.argv.splice(3);
  dingo.core.management.commands.runserver.handle.apply(this, command_args);
}
