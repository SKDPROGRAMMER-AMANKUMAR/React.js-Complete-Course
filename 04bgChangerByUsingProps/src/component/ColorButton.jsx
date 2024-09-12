import React from 'react';

function ColorButton({ color, setColor, bgColor }) {
  return (
    <button
      onClick={() => setColor(color)}
      className="h-8 w-24 border-2 border-black text-white text-center pb-7 pt-1 rounded-xl active:scale-90 mx-1"
      style={{ backgroundColor: bgColor }}
    >
      {color.charAt(0).toUpperCase() + color.slice(1)} {/* Capitalize the color name */}
    </button>
  );
}

export default ColorButton;
