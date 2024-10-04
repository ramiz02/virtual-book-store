import React from 'react';
import BookCard from './BookCard';
import styled from 'styled-components';

const BookListCont = styled.div`
  display:flex;
  justify-content:center;
  flex-wrap:wrap;
`

const BookList = ({ books }) => {
  return (
    <BookListCont>
      {books.map(book => (
        <BookCard key={book.id} book={book} />
      ))}
    </BookListCont>
  );
};

export default BookList;
