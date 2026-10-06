import express from 'express';
import bookroutes from '../routes/bookroutes.js';

const app = express();

app.use('/book', bookroutes);

try {
    const port = 3000;
    app.listen(port, () => {
        console.log(`listening to port ${port}...`);
    })
}catch(e) {
    console.log(e);
}