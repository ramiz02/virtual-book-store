import React, { useContext } from 'react';
import { LibraryContext } from '../context/LibraryContext';
import BookList from '../components/BookList';

const MyLibraryPage = () => {
  const { myLibrary, removeFromLibrary } = useContext(LibraryContext);

  return (
    <div>
      <h1>My Library</h1>
      {myLibrary.length === 0 ? (
        <p>No books added to the library yet.</p>
      ) : (
        myLibrary.map(book => (
          <div key={book.id}>
            <h3>{book.title}</h3>
            <button onClick={() => removeFromLibrary(book.id)}>Remove</button>
          </div>
        ))
      )}
    </div>
  );
};

export default MyLibraryPage;
