var ALLOWED_ORIGINS = settings.CORS_ALLOWED_ORIGINS;

// -------------------------------------
//              Middleware
// -------------------------------------
function process_request(req, res, next) {
  if ('OPTIONS' !== req.method) {
    if ('origin' in req.headers) {
      res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
    }
    next();
  } else {
    var body = '{}\n';
    if ('origin' in req.headers) {
      if (ALLOWED_ORIGINS.indexOf(req.headers.origin) >= 0) {
        res.setHeader('Content-Type', 'application/json');
        res.setHeader('Content-Length', body.length);
        res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
        res.setHeader('Access-Control-Allow-Headers',
            req.headers['access-control-request-headers']);
        if (req.headers['access-control-request-method']) {
          res.setHeader('Access-Control-Allow-Method',
              req.headers['access-control-request-method']);
        }
        if (req.headers['access-control-request-methods']) {
          res.setHeader('Access-Control-Allow-Methods',
              req.headers['access-control-request-methods']);
        }
        res.setHeader('Access-Control-Max-Age', (60));
        res.setHeader('Access-Control-Allow-Credentials', 'true');
        res.end(body);
      } else {
        res.setHeader('Content-Type', 'application/json');
        res.setHeader('Content-Length', body.length);
        res.send(403, body);
        res.end();
      }
    }
  }
};

module.exports = {
  process_request: process_request
};
