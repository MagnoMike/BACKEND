import * as bookcontrollers from '../controllers/bookcontrollers.js';
import express from 'express';

const bookroutes = express.Router();

bookroutes.get('/', bookcontrollers.fetchAllBooks);
bookroutes.post('/', bookcontrollers.createbook);

// UPDATE
bookroutes.put('/:id', bookcontrollers.updatebook);

// DELETE
bookroutes.delete('/:id', bookcontrollers.deletebook);

export default bookroutes;