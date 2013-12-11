var dingo = require('dingo');

var url = dingo.conf.urls.url;
var include = dingo.conf.urls.include;
var patterns = dingo.conf.urls.patterns;

module.exports = {patterns: patterns(
  '',
  url(/^blogs$/, include('blogs.urls')),
  url(/^common$/, include('common.urls')),
  url(/^$/, 'home.views.index')
)};
