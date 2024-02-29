const express = require('express');
const app = express();
const port = 3000;

/*
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
// adminModel.js
*/

const mongoose = require('mongoose');

// Connection URI for MongoDB Atlas
const mongoDBAtlasURI = 'mongodb+srv://dusky_project:dusky123456@cluster0.g2nwaqn.mongodb.net/';

// Connect to MongoDB Atlas
mongoose.connect(mongoDBAtlasURI, { useNewUrlParser: true, useUnifiedTopology: true });

// Get the default connection
const db = mongoose.connection;

// Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB Atlas connection error:'));

// Bind connection to open event (to get notification of successful connection)
db.once('open', function() {
  console.log("Connected to MongoDB Atlas");
});

// Define admin schema
const adminSchema = new mongoose.Schema({
  name: String,
  surname: String,
  restaurantName: String
});

// Create Admin model
const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;

// Define employee schema
const employeeSchema = new mongoose.Schema({
  name: String,
  surname: String,
  age: Number,
  gender: String,
  restaurantName: String
});

// Create Employee model
const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;



app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Dusky backend listening at http://localhost:${port}`);
});

//------------------------------------------- ADMİN -----------------------------------------------------------
app.post('/admin', async (req, res) => {
  try {
    const { name, surname, restaurantName } = req.body;
    const newAdmin = new Admin({ name, surname, restaurantName });
    await newAdmin.save();
    res.status(201).json(newAdmin);
  } catch (error) {
    console.error('Error adding admin:', error);
    res.status(500).send('Internal Server Error');
  }
});


app.delete('/admin/:id', async (req, res) => {
  try {
    const id = req.params.id;
    await Admin.findByIdAndDelete(id);
    res.status(204).send();
  } catch (error) {
    console.error('Error removing admin:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.delete('/admin/:id', async (req, res) => {
  try {
    const id = req.params.id;
    await Admin.findByIdAndDelete(id);
    res.status(204).send();
  } catch (error) {
    console.error('Error removing admin:', error);
    res.status(500).send('Internal Server Error');
  }
});


app.put('/admin/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const { restaurantName } = req.body;
    const updatedAdmin = await Admin.findByIdAndUpdate(id, { restaurantName }, { new: true });
    res.json(updatedAdmin);
  } catch (error) {
    console.error('Error updating admin:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.get('/admin', async (req, res) => {
  try {
    const admins = await Admin.find();
    res.json(admins);
  } catch (error) {
    console.error('Error fetching admins:', error);
    res.status(500).send('Internal Server Error');
  }
});
//--------------------------------------------- ADMIN -----------------------------------------------------------



//---------------------------------------------Employee----------------------------------------------------------------
app.post('/employee', async (req, res) => {
  try {
    const { name, surname, age, gender, restaurantName } = req.body;
    const newEmployee = new Employee({ name, surname, age, gender, restaurantName });
    await newEmployee.save();
    res.status(201).json(newEmployee);
  } catch (error) {
    console.error('Error adding employee:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.delete('/employee/:id', async (req, res) => {
  try {
    const id = req.params.id;
    await Employee.findByIdAndDelete(id);
    res.status(204).send();
  } catch (error) {
    console.error('Error removing employee:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.put('/employee/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const { name, surname, age, gender, restaurantName } = req.body;
    const updatedEmployee = await Employee.findByIdAndUpdate(id, { name, surname, age, gender, restaurantName }, { new: true });
    res.json(updatedEmployee);
  } catch (error) {
    console.error('Error updating employee:', error);
    res.status(500).send('Internal Server Error');
  }
});


app.get('/employees/:restaurantName', async (req, res) => {
  try {
    const restaurantName = req.params.restaurantName;
    const employees = await Employee.find({ restaurantName });
    res.json(employees);
  } catch (error) {
    console.error('Error fetching employees:', error);
    res.status(500).send('Internal Server Error');
  }
});


app.get('/employee/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const employee = await Employee.findById(id);
    res.json(employee);
  } catch (error) {
    console.error('Error fetching employee:', error);
    res.status(500).send('Internal Server Error');
  }
});
//--------------------------------------------------EMPLOYEE------------------------------------------------------