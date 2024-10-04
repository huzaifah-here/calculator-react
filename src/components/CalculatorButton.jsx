// src/components/CalculatorButton.js
import React from "react";

const CalculatorButton = ({ value, onClick, className }) => {
  return (
    <button
      className={`bg-blue-400 text-white font-bold py-3 rounded hover:bg-blue-500 transition duration-300 ${className}`}
      onClick={onClick}
    >
      {value}
    </button>
  );
};

export default CalculatorButton;
