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



const userSchema = new mongoose.Schema({
  email: String,
  name: String,
  surname: String,
  followers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  following: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
});

const User = mongoose.model('User', userSchema);

module.exports = User;


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

//--------------------------------------------------USER-----------------------------------------------------------

// POST method to create a new user profile
app.post('/user', async (req, res) => {
  try {
    const { email, name, surname } = req.body;
    const newUser = new User({ email, name, surname });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    console.error('Error creating user profile:', error);
    res.status(500).send('Internal Server Error');
  }
});

// PUT method to update an existing user profile
app.put('/user/update', async (req, res) => {
  try {
    const { email, name, surname } = req.body;

    // Find the user by email
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).send('User not found');
    }

    // Update name and surname
    user.name = name;
    user.surname = surname;

    // Save the updated user
    const updatedUser = await user.save();

    res.json(updatedUser);
  } catch (error) {
    console.error('Error updating user profile:', error);
    res.status(500).send('Internal Server Error');
  }
});

// DELETE method to delete an existing user profile by email
app.delete('/user', async (req, res) => {
  try {
    const { email } = req.body;

    // Find the user by email
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).send('User not found');
    }

    // Delete the user
    await User.findByIdAndDelete(user._id);
    
    res.status(204).send();
  } catch (error) {
    console.error('Error deleting user profile:', error);
    res.status(500).send('Internal Server Error');
  }
});


// GET method to get user data by email
app.get('/user', async (req, res) => {
  try {
    const { email } = req.body;

    // Find the user by email
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).send('User not found');
    }

    res.json(user);
  } catch (error) {
    console.error('Error fetching user data:', error);
    res.status(500).send('Internal Server Error');
  }
});

// GET method to list all users
app.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).send('Internal Server Error');
  }
});


// PUT method to follow a user
app.put('/user/follow', async (req, res) => {
  try {
    const { followerEmail, followeeEmail } = req.body;

    // Find the follower user by email
    const follower = await User.findOne({ email: followerEmail });
    if (!follower) {
      return res.status(404).send('Follower user not found');
    }

    // Find the followee user by email
    const followee = await User.findOne({ email: followeeEmail });
    if (!followee) {
      return res.status(404).send('Followee user not found');
    }

    // Check if the follower is already following the followee
    if (follower.following.includes(followee._id)) {
      return res.status(400).send('User is already following the other user');
    }

    // Update the follower's following list
    await User.findByIdAndUpdate(follower._id, { $push: { following: followee._id } });

    // Update the followee's followers list
    await User.findByIdAndUpdate(followee._id, { $push: { followers: follower._id } });

    res.status(200).send('User followed successfully');
  } catch (error) {
    console.error('Error following user:', error);
    res.status(500).send('Internal Server Error');
  }
});


// PUT method to unfollow a user
app.put('/user/unfollow', async (req, res) => {
  try {
    const { userEmail, unfollowUserEmail } = req.body;

    // Find the user who wants to unfollow by email
    const user = await User.findOne({ email: userEmail });
    if (!user) {
      return res.status(404).send('User not found');
    }

    // Find the user to be unfollowed by email
    const unfollowUser = await User.findOne({ email: unfollowUserEmail });
    if (!unfollowUser) {
      return res.status(404).send('User to be unfollowed not found');
    }

    // Check if the user is already following the user to be unfollowed
    if (!user.following.includes(unfollowUser._id)) {
      return res.status(400).send('User is not following the other user');
    }

    // Update the user's following list
    await User.findByIdAndUpdate(user._id, { $pull: { following: unfollowUser._id } });

    // Update the unfollowed user's followers list
    await User.findByIdAndUpdate(unfollowUser._id, { $pull: { followers: user._id } });

    res.status(200).send('User unfollowed successfully');
  } catch (error) {
    console.error('Error unfollowing user:', error);
    res.status(500).send('Internal Server Error');
  }
});


//-------------------------------------------------------USER---------------------------------------------------------------


