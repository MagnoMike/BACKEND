import * as bookmodel from '../models/bookmodels.js';

export const fetchAllBooks = async() => {
    const books = await bookmodel.fetch();
    return books;
};

export const createbook = async(book) => {
    const bookId = await bookmodel.insert(book);
    return bookId;
};

// UPDATE BOOK
export const updatebook = async(id, book) => {
    const result = await bookmodel.update(id, book);
    return result;
};

// DELETE BOOK
export const deletebook = async(id) => {
    const result = await bookmodel.remove(id);
    return result;
};