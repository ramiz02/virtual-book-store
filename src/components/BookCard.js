import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const BookImage = styled.img`
  height:300px;
  width:300px;
`

const BookCard = ({ book }) => {
  return (
    <div className="book-card">
      <BookImage src={book.imgUrl} alt={book.title}/>
      <h3>{book.title}</h3>
      <p>Author: {book.author}</p>
      <p>Genre: {book.genre}</p>
      <p>Rating: {book.rating}</p>
      <Link to={`/book/${book.id}`}>View Details</Link>
    </div>
  );
};

export default BookCard;
