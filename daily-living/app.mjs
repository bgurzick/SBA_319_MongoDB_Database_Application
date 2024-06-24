import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import todoRoutes from './routes/todos.mjs';

dotenv.config();


const app = express();
const PORT = process.env.PORT || 3000;

// app.use(cors());


//API Routes
app.use (express.json())
app.use('/todos', todoRoutes);

app.get('/',(req, res) =>{
    res.send('Daily Living')
})


mongoose.connect(process.env.ATLAS_URI)

app.listen(PORT, ()=> console.log(`Server is running on port: ${PORT}`))
