var fs = require('fs');
var util = require('util');

var personal_settings = (fs.existsSync('./personal_settings.js')? 
                    require('./personal_settings'): undefined);

var settings = {

}

module.exports = uti._extend(settings, personal_settings);

