const express = require("express");
const bodyParser = require('body-parser');
const app = express();
// const flash = require('express-flash');

app.use(bodyParser.json());
app.use(express.static( __dirname + '/public/dist/public' ));
app.listen(8000, () => console.log("listening on port 8000"));
require('./backend/routes')(app);