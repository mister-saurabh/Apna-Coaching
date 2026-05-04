import express from 'express';
import mongoose from 'mongoose';
import Lead from '../models/Lead.js';
import { protect } from '../middleware/auth.js';

const router = express.Router();

// POST /api/leads - Public: Submit a lead
router.post('/', async (req, res) => {
  try {
    const { name, phone, course, message } = req.body;
    
    if (mongoose.connection.readyState !== 1) {
      return res.status(503).json({ success: false, message: 'Database temporarily unavailable. Please try again later.' });
    }

    const lead = await Lead.create({ name, phone, course, message });
    res.status(201).json({ success: true, message: 'Lead submitted successfully!', lead });
  } catch (err) {
    if (err.name === 'ValidationError') {
      const errors = Object.values(err.errors).map(e => e.message);
      return res.status(400).json({ success: false, message: errors[0] });
    }
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

// GET /api/leads - Admin: Get all leads
router.get('/', protect, async (req, res) => {
  try {
    if (mongoose.connection.readyState !== 1) {
      return res.json({ success: true, leads: [], count: 0, message: 'Database offline' });
    }
    const leads = await Lead.find().sort({ createdAt: -1 });
    res.json({ success: true, leads, count: leads.length });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

// PATCH /api/leads/:id - Admin: Update status
router.patch('/:id', protect, async (req, res) => {
  try {
    const { status } = req.body;
    const lead = await Lead.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true, runValidators: true }
    );
    if (!lead) return res.status(404).json({ message: 'Lead not found' });
    res.json({ success: true, lead });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

// DELETE /api/leads/:id - Admin: Delete lead
router.delete('/:id', protect, async (req, res) => {
  try {
    const lead = await Lead.findByIdAndDelete(req.params.id);
    if (!lead) return res.status(404).json({ message: 'Lead not found' });
    res.json({ success: true, message: 'Lead deleted' });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

export default router;
