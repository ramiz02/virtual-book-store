import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/cartList'
import HomePage from './pages/HomePage';
import BookDetailsPage from './pages/BookDetailsPage';
import MyLibraryPage from './pages/MyLibraryPage';
import { LibraryProvider } from './context/LibraryContext';

const App = () => {
  return (
    <LibraryProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/book/:id" element={<BookDetailsPage />} />
          <Route path="/my-library" element={<MyLibraryPage />} />
        </Routes>
      </Router>
    </LibraryProvider>
  );
};

export default App;
