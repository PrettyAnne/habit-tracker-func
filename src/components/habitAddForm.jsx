import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from 'react-redux';
import { add } from "../store/slice";

export default function HabitAddForm() {
  const habits = useSelector(state => state.habitReducer);
  const dispatch = useDispatch();

  const [inputValue, setInputValue] = useState();

  return (
    <form className="add-form" onSubmit={(e) => {
      e.preventDefault();
      var lastId = (habits.length < 1 ? 0 : habits[habits.length - 1].id);
      dispatch(add({ id: lastId + 1, name: inputValue, count: 0 }));
      e.target.reset();
    }}>
      <input
        type="text"
        className="add-input"
        placeholder="습관을 입력하세요."
        onInput={(e) => { setInputValue(e.target.value) }}
      />
      <button className="add-button">Add</button>
    </form>
  );
}