
function process_request(req, res, next) {
  var loc = 'https://' + req.headers.host + (req.path ? '/' + req.path: '');
  if (req.headers['x-forwarded-proto'] !== 'https' && !settings.ACCEPT_INSECURE_HTTP) {
    res.writeHeader(302, {'Location': loc});
    res.end();
  } else {
    next();
  }
}

module.exports = {
  process_request: process_request
};
