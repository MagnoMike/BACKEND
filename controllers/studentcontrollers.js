import * as studentservices from '../services/studentservices.js';

export const fetchAllStudents = async(req, res) => {
    try {
        const students = await studentservices.fetchAllStudents();

        res.status(200).json(students);
    } catch (e) {
        console.log(e);
        res.status(500).json({
            error: 'Internal Server Error'
        });
    }
};

export const createStudent = async(req, res) => {
    try {
        const { name, course, year_level } = req.body;

        if (!name ||
            !course ||
            year_level === undefined ||
            year_level === null ||
            year_level === ''
        ) {
            return res.status(400).json({
                error: 'Name, course, and year level are required'
            });
        }

        const studentId = await studentservices.createStudent({
            name,
            course,
            year_level
        });

        res.status(201).json({
            success: true,
            message: 'Student created successfully',
            id: studentId
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            error: 'Internal Server Error'
        });
    }
};

// UPDATE STUDENT
export const updateStudent = async(req, res) => {
    try {
        const { id } = req.params;
        const { name, course, year_level } = req.body;

        if (!name ||
            !course ||
            year_level === undefined ||
            year_level === null ||
            year_level === ''
        ) {
            return res.status(400).json({
                error: 'Name, course, and year level are required'
            });
        }

        const affectedRows = await studentservices.updateStudent(
            id, { name, course, year_level }
        );

        if (affectedRows === 0) {
            return res.status(404).json({
                error: 'Student not found'
            });
        }

        res.status(200).json({
            success: true,
            message: 'Student updated successfully'
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            error: 'Internal Server Error'
        });
    }
};

// DELETE STUDENT
export const deleteStudent = async(req, res) => {
    try {
        const { id } = req.params;

        const affectedRows = await studentservices.deleteStudent(id);

        if (affectedRows === 0) {
            return res.status(404).json({
                error: 'Student not found'
            });
        }

        res.status(200).json({
            success: true,
            message: 'Student deleted successfully'
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            error: 'Internal Server Error'
        });
    }
};