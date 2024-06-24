import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: String,
    category: { type: String, enum: ['appointments', 'chores', 'exercises', 'hobby'], required: true },
    status: { type: String, enum: ['pending', 'in progress', 'completed'], default: 'pending' },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('To-do', todoSchema);

