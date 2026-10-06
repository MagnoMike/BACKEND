import * as bookmodel from '..moldels/bookmodels.js';

export const fetchAllBooks = async () => {
    const books = await bookmodel.fetch();
    return books;
};