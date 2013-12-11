
function get(req, res) {
  res.writeHead(200);
  res.write('You got it.\n');
  res.end();
}

function post(req, res) {
  res.writeHead(200);
  res.write('Post Received.\n');
  res.end();
}

module.exports = {post: post, get: get};
