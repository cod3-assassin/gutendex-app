
import React, { useEffect, useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { BooksContext } from '../context/BooksContext';
import BackIcon from "../assets/Back.svg";
import SearchIcon from "../assets/Search.svg";
import ClearIcon from "../assets/Cancel.svg";
import BookList from '../components/BookList';
import CenterLoader from '../components/CenterLoader';
  
const Books = () => {
  const { genre } = useParams();
  const navigate = useNavigate();
  const { genreBooks, getBooksForGenre } = useContext(BooksContext);

  // Use cached data if available; include loading flag.
  const cachedData = genreBooks[genre] || { books: [], nextUrl: null, error: null, loading: false };

  const [searchQuery, setSearchQuery] = useState('');
  const [localError, setLocalError] = useState(null);

  useEffect(() => {
    // Only fetch if we have no data for this genre.
    if (!genreBooks[genre]) {
      getBooksForGenre(genre).catch(() => {
        setLocalError('Failed to fetch books. Please try again.');
      });
    }
  }, [genre, genreBooks, getBooksForGenre]);

  const filteredBooks = searchQuery
    ? cachedData.books.filter(book =>
        book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (book.authors &&
          book.authors.some(author =>
            author.name.toLowerCase().includes(searchQuery.toLowerCase())
          ))
      )
    : cachedData.books;
  
  // If data is still loading, display the full-screen CenterLoader.
  if (cachedData.loading) {
    return <CenterLoader />;
  }
  
  return (
    <div className="flex flex-col lg:p-4 lg:mx-4 h-screen bg-lightBg">
      <div className="p-2 sticky top-0 z-10 bg-lightBg">
        <div className="flex items-center gap-2 mb-2">
          <img
            src={BackIcon}
            alt="Back"
            className="w-6 h-6 cursor-pointer"
            onClick={() => navigate(-1)}
          />
          <p className="text-h2 text-primary font-montserrat">{genre}</p>
        </div>
        <div className="px-[10px]">
  <div className="relative">
    <img
      src={SearchIcon}
      alt="Search"
      className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4"
    />
    <input
      type="text"
      placeholder="Search by title or author..."
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      className="w-full h-[40px] p-3 pl-[40px] pr-[10px] border border-gray-300 rounded focus:outline-none focus:border-blue-500 font-montserrat bg-greyLight"
    />
    {searchQuery && (
      <img
        src={ClearIcon}
        alt="Clear"
        className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 cursor-pointer"
        onClick={() => setSearchQuery('')}
      />
    )}
  </div>
</div>

        {localError && (
          <p className="text-red-500 text-center mt-2 font-montserrat">{localError}</p>
        )}
      </div>
      <div className="flex-1 overflow-auto p-2">
        {filteredBooks.length === 0 ? (
          <p className="text-center text-gray-600 font-montserrat">
            {searchQuery
              ? `No books available for "${searchQuery}".`
              : 'No books available.'}
          </p>
        ) : (
          <BookList books={filteredBooks} nextUrl={cachedData.nextUrl} />
        )}
      </div>
    </div>
  );
};

export default Books;
