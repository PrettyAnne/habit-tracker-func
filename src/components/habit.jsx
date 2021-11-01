import React, { useState } from 'react';

export default function Habit () {
  const [count, setCount] = useState(0);

  const handleIncreament = () => {
    setCount(count + 1);
  };

  const handleDecreament = () => {
    setCount(count - 1);
  };

  const handleDelete = () => {
    setCount(0);
  };

  return (
    <li className="habit">
      <span className="habit-name">Reading</span>
      <span className="habit-count">{count}</span>
      <button className="habit-button habit-increase" onClick={handleIncreament}>
        <i className="fas fa-plus-square"></i>
      </button>
      <button className="habit-button habit-decrease" onClick={handleDecreament}>
        <i className="fas fa-minus-square"></i>
      </button>
      <button className="habit-button habit-delete" onClick={handleDelete}>
        <i className="fas fa-trash"></i>
      </button>
    </li>
  );
}