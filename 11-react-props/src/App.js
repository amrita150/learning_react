import React from 'react';
import Book from './components/Book';
import './App.css';

// function App() {
//   return (
//     <div className="book-list">
//       <h1>Book List</h1>
//       <Book title="The Great Gatsby" author="F. Scott Fitzgerald" year="1925" />
//       <Book title="To Kill a Mockingbird" author="Harper Lee" year="1960" />
//       <Book title="1984" author="George Orwell" year="1949" />
//     </div>
//   );
// }


//we can also do this
// Define an array of book objects
const books = [
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: "1925"
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: "1960"
  },
  {
    title: "1984",
    author: "George Orwell",
    year: "1949"
  }
];

function App() {
  return (
    <div className="book-list">
      <h1>Book List</h1>
      <Book
        title={books[0].title}
        author={books[0].author}
        year={books[0].year}
      />
      <Book
        title={books[1].title}
        author={books[1].author}
        year={books[1].year}
      />
      <Book
        title={books[2].title}
        author={books[2].author}
        year={books[2].year}
      />
    </div>
  );
}


export default App;