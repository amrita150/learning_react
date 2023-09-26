import React from 'react';
import './Book.css';

// The Book component receives props from its parent (BookList)
function Book(props) {
    return (
      <div className="book">
        <h2 className="book-title">{props.title}</h2>
        <p className="book-author">Author: {props.author}</p>
        <p className="book-year">Year: {props.year}</p>
      </div>
    );
  }

export default Book;
