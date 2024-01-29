const express = require('express');
const router = express.Router();
const {User} = require ('../controllers/UserController')

router.post('/login', User);

module.exports = router;