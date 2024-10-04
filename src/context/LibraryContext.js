import React, { createContext, useState } from 'react';

export const LibraryContext = createContext();

export const LibraryProvider = ({ children }) => {
  const [myLibrary, setMyLibrary] = useState([]);
  
  const addToLibrary = (book) => {
    setMyLibrary([...myLibrary, book]);
  };

  const removeFromLibrary = (id) => {
    setMyLibrary(myLibrary.filter(book => book.id !== id));
  };

  return (
    <LibraryContext.Provider value={{ myLibrary, addToLibrary, removeFromLibrary }}>
      {children}
    </LibraryContext.Provider>
  );
};
