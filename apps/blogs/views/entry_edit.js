var util    = require('util');
var render  = require('dingo').shortcuts.render;

function get(req, res, params) {
  var rendered = render('blogs/entry_edit.html', params);
  res.writeHead(200);
  res.write(rendered);
  res.end();
}

function post(req, res, params) {
  res.writeHead(400);
  res.write('Not implemented');
  res.end();
}

module.exports = {post: post, get: get};
