import React, { useState } from "react";

const StarRating = ({ totalStars = 5, onRatingChange }) => {
  const [rating, setRating] = useState(0);
  const [hovered, setHovered] = useState(0);

  const handleClick = (index) => {
    setRating(index);
    if (onRatingChange) {
      onRatingChange(index); // Pass rating to parent component
    }
  };

  const handleMouseEnter = (index) => {
    setHovered(index);
  };

  const handleMouseLeave = () => {
    setHovered(0);
  };

  return (
    <div className="flex items-center">
      {Array.from({ length: totalStars }, (_, index) => (
        <svg
          key={index}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill={index < (hovered || rating) ? "#FACC15" : "#E5E7EB"} // Gold for filled, Gray for empty
          stroke="#000"
          className="w-8 h-8 cursor-pointer transition-colors"
          onClick={() => handleClick(index + 1)}
          onMouseEnter={() => handleMouseEnter(index + 1)}
          onMouseLeave={handleMouseLeave}
        >
          <path d="M12 2.25l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14l-5-4.87 6.91-1.01L12 2.25z" />
        </svg>
      ))}
    </div>
  );
};

export default StarRating;
