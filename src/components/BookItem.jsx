import React from 'react';
import formatBookLink from '../utils/formatBookLink';

const BookItem = ({ book }) => {
  const handleClick = () => {
    const url = formatBookLink(book);
    if (url) {
      window.open(url, '_blank');
    } else {
      alert('No viewable version available');
    }
  };

  // Join author names (or show 'Unknown' if none)
  const bookAuthors = book.authors?.map(author => author.name).join(', ') || 'Unknown';

  return (
    <div
      onClick={handleClick}
      className="flex flex-col items-start p-2 rounded-lg shadow hover:shadow-lg transition cursor-pointer w-full"
    >
      {/* Image Container with Fixed Aspect Ratio */}
      <div
        className="rounded-md mb-2 overflow-hidden flex items-center justify-center aspect-[114/162]"
      >
        {book.formats?.['image/jpeg'] ? (
          <img 
            src={book.formats['image/jpeg']} 
            alt={book.title} 
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-200">
            <span className="text-gray-500 text-sm">No Image</span>
          </div>
        )}
      </div>

      {/* Book Title - Single line */}
      <h3 
        className="text-[12px] font-montserrat text-greyDark text-left mb-1 truncate w-full"
        title={book.title} // Optional: show full title on hover
      >
        {book.title}
      </h3>

      {/* Author Name - Single line */}
      <p 
        className="text-[12px] font-montserrat text-greyMedium text-left truncate w-full"
        title={bookAuthors} // Tooltip for full author names
      >
        {bookAuthors}
      </p>
    </div>
  );
};

export default BookItem;
