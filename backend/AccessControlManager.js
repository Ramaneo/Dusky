const User = require('./models/UserModel');

//  For any get function, it will return 0 if failed.
//  For any modify function, it will return 1 if succesfull.

async function checkPermission(userName, role) {
    const user = await User.findOne({ username: userName });
    if (user) {
        if (user.user_type == role) {
            return 1;
        }
        else {
            return 0;
        }
    }
    else {
        return 0;
    } 
}

async function assignRole(userName, role) {
    //  What's the difference between assignRole and modifyRole?
}

async function modifyRole(userName, role) {
    const user = await User.findOne({ username: userName });
    if (user) {
        user.user_type = role;
        await user.save();
        return 1;
    }
    return 0;
}

async function getRole(userName) {
    const user = await User.findOne({ username: userName });
    if (user) {
        return user.user_type;
    }
    else {
        return 0;
    } 
}