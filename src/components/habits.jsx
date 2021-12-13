import React from "react";
import Habit from "./habit";
import HabitAddForm from './habitAddForm';
import { useSelector } from 'react-redux';

export default function Habits() {
  const habits = useSelector(state => state.habitReducer);

  return (
    <>
      <HabitAddForm />
      <ul>
        {habits && habits.map((habit) => (
          <Habit id={habit.id} name={habit.name} />
        ))}
      </ul>
    </>
  );
}