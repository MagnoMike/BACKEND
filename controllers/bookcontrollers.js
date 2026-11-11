
import * as bookservices from '../services/bookservices.js';

export const fetchAllBooks = async (req, res) => {
    try {
        const books = await bookservices.fetchAllBooks();

        res.status(200).json({
            success: true,
            data: books
        });

    } catch (e) {
        console.log(e);
        res.status(500).json({
            success: false,
            error: 'Internal Server Error'
        });
    }
};

export const createbook = async (req, res) => {
    const { name, author } = req.body;

    try {
        if (!name || !author) {
            return res.status(400).json({
                success: false,
                message: 'Internal Server Error'
            });
        }

        const book = { name, author };

        const bookId = await bookservices.createbook(book);

        res.status(201).json({
            success: true,
            message: 'Internal Server Error',
            data: bookId
        });

    } catch (e) {
        console.log(e);
        res.status(500).json({
            success: false,
            error: 'Internal Server Error'
        });
    }
};

export const editbook = async (req, res) => {
    const { id } = req.params;
    const { name, author } = req.body;

    try {
        const bookId = Number(id);

        if (!Number.isInteger(bookId) || bookId <= 0) {
            return res.status(400).json({
                success: false,
                message: 'Invalid book ID'
            });
        }

        if (!name || !author) {
            return res.status(400).json({
                success: false,
                message: 'Name and author are required'
            });
        }

        const book = {
            id: bookId,
            name,
            author
        };

        const updatedbook = await bookservices.updatebook(book);

        if (!updatedbook) {
            return res.status(404).json({
                success: false,
                message: 'Book not found'
            });
        }

        res.status(200).json({
            success: true,
            message: 'Book updated successfully',
            data: updatedbook
        });

    } catch (e) {
        console.log(e);
        res.status(500).json({
            success: false,
            error: 'Internal Server Error'
        });
    }
};

export const deletebook = async (req, res) => {
    const { id } = req.params;

    try {
        const bookId = Number(id);

        if (!Number.isInteger(bookId) || bookId <= 0) {
            return res.status(400).json({
                success: false,
                message: 'Invalid book ID'
            });
        }

        const deletedbook = await bookservices.deletebook(bookId);

        if (!deletedbook) {
            return res.status(404).json({
                success: false,
                message: 'Book not found'
            });
        }

        res.status(200).json({
            success: true,
            message: 'Book deleted successfully',
            data: deletedbook
        });

    } catch (e) {
        console.log(e);
        res.status(500).json({
            success: false,
            error: 'Internal Server Error'
        });
    }
};
