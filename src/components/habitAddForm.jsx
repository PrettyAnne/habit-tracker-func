import React from "react";

export default function HabitAddForm () {
  return (
    <form className="add-form">
    <input
      type="text"
      className="add-input"
      placeholder="습관을 입력하세요."
    />
    <button className="add-button">Add</button>
  </form>
  );
}