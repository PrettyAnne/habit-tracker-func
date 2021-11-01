import React, { useState } from "react";
import { useRecoilState } from 'recoil';
import { habitsState } from './atom';

export default function HabitAddForm() {
  const [habits, setHabits] = useRecoilState(habitsState);

  const [inputValue, setInputValue] = useState();

  return (
    <form className="add-form" onSubmit={(e) => {
      e.preventDefault();
      var lastId = habits[habits.length - 1].id;
      setHabits(habits.concat([{ id: lastId + 1, name: inputValue, count: 0 }]));
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