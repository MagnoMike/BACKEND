import * as bookcontrollers from '../controllers/bookcontrollers.js';
import express from 'express';

const bookroutes = express.Router();

bookroutes.get('/all', bookcontrollers.fetchAllBooks);
bookroutes.post('/', bookcontrollers.createbook);
bookroutes.put('/:id', bookcontrollers.editbook);
bookroutes.delete('/:id', bookcontrollers.deletebook);

export default bookroutes;