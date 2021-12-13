import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { remove } from '../store/slice';

export default function Habit (props) {
  const habits = useSelector(state => state.habitReducer);
  const dispatch = useDispatch();

  const [count, setCount] = useState(0);

  const handleIncreament = () => {
    setCount(count + 1);
  };

  const handleDecreament = () => {
    setCount(count - 1);
  };

  const handleDelete = () => {
    dispatch(remove(props.id));
  };

  return (
    <li className="habit">
      <span className="habit-name">{props.name}</span>
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