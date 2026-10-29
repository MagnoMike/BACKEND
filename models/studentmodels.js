import pool from '../config/db.js';

export const fetch = async() => {
    const [rows] = await pool.query(
        'SELECT * FROM students'
    );
    return rows;
};

export const insert = async(student) => {
    const [result] = await pool.query(
        `INSERT INTO students (name, course, year_level)
         VALUES (?, ?, ?)`, [student.name, student.course, student.year_level]
    );

    return result.insertId;
};

export const update = async(id, student) => {
    const [result] = await pool.query(
        `UPDATE students
         SET name = ?, course = ?, year_level = ?
         WHERE id = ?`, [student.name, student.course, student.year_level, id]
    );

    return result.affectedRows;
};

export const remove = async(id) => {
    const [result] = await pool.query(
        'DELETE FROM students WHERE id = ?', [id]
    );

    return result.affectedRows;
};