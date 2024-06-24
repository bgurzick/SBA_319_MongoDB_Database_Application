import express from ('express');
import mongoose from ('mongoose');
import dotenv from ('dotenv');
dotenv.config()
import todoRoutes from ('./routes/todos.mjs');

const PORT = process.env.PORT || 3000;
const app = express();


//API Routes
app.use