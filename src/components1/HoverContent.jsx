import React from "react";

const HoverContent = () => {
  return (
    <>
      <div className="px-4 py-2 bg-red-500" />
      <ul>
        <li className="py-2 px-4 hover:bg-gray-100">Option 1</li>
        <li className="py-2 px-4 hover:bg-gray-100">Option 2</li>
        <li className="py-2 px-4 hover:bg-gray-100">Option 3</li>
      </ul>
    </>
  );
};

export default HoverContent;
