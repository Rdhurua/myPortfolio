
import React from 'react';
import img from "/r18.png"
const Loader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-inherit">
  <div className="relative w-32 h-32 flex items-center justify-center">
    
    <div className="absolute inset-0 rounded-full border-t-4 border-orange-400 border-solid animate-spin"></div>
    <img
      src={img}
      alt="Loading"
      className="w-20 h-20 object-contain"
    />

  </div>
</div>
  );
};

export default Loader;
