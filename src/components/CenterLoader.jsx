
import React from 'react';

const CenterLoader = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-12 h-12 border-4 border-t-transparent border-primary rounded-full animate-spin"></div>
    </div>
  );
};

export default CenterLoader;
