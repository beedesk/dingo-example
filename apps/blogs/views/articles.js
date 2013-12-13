var util = require('util');

function get(req, res, params) {
  console.log('params: ' + util.inspect(params));
  res.writeHead(200);
  res.write(util.format('You are reading articles "%s".\n', params.id));
  res.end();
}

function post(req, res, params) {
  res.writeHead(200);
  res.write(util.format('Post Received for articles "%s".\n', params.id));
  res.end();
}

module.exports = {post: post, get: get};
