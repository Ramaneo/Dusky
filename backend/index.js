const express = require('express');
const app = express();
const UserRoutes = require('./routes/UserRoutes');
const FeedbackRoutes = require('./routes/FeedbackRoutes');
const StoreRoutes = require('./routes/StoreRoutes');
const cookieParser = require('cookie-parser');
const dbConnection = require('./database-connection');
const AccessControl = require('./AccessControlManager');
const port = 3000;

app.use(cookieParser());
app.use(express.json());
app.use('/user', UserRoutes);
app.use('/feedback', FeedbackRoutes);
app.use('/store', StoreRoutes);
dbConnection.run().catch(console.error);


app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Dusky backend listening at http://localhost:${port}`);
});

  // DATABASE DISCONNECT
  process.on('SIGINT', () => {
    dbConnection.gracefulShutdown('app termination', () => {
      console.log('App is terminating');
      process.exit(0);
    });
  });

  process.on('SIGTERM', () => {
    dbConnection.gracefulShutdown('Heroku app shutdown', () => {
      console.log('Heroku app terminated');
      process.exit(0);
    });
  });

  process.on('uncaughtException', err => {
    console.error('Uncaught Exception:', err);
    dbConnection.gracefulShutdown('uncaught exception', () => {
      process.exit(1);
    });
  });