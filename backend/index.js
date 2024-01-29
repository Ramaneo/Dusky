const express = require('express');
const app = express();
const UserRoutes = require('./routes/UserRoutes');
const port = 3000;

app.use('/user', UserRoutes);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Dusky backend listening at http://localhost:${port}`);
});

