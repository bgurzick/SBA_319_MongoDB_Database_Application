import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
dotenv.config();
import mongoose from 'mongoose';

const client = new MongoClient (process.env.ATLAS_URI);

let conn;
