const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const connectDatabase = require('../config/database')
const route = require('../Routes')
const morgan = require('morgan');

const app = express();
const port = 3005;

//app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
app.use(express.json());

connectDatabase();

route(app);

app.listen(port,()=>{
  console.log( `Server is running on port ${port}`);
});
