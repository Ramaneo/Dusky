const crypto = require('crypto');

function hashPassword(password, salt) {
  return crypto.pbkdf2Sync(password, salt, 
      1000, 64, `sha512`).toString(`hex`); 
}

exports.register = (req,res) => {
  const salt = crypto.randomBytes(16).toString('hex');
  const hash = hashPassword(req.body.password, salt);
  const username = req.body.username;
  const email = req.body.email;
  // FIX: Register the username,email,hash,salt to the DB
  res.send("Register Succesful.")
}

exports.login = (req, res) => {
  username = req.body.username;
  password = req.body.password;
  // FIX: Implement authentication after database setup
  const token = jwt.sign({ username }, JWT_SECRET, { expiresIn: '1h' });
  res.cookie('session-cookie', token, { httpOnly: true, sameSite: true });
  res.send("Login Successful.");
  };