const express = require('express');
const morgan = require('morgan');
const {engine} = require('express-handlebars');
const path = require('path');

const app = express();
// const hostname = 'localhost';
const port = process.env.PORT || 3000;

const db = require('./config/db');
const route = require('./routes');

//morgan (http logger)
app.use(morgan("combined"));

//middleware (http logger)(post request)
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Connect to MongoDB
db.connect();
route(app);

app.engine('hbs', engine({
  extname: 'hbs',
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

// app.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

app.listen(port, () =>{
  console.log(`Server running at port: ${port}`);
})