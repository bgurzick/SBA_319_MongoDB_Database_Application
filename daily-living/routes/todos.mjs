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
})







export default router;
