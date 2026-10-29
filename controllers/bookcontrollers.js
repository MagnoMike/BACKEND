import * as bookservices from '../services/bookservices.js';

export const fetchAllBooks = async(req, res) => {
    try {
        const books = await bookservices.fetchAllBooks();
        res.status(200).json(books);
    } catch (e) {
        console.log(e);
        res.status(500).json({
            error: 'Internal Server Error'
        });
    }
};

export const createbook = async(req, res) => {
    try {
        const { name, author } = req.body;
        const book = { name, author };

        const bookId = await bookservices.createbook(book);

        res.status(201).json({
            success: true,
            message: 'Book created successfully',
            bookId: bookId
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            error: 'Internal Server Error'
        });
    }
};

// UPDATE BOOK
export const updatebook = async(req, res) => {
    try {
        const { id } = req.params;
        const { name, author } = req.body;

        const book = { name, author };
        const result = await bookservices.updatebook(id, book);

        if (result === 0) {
            return res.status(404).json({
                success: false,
                message: 'Book not found'
            });
        }

        res.status(200).json({
            success: true,
            message: 'Book updated successfully'
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            error: 'Internal Server Error'
        });
    }
};

// DELETE BOOK
export const deletebook = async(req, res) => {
    try {
        const { id } = req.params;

        const result = await bookservices.deletebook(id);

        if (result === 0) {
            return res.status(404).json({
                success: false,
                message: 'Book not found'
            });
        }

        res.status(200).json({
            success: true,
            message: 'Book deleted successfully'
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            error: 'Internal Server Error'
        });
    }
};