import express from 'express';
import * as studentcontrollers from '../controllers/studentcontrollers.js';

const studentroutes = express.Router();

studentroutes.get('/', studentcontrollers.fetchAllStudents);
studentroutes.post('/', studentcontrollers.createStudent);
studentroutes.put('/:id', studentcontrollers.updateStudent);
studentroutes.delete('/:id', studentcontrollers.deleteStudent);

export default studentroutes;