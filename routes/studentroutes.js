import * as studentcontrollers from '../controllers/studentcontrollers.js';
import express from 'express';

const studentroutes = express.Router();

studentroutes.get('/all', studentcontrollers.fetchAllStudents);
studentroutes.post('/', studentcontrollers.createstudent);
studentroutes.put('/:id', studentcontrollers.editstudent);
studentroutes.delete('/:id', studentcontrollers.deletestudent);

export default studentroutes;