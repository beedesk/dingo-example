var dingo = require('dingo');

var url = dingo.conf.urls.url;
var include = dingo.conf.urls.include;
var patterns = dingo.conf.urls.patterns;


module.exports = {patterns: patterns(
    '',
    url(/^$/, 'blogs.views.articles')
)};

console.log('blogs, patterns: ' + JSON.stringify(module.exports));
