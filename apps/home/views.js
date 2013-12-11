
function get(req, res) {
  res.writeHead(200);
  res.write('<p>Hello World.</p>');
  res.write('<p>Try <a href="/blogs">/blogs</a> too.</p>');
  res.end();
}

module.exports = {index: {get: get}};
