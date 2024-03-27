const Admin = require('../models/AdminModel');

// Create a new admin
exports.createAdmin = async (req, res) => {
    try {
        const { name, surname, password, email, restaurantName } = req.body;
        const admin = new Admin({ name, surname, password, email, restaurantName });
        await admin.save();
        res.status(201).json(admin);
    } catch (error) {
        console.error('Error creating admin:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Get all admins
exports.getAllAdmins = async (req, res) => {
    try {
        const admins = await Admin.find();
        res.status(200).json(admins);
    } catch (error) {
        console.error('Error getting admins:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Get admin by ID
exports.getAdminById = async (req, res) => {
    try {
        const admin = await Admin.findById(req.params.id);
        if (!admin) {
            return res.status(404).json({ error: 'Admin not found' });
        }
        res.status(200).json(admin);
    } catch (error) {
        console.error('Error getting admin by ID:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Update admin by ID
exports.updateAdminById = async (req, res) => {
    try {
        const admin = await Admin.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!admin) {
            return res.status(404).json({ error: 'Admin not found' });
        }
        res.status(200).json(admin);
    } catch (error) {
        console.error('Error updating admin by ID:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Delete admin by ID
exports.deleteAdminById = async (req, res) => {
    try {
        const admin = await Admin.findByIdAndDelete(req.params.id);
        if (!admin) {
            return res.status(404).json({ error: 'Admin not found' });
        }
        res.status(200).json({ message: 'Admin deleted successfully' });
    } catch (error) {
        console.error('Error deleting admin by ID:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
