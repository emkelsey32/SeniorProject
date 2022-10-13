import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import 'dotenv/config.js';
import userRoutes from './routes/users.js';
import eventRoutes from './routes/events.js';
import * as path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const app = express();
app.use(cors());

app.use("*", async (req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:4200")
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS")
    res.setHeader("Access-Control-Allow-Headers", "Origin, Accept, Content-Type, Authorization")
    res.setHeader("Access-Control-Allow-Credentials", true)
    next();
});

// --- Middlewares ---

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'build')));
app.use('/users', userRoutes);
app.use('/events', eventRoutes);


// --- Routes ---

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

//app.get('/', (req, res) => {
//    res.json({message: 'API Home'});
//});

// --- Connect to MongoDB ---
mongoose.connect(`mongodb+srv://ekelsey:12345@cluster0.nkrnevo.mongodb.net/?retryWrites=true&w=majority`, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }, () => {
    console.log('Database connection status: ', (mongoose.connection.readyState ? "Connected!" : "Something went wrong..."));
});

// --- Listen On Port 3001 ---

app.listen(process.env.PORT || 3000);
