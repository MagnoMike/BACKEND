import * as studentmodel from '../models/studentmodels.js';

export const fetchAllStudents = async() => {
    return await studentmodel.fetch();
};

export const createStudent = async(student) => {
    return await studentmodel.insert(student);
};

export const updateStudent = async(id, student) => {
    return await studentmodel.update(id, student);
};

export const deleteStudent = async(id) => {
    return await studentmodel.remove(id);
};