require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const apiUserRoute = require('./api/routes/user.route');
const apiLoginRoute = require('./api/routes/login.route');
const connect = require('./DB/connection');

connect().then(() => {
  console.log('Connect success');
}).catch(console.log);

const app = express();
const port = 8000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true })) 
app.use(bodyParser.json())

app.use('/api/user', apiUserRoute);
app.use('/api/login', apiLoginRoute);


app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))