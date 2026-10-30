import * as studentservices from '../services/studentservices.js';

export const fetchAllStudents = async(req, res) => {
    const students = await studentservices.fetchAllStudents();
    res.status(200).json(students);
};

export const createstudent = async(req, res) => {
    const { name, course } = req.body;
    const student = { name, course };

    try {
        const studentId = await studentservices.createstudent(student);
        res.status(201).json({
            success: true,
            message: studentId
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            error: 'Internal Server Error'
        });
    }
};

export const editstudent = async(req, res) => {
    const { name, course } = req.body;
    const { id } = req.params;
    const student = { id: parseInt(id), name, course };

    try {
        const updatedstudent = await studentservices.updatestudent(student);
        res.status(200).json({
            success: true,
            message: updatedstudent
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            error: 'Internal Server Error'
        });
    }
};

export const deletestudent = async(req, res) => {
    const { id } = req.params;

    try {
        const deletedstudent = await studentservices.deletestudent(parseInt(id));
        res.status(200).json({
            success: true,
            message: deletedstudent
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            error: 'Internal Server Error'
        });
    }
};