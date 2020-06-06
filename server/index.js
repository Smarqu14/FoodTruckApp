const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(bodyParser.json());
const port = 8080;
app.listen(port, () => console.log(`Food Truck APP: ${port}`));
