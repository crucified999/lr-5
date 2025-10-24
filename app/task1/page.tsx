"use client";

import { useState, useEffect } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    setCount((prevCount) => Math.max(0, prevCount - 1));
  };

  const handleReset = () => {
    setCount(0);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowUp") {
        e.preventDefault();
        handleIncrement();
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        handleDecrement();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const shouldShowCongratulations = count > 0 && count % 10 === 0;

  return (
    <div className="flex flex-col items-center justify-center gap-4 h-screen">
      <h1 className="text-3xl font-bold">
        {shouldShowCongratulations ? "Молодец!" : "Жми на кнопки!"}
      </h1>
      <p className="text-2xl font-semibold">{count}</p>
      <div className="flex items-center justify-center gap-4">
        <button
          className="border-2 border-black rounded-lg px-4 py-2 cursor-pointer hover:bg-gray-100 transition-colors"
          onClick={handleIncrement}
        >
          +1
        </button>
        <button
          className={`border-2 border-black rounded-lg px-4 py-2 transition-colors ${
            count === 0
              ? "cursor-not-allowed opacity-50 bg-gray-200"
              : "cursor-pointer hover:bg-gray-100"
          }`}
          onClick={handleDecrement}
          disabled={count === 0}
        >
          -1
        </button>
        <button
          className="border-2 border-black rounded-lg px-4 py-2 cursor-pointer hover:bg-gray-100 transition-colors"
          onClick={handleReset}
        >
          Reset
        </button>
      </div>
      <div className="text-sm text-gray-600 mt-4">
        Используйте стрелки ↑ ↓ для управления
      </div>
    </div>
  );
}
