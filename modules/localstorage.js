//  eslint-disable-next-line import/no-cycle
import { updateDomAndLocalStorage, removeBook, books } from './index.js';

export const addToLocalStorage = (books) => {
  window.localStorage.setItem('books', JSON.stringify(books));
};

export const getFromLocalStorage = () => {
  if (localStorage.length !== 0) {
    const booksFromLocStg = JSON.parse(window.localStorage.getItem('books'));
    booksFromLocStg.bookList.forEach((book) => {
      books.bookList.push(book);
    });
    updateDomAndLocalStorage();
    removeBook();
  }
};
