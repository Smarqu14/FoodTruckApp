const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const morgan = require('morgan');
const middleware = require('./middleware.js');

const app = express();
app.use(morgan('dev'));
app.use(middleware);
app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(bodyParser.json());
const port = 3000;


app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'), (err) => {
    if (err) {
      res.status(500).send(err);
    }
  });
});

const Controller = require('./controller.js');

app.get('/api/images', Controller.getImages);


app.listen(port, () => console.log(`Food Truck APP: ${port}`));
