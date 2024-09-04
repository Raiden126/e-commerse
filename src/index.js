import dotenv from 'dotenv';
import connectDB from './db/index.js';
import { app } from './app.js';

dotenv.config({
    path: "./.env"
})

const port = process.env.PORT || 5002

connectDB()
.then(() => {
    app.listen(port, () => {
        console.log(`server running on port ${port}`);
    })
})
.catch(error => {
    console.log('mongodb connection failed', error);
})
