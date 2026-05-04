import mongoose from 'mongoose';

const leadSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
    maxlength: 100
  },
  phone: {
    type: String,
    required: [true, 'Phone is required'],
    trim: true,
    match: [/^\d{10}$/, 'Please enter a valid 10-digit phone number']
  },
  course: {
    type: String,
    required: [true, 'Course selection is required'],
    enum: ['Foundation (NEET/IIT-JEE/Olympiads)', 'Boards (CBSE/UP Board Class 6-12)', 'Spoken English', 'Competition (CHS/NTSE/Navodaya)']
  },
  message: {
    type: String,
    trim: true,
    maxlength: 500
  },
  status: {
    type: String,
    enum: ['new', 'contacted', 'enrolled'],
    default: 'new'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model('Lead', leadSchema);
