const express = require('express')
let bodyParser = require('body-parser');

app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes = require('./routes');
api = require('./routes/api'),
port = process.env.PORT || 3005;
app.get('/', routes.index);
app.post('/api/countZero', api.countZero);

app.listen(port, function() {
  console.log('Listening on port ' + port);
});
