import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema({
    title: { 
        type: String, 
        required: true 
    },
    description: {
        type: String
    },
    category: { 
        type: String, 
        enum: ['appointments', 'chores', 'exercises', 'hobby'], 
        required: true 
    },
    status: { 
        type: String, 
        enum: ['pending', 'in progress', 'completed'], 
        default: 'pending' 
    },
    createdAt: { 
        type: Date, 
        default: Date.now 
    },
    updatedAt: { 
        type: Date, default: Date.now 
    },
});

//index
todoSchema.index({ category: 1 });

//validation
todoSchema.path('title').validate(function (value) {
    return value.length <= 60;
}, 'Come on, what daily task is more than 60 characters?')


export default mongoose.model('To-do', todoSchema);

export default Todo;

