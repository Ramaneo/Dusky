const express = require('express');
const router = express.Router();

// UserController'dan tüm gerekli fonksiyonları import edin
const { register, login, getUsers, generateDiscountCode, updateFollowers, followUser, unfollowUser, subscribeStore, unsubscribeStore} = require('../controllers/UserController');

router.post('/login', login);
router.post('/register', register);
router.get('/users', getUsers);
// Doğru şekilde fonksiyonları kullanın
router.post('/generate-discount-code', generateDiscountCode);
router.post('/update-followers', updateFollowers);
router.post('/follow_user', followUser);
router.post('/unfollow_user', unfollowUser);
router.post('/subscribe_store', subscribeStore);
router.post('/unsubscribe_store', unsubscribeStore);

module.exports = router;
