import express from 'express';
import bookroutes from './routes/bookroutes.js';
import studentroutes from './routes/studentroutes.js';

const app = express();

app.use(express.json());

app.use('/book', bookroutes);
app.use('/student', studentroutes);

const port = 3000;

app.listen(port, () => {
    console.log(`Listening to port ${port}...`);
});