const express = require('express');
const router = express.Router();
const {createAdmin, getAllAdmins, getAdminById, updateAdminById,deleteAdminById} = require ('../controllers/AdminController');

router.post('/admins', createAdmin);
router.get('/admins', getAllAdmins);
router.get('/admins/:id', getAdminById);
router.put('/admins/:id', updateAdminByIdpdateAdminById);
router.delete('/admins/:id', deleteAdminById);

module.exports = router;
