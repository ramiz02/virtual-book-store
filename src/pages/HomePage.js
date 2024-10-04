import React, { useState } from 'react';
import { booksData } from '../services/booksData';
import BookList from '../components/BookList';
import SearchBar from '../components/SearchBar';
import Cart from '../components/cartList';
import styled from 'styled-components';

const MainContainer = styled.div`
  background-image: linear-gradient(#9ace44, #6ddb50, #36efb3, #36b5ef, #8c4ce7, #e74ce1, #f75f93);
  justify-content:center;
  height:100vh;
  width: 100vw;
`


const HeadCartCont = styled.div`
  display: flex;
  justify-content: space-between;
`

const HomePage = () => {
  const [filteredBooks, setFilteredBooks] = useState(booksData);

  const handleSearch = (searchTerm) => {
    const searchResults = booksData.filter(book =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.genre.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredBooks(searchResults);
  };

  return (
    <MainContainer>
      <HeadCartCont>
      <h1>Book Library</h1>
        <Cart/>
      </HeadCartCont>
      
      <SearchBar onSearch={handleSearch}/>
      <div style={{flexWrap:'wrap'}}>
          <BookList books={filteredBooks} />
      </div>
    </MainContainer>
  );
};

export default HomePage;
