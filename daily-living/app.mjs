import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import todoRoutes from './routes/todos.mjs';

dotenv.config();

mongoose.connect(process.env.ATLAS_URI)
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());


//API Routes
app.use (express.json())
//here
app.use('/todos', todoRouter)

app.get('/',(req, res) =>{
    res.send('Daily Living')
})
app.listen(PORT, ()=> console.log(`Server is running on port: ${PORT}`))