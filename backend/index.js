const express = require('express');
const app = express();
const port = 3000;

// CS308 project copied
const { initializeApp } = require('firebase/app');
const { getDatabase, ref, get } = require('firebase/database');


const firebaseConfig = {
  apiKey: "AIzaSyDS_a38npCwNGHDxPB90wYmLWgNYgdED_s",
  authDomain: "dusky-c6a08.firebaseapp.com",
  databaseURL: "https://dusky-c6a08-default-rtdb.firebaseio.com",
  projectId: "dusky-c6a08",
  storageBucket: "dusky-c6a08.appspot.com",
  messagingSenderId: "34361181680",
  appId: "1:34361181680:android:9fcb8287dc00ebfd158935"
};


//CS308 project copied
// Initialize Firebase app
const firebaseApp = initializeApp(firebaseConfig);
const firebaseDb = ref(getDatabase(firebaseApp));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Dusky backend listening at http://localhost:${port}`);
});
