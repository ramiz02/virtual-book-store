import React, { useState } from 'react';
import styled from 'styled-components';

const SearchBarCont = styled.div`
  display:flex;
  justify-content:center;
  margin-bottom:2rem;
`

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <SearchBarCont>
        <input style={{height:'2rem', width:'20rem' ,textAlign:'center'}}
      type="text" 
      placeholder="Search by title, author, or genre..." 
      value={searchTerm}
      onChange={handleSearch}
    />
    </SearchBarCont>
    
  );
};

export default SearchBar;
