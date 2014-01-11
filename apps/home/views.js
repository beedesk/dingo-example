
function get(req, res) {
  res.writeHead(200);
  res.write('<p>Hello World.</p>');
  res.write('<p>Get a list of <a href="/blogs/">/blogs/</a> articles.</p>');
  res.write('<p>Get a specific <a href="/blogs/2014/1234">/blogs/2014/1234</a> article.</p>');
  res.end();
}

module.exports = {index: {get: get}};
