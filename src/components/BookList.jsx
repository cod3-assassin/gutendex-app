
import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import BookItem from './BookItem';

const BookList = ({ books, nextUrl, fetchBooks }) => {
  const fetchMoreBooks = () => {
    if (nextUrl && fetchBooks) {
      fetchBooks(nextUrl);
    }
  };

  return (
    <div className="bg-[#F8F7FF] mt-4">
      <InfiniteScroll
        dataLength={books.length}
        next={fetchMoreBooks}
        hasMore={!!nextUrl}
        loader={null}  
        endMessage={
          <p className="text-center mt-4 text-gray-600 font-montserrat">
            No more books
          </p>
        }
      >
        <div className="grid grid-cols-3 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 w-full">
          {books.map((book) => (
            <BookItem key={book.id} book={book} />
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default BookList;
