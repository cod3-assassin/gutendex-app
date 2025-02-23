import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import NextArrow from '../assets/Next.svg';
import FictionIcon from '../assets/Fiction.svg';
import DramaIcon from '../assets/Drama.svg';
import HumorIcon from '../assets/Humour.svg';
import PoliticsIcon from '../assets/Politics.svg';
import PhilosophyIcon from '../assets/Philosophy.svg';
import HistoryIcon from '../assets/History.svg';
import AdventureIcon from '../assets/Adventure.svg';
import { BooksContext } from '../context/BooksContext';

// Map genre names to the corresponding icon images
const iconMap = {
  Fiction: FictionIcon,
  Drama: DramaIcon,
  Humor: HumorIcon,
  Politics: PoliticsIcon,
  Philosophy: PhilosophyIcon,
  History: HistoryIcon,
  Adventure: AdventureIcon,
};

const GenreButton = ({ genre }) => {
  const navigate = useNavigate();
  const { genreBooks, getBooksForGenre } = useContext(BooksContext);
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    // If the genre's data is not cached, prefetch it.
    if (!genreBooks[genre]) {
      setIsLoading(true);
      try {
        await getBooksForGenre(genre);
      } catch (error) {
        alert('Failed to fetch books. Please try again.');
        setIsLoading(false);
        return;
      }
      setIsLoading(false);
    }
    // Navigate regardless if data was just loaded or already available.
    navigate(`/books/${encodeURIComponent(genre)}`);
  };

  return (
    <button
      onClick={handleClick}
      disabled={isLoading}
      className="flex justify-between items-center h-14 px-6 rounded-lg shadow-md text-lg font-medium bg-white text-black hover:bg-purple-200 transition duration-150 w-full"
    >
      {isLoading ? (
        <div className="flex items-center justify-center w-full">
          <div className="w-6 h-6 border-4 border-t-transparent border-blue-500 rounded-full animate-spin"></div>
        </div>
      ) : (
        <>
          <span className="flex items-center gap-3">
            <img src={iconMap[genre]} alt={`${genre} icon`} className="w-6 h-6" />
            {genre}
          </span>
          <img src={NextArrow} alt="Next" className="w-6 h-6" />
        </>
      )}
    </button>
  );
};

export default GenreButton;
