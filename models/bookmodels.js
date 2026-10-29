import pool from '../config/db.js';

export const fetch = async() => {
    const [rows] = await pool.query('SELECT * FROM books');
    return rows;
};

export const insert = async(book) => {
    const [result] = await pool.query(
        'INSERT INTO books (name, author) VALUES (?, ?)', [book.name, book.author]
    );

    return result.insertId;
};

// UPDATE BOOK
export const update = async(id, book) => {
    const [result] = await pool.query(
        'UPDATE books SET name = ?, author = ? WHERE id = ?', [book.name, book.author, id]
    );

    return result.affectedRows;
};

// DELETE BOOK
export const remove = async(id) => {
    const [result] = await pool.query(
        'DELETE FROM books WHERE id = ?', [id]
    );

    return result.affectedRows;
};