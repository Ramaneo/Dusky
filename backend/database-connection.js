const mongoose = require('mongoose');
const databaseUrl = "mongodb+srv://DuskyManagementUser:sYjtwwZuGBrU4bpI@cluster0.g2nwaqn.mongodb.net/duskyDB?retryWrites=true&w=majority"
// HARDCODED CREDENTIALS, CHANGE LATER!
  async function run() {
    mongoose.connect(databaseUrl)
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB:', err));

  }

  function gracefulShutdown(message, callback) {
    mongoose.disconnect()
      .then(() => {
        console.log(`Mongoose disconnected through ${message}`);
        callback();
      })
      .catch(err => console.error('Mongoose disconnection error:', err));
  }

  module.exports = { run,gracefulShutdown };