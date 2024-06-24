import express from 'express';
import Todo from '../db/models/todo.mjs';
const router = express.Router();

//get all the todos
router.get('/', async (req, res) => {
    try {
        const todos = await Todo.find();
        res.json(todos);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

//get one todo
router.get('/:id', getTodo, (req, res) =>{
    res.json(res.todo);
});

//make new todo
router.post('/', async (req, res) => {
    const todo = new Todo({
        title: req.body.title,
        description: req.body.description,
        category: req.body.category,
        status: req.body.status,
    });

    try {
        const newTodo = await todo.save();
        res.status(201).json(newTodo);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

//update a todo
router.put('/:id', getTodo, async (req, res) => {
    if (req.body.title != null) {
        res.todo.title = req.body.title;
    }
    if (req.body.description != null) {
        res.todo.description = req.body.description;
    }
    if (req.body.category != null) {
        res.todo.category = req.body.category;
    }
    if (req.body.status != null) {
        res.todo.status = req.body.status;
    }
    res.todo.updatedAt = Date.now();

    try {
        const updatedTodo = await res.todo.save();
        res.json(updatedTodo);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

//delete a todo
router.delete('/:id', getTodo, async (req, res) => {
    try {
        await res.todo.remove();
        res.json({ message: 'Todo has been DELETED!'});
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

//middleware function GET todo by ID
async function getTodo(req, res, next) {
    let todo;
    try {
        todo = await Todo.findById(req.params.id);
        if (task == null) {
            return res.status(404).json({ message: 'Todo NOT found, dude' });
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }

    res.todo = todo;
    next();
}

export default router;
