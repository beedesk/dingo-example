function get(req, res, params) {
  res.writeHead(200);
  res.write('Here is an empty list".\n');
  res.end();
}

module.exports = get;
