"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getFromLocalStorage = exports.addToLocalStorage = void 0;

var _index = require("./index.js");

//  eslint-disable-next-line import/no-cycle
var addToLocalStorage = function addToLocalStorage(books) {
  window.localStorage.setItem('books', JSON.stringify(books));
};

exports.addToLocalStorage = addToLocalStorage;

var getFromLocalStorage = function getFromLocalStorage() {
  if (localStorage.length !== 0) {
    var booksFromLocStg = JSON.parse(window.localStorage.getItem('books'));
    booksFromLocStg.bookList.forEach(function (book) {
      _index.books.bookList.push(book);
    });
    (0, _index.updateDomAndLocalStorage)();
    (0, _index.removeBook)();
  }
};

exports.getFromLocalStorage = getFromLocalStorage;