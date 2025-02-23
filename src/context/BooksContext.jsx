
import React, { createContext, useState, useMemo } from 'react';
import api from '../services/api';

export const BooksContext = createContext();

export const BooksProvider = ({ children }) => {
  const [genreBooks, setGenreBooks] = useState({});

  const getBooksForGenre = async (genre) => {
    // If we already have data and there's no error, return it.
    if (genreBooks[genre] && !genreBooks[genre].error) {
      return genreBooks[genre];
    }
    // Set the loading state for this genre.
    setGenreBooks(prev => ({
      ...prev,
      [genre]: { books: [], nextUrl: null, error: null, loading: true }
    }));
    try {
      const params = { topic: genre, mime_type: 'image/' };
      const response = await api.getBooks(null, params);
      const sortedBooks = response.data.results.sort((a, b) =>
        a.title.localeCompare(b.title)
      );
      const data = {
        books: sortedBooks,
        nextUrl: response.data.next,
        error: null,
        loading: false,
      };
      setGenreBooks(prev => ({
        ...prev,
        [genre]: data,
      }));
      return data;
    } catch (error) {
      setGenreBooks(prev => ({
        ...prev,
        [genre]: {
          books: [],
          nextUrl: null,
          error: 'Failed to fetch books',
          loading: false,
        }
      }));
      throw error;
    }
  };

  const contextValue = useMemo(() => ({
    genreBooks,
    getBooksForGenre,
  }), [genreBooks]);

  return (
    <BooksContext.Provider value={contextValue}>
      {children}
    </BooksContext.Provider>
  );
};
