import pool from '../config/db.js';

export const fetch = async() => {
    const [rows] = await pool.query('SELECT * FROM student');
    return rows;
};

export const insert = async(student) => {
    const [result] = await pool.query(
        'INSERT INTO student (name, course) VALUES (?, ?)', [student.name, student.course]
    );

    return result.insertId;
};

export const update = async(student) => {
    const [result] = await pool.query(
        'UPDATE student SET name = ?, course = ? WHERE id = ?', [student.name, student.course, student.id]
    );

    return result.affectedRows;
};

export const remove = async(id) => {
    const [result] = await pool.query(
        'DELETE FROM student WHERE id = ?', [id]
    );

    return result.affectedRows;
};