const bcrypt = require('bcrypt');
const User = require('../models/UserModel');
const jwt = require('jsonwebtoken');
const JWT_SECRET = '0315926927202137F13A3BBC32C7801CD2C98BF9BFF8A288307B5C60EE570257'; 
const saltRounds = 10;

// function here is very basic and removes anything that's not a letter, number, @, or .

exports.register = async (req,res) => {
  try {
    const userName = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    const userType = req.body.user_type;
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(password, salt);
    const user = new User({
      username: userName,
      email: email,
      user_type: userType,
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

exports.login = async (req, res) => {
  userName = req.body.username;
  password = req.body.password;

  const user = await User.findOne({ username: userName });
  if(user) {
    input_pw = await bcrypt.hash(password, user.salt);
    if (input_pw == user.password) {
      const token = jwt.sign({ userName }, JWT_SECRET, { expiresIn: '1h' });
      res.cookie('session-cookie', token, { httpOnly: true, sameSite: true });
      res.send("Login Successful.");
    } else {
      res.send("Invalid Login.");
    }
  } else {
    res.send("Invalid login.")
  }
};