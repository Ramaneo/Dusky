const bcrypt = require('bcrypt');
const User = require('../models/UserModel');
const DiscountCode = require('../models/DiscountCodeModel');
const jwt = require('jsonwebtoken');
const JWT_SECRET = '0315926927202137F13A3BBC32C7801CD2C98BF9BFF8A288307B5C60EE570257'; 
const saltRounds = 10;

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


// UserController içindeki diğer import ve exports ifadeleriyle birlikte


exports.getUsers = async (req, res) => {
    try {
        const users = await User.find({}); // Tüm kullanıcıları çek
        res.status(200).json(users);
    } catch (error) {
        console.log(error);
        res.status(500).send("Failed to fetch users.");
    }
};

exports.generateDiscountCode = async (req, res) => {
  const user = req.body.user; // Kullanıcı ID'si
  const discountPercent = Math.min(req.body.followers * 0.1, 50); //max %50 DİSCOUNT
  const code = Math.random().toString(36).substring(2, 8).toUpperCase(); // Random code

  try {
    const newDiscountCode = new DiscountCode({
      user,
      code,
      discountPercent
    });
    await newDiscountCode.save();
    res.status(201).json({ message: 'Discount code generated successfully', code, discountPercent });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error generating discount code');
  }
};

exports.updateFollowers = async (req, res) => {
  try {
    const userId = req.body.userId;
    console.log("UserID:", req.body.userId);

    const followers = req.body.followers; // Follower count from frontend

    
    const user = await User.findByIdAndUpdate(userId, { followers }, { new: true });

    // Yeni indirim yüzdesini hesapla
    const discountPercent = Math.min(followers * 0.1, 50); 
    const code = Math.random().toString(36).substring(2, 8).toUpperCase(); // Rastgele kod

    // Eski indirim kodunu kontrol et ve güncelle ya da yeni oluştur
    let discountCode = await DiscountCode.findOne({ user: userId });
    if (discountCode) {
      discountCode.code = code;
      discountCode.discountPercent = discountPercent;
      await discountCode.save();
    } else {
      discountCode = new DiscountCode({
        user: userId,
        code,
        discountPercent
      });
      await discountCode.save();
    }

    res.status(200).json({ message: 'Followers and discount code updated successfully', discountCode });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error updating followers or generating discount code');
  }
};

exports.followUser = async (req, res) => {

}

exports.unfollowUser = async (req, res) => {
  
}

exports.subscribeStore = async (req, res) => {

}

exports.unsubscribeStore = async (req, res) => {
  
}