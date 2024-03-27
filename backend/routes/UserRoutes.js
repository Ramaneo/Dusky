const express = require('express');
const router = express.Router();

// UserController'dan tüm gerekli fonksiyonları import edin
const { register, login, getUsers, generateDiscountCode, updateFollowers } = require('../controllers/UserController');

router.post('/login', login);
router.post('/register', register);
router.get('/users', getUsers);
// Doğru şekilde fonksiyonları kullanın
router.post('/generate-discount-code', generateDiscountCode);
router.post('/update-followers', updateFollowers);

module.exports = router;
