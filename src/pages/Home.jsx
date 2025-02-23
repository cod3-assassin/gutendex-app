import React from 'react';
import GenreButton from '../components/GenreButton';

const genres = [
  'Fiction',
  'Drama',
  'Humor',
  'Politics',
  'Philosophy',
  'History',
  'Adventure',
];

const Home = () => {
  return (
    <div className="min-h-screen bg-lightBg">
      {/* Header with Pattern background */}
      <header className="bg-[url('./assets/Pattern.svg')] bg-no-repeat bg-cover p-6">
  <div className="mx-auto w-full max-w-5xl">
    <h1 className="text-left whitespace-nowrap text-4xl md:text-5xl font-bold text-primary mb-4">
      Gutenberg Project
    </h1>
    <p className="text-left text-greyDark text-[20px] mb-2 font-montserrat">
      A social cataloging website that allows you to freely search its database of books, annotations, and reviews.
    </p>
  </div>
</header>

      
      {/* Genre Buttons */}
      <div className="w-full p-6">
        <div className="grid grid-cols-1 gap-4 md:grid md:grid-cols-2 md:gap-4 w-full max-w-5xl mx-auto">
          {genres.map((genre) => (
            <GenreButton key={genre} genre={genre} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
