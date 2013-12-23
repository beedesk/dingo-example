var dingo = require('dingo');

var url = dingo.conf.urls.url;
var include = dingo.conf.urls.include;
var patterns = dingo.conf.urls.patterns;

var TemplateView = dingo.templates.TemplateView;

module.exports = {patterns: patterns(
    '',
    url(/^$/, 'blogs.views.list'),
    url('^(?P<id>\\d{3,10})$', TemplateView.as_view('blogs/entry.html')),
    url('^(?P<id>\\d{3,10})/edit$', 'blogs.views.entry_edit')

)};

console.log('blogs, patterns: ' + JSON.stringify(module.exports));
