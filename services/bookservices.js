import * as bookmodel from '../models/bookmodels.js';

export const fetchAllBooks = async() => {
    const books = await bookmodel.fetch();
    return books;
};

export const createbook = async(book) => {
    const bookId = await bookmodel.insert(book);
    return bookId;
};

export const update = async(book) => {
    const updatebook = await bookmodel.update(book);
    return updatebook.affectedRows;
};

export const deletebook = async(id) => {
    const deletedbook = await bookmodel.remove(id);
    return deletedbook;
};