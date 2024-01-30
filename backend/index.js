const express = require('express');
const app = express();
const UserRoutes = require('./routes/UserRoutes');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const port = 3000;

app.use(cookieParser());
app.use('/user', UserRoutes);
const JWT_SECRET = 'TBD'; 

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Dusky backend listening at http://localhost:${port}`);
});

