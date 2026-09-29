import * as bookmodel from '../models/bookmodel.js';

export const fetchAllBooks = async () => {
    const books = await bookmodel.fetch();
    return books;
};