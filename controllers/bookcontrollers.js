import * as bookservices from '../services/bookservices.js';

export const fetchAllBooks = async (req, res) => {
    const books = await bookservices.fetchAllBooks();
    res.status(200).json(books);
};