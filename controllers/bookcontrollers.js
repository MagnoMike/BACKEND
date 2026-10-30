import * as bookservices from '../services/bookservices.js';

export const fetchAllBooks = async(req, res) => {
    const books = await bookservices.fetchAllBooks();
    res.status(200).json(books);
}
export const createbook = async(req, res) => {
    console.log(req);
    const { name, author } = req.body;
    const book = { name, author };

    try {
        const bookId = await bookservices.createbook(book);
        res.status(201).json({
            success: true,
            message: bookId
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            error: 'Internal Server Error'
        });
    }
};
export const editbook = async(req, res) => {
    const { name, author } = req.body;
    const { id } = req.params;
    const book = { id: parseInt(id), name, author };

    try {
        const updatedbook = await bookservices.updatebook(book);
        res.status(200).json({
            success: true,
            message: updatedbook
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            error: 'Internal Server Error'
        });
    }
};
export const deletebook = async(req, res) => {
    const { id } = req.params;

    try {
        const deletedbook = await bookservices.deletebook(parseInt(id));
        res.status(200).json({
            success: true,
            message: deletedbook
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            error: 'Internal Server Error'
        });
    }
};