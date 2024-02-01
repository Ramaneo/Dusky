const bcrypt = require('bcrypt');
const User = require('../models/UserModel');
const saltRounds = 10;

// function here is very basic and removes anything that's not a letter, number, @, or .
function sanitizeInput(input) {
  return input.replace(/[^a-zA-Z0-9@.]/g, '');
}

exports.register = async (req,res) => {
  try {
    const sanitizedUsername = sanitizeInput(req.body.username);
    const sanitizedEmail = sanitizeInput(req.body.email);
    const sanitizedPassword = sanitizeInput(req.body.password);
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(sanitizedPassword, salt);
    const user = new User({
      username: sanitizedUsername,
      email: sanitizedEmail,
      password: hashedPassword,
      salt,
    });
    const savedUser = await user.save();
    console.log("User Registered: ", savedUser);
    res.send("Register Succesful.")
  }
  catch(error) {
    console.log(error)
    res.send("Register Failed.")
  }
}

exports.login = (req, res) => {
  username = req.body.username;
  password = req.body.password;
  // FIX: Implement authentication after database setup
  const token = jwt.sign({ username }, JWT_SECRET, { expiresIn: '1h' });
  res.cookie('session-cookie', token, { httpOnly: true, sameSite: true });
  res.send("Login Successful.");
  };