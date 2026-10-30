import * as studentmodel from '../models/studentmodels.js';

export const fetchAllStudents = async() => {
    const students = await studentmodel.fetch();
    return students;
};

export const createstudent = async(student) => {
    const studentId = await studentmodel.insert(student);
    return studentId;
};

export const updatestudent = async(student) => {
    const updatedstudent = await studentmodel.update(student);
    return updatedstudent;
};

export const deletestudent = async(id) => {
    const deletedstudent = await studentmodel.remove(id);
    return deletedstudent;
};