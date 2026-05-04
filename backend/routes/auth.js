import express from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import mongoose from 'mongoose';
import Admin from '../models/Admin.js';

const router = express.Router();

// Seed admin on first run
const seedAdmin = async () => {
  if (mongoose.connection.readyState !== 1) return;
  
  const existing = await Admin.findOne({ username: process.env.ADMIN_USERNAME });
  if (!existing) {
    const hashed = await bcrypt.hash(process.env.ADMIN_PASSWORD, 12);
    await Admin.create({ username: process.env.ADMIN_USERNAME, password: hashed });
    console.log('✅ Admin seeded');
  }
};
seedAdmin().catch(console.error);

router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return res.status(400).json({ message: 'Username and password required' });
    }

    let admin = null;
    if (mongoose.connection.readyState === 1) {
      admin = await Admin.findOne({ username });
    }
    
    // Resilient login: Check .env if DB record is missing or DB is down
    const envAdmin = process.env.ADMIN_USERNAME || 'admin';
    const envPass = process.env.ADMIN_PASSWORD || 'admin123';

    let isMatch = false;
    let userId = null;

    if (admin) {
      isMatch = await bcrypt.compare(password, admin.password);
      userId = admin._id;
    } else if (username === envAdmin && password === envPass) {
      // Allow login with .env credentials even if not in DB yet
      isMatch = true;
      userId = 'env-admin'; 
    }

    if (!isMatch) return res.status(401).json({ message: 'Invalid credentials' });

    const token = jwt.sign(
      { id: userId, username: username },
      process.env.JWT_SECRET,
      { expiresIn: '7d' }
    );

    res.json({ token, username: username });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

export default router;
