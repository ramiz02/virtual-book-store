import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { booksData } from '../services/booksData';
import { LibraryContext } from '../context/LibraryContext';
import styled from "styled-components";
import Cart from '../components/cartList';

const Container = styled.div`
  background-image: linear-gradient(#9ace44, #6ddb50, #36efb3, #36b5ef, #8c4ce7, #e74ce1, #f75f93);
  height:100%;
  width:100vw;
  display:flex;
  justify-content:center;
`
const ImageTag = styled.img`
  height:500px;
  width:50%;
  margin-right:10px;
`


const BookDetailsPage = () => {
  const { id } = useParams();
  const { addToLibrary } = useContext(LibraryContext);
  const book = booksData.find(b => b.id === parseInt(id));

  return (
    <>
    <navbar><Cart/></navbar>
    
    <Container>
      <ImageTag src={book.imgUrl} alt={book.title}/>
      <div>
        <h2>{book.title}</h2>
        <p>Author: {book.author}</p>
        <p>Genre: {book.genre}</p>
        <p>Rating: {book.rating}</p>
        <p>Description: {book.description}</p>
        <p>Publication Year: {book.publication_year}</p>
        <button onClick={() => addToLibrary(book)}>Add to My Library</button>
      </div>
    </Container>
    </>
  );
};

export default BookDetailsPage;
