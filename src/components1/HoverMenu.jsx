import React, { useState } from "react";
import HoverContent from "./HoverContent";

const HoverMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative m-44">
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        Hover Me
      </button>
      {isOpen && (
        <div
          className="absolute top-full left-0  bg-white border border-gray-200 rounded shadow-md"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <HoverContent />
        </div>
      )}
    </div>
  );
};

export default HoverMenu;
