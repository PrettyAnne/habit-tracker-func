import React from "react";
import { useRecoilState } from 'recoil';
import { habitsState } from './atom';
import Habit from "./habit";
import HabitAddForm from './habitAddForm';

export default function Habits() {
  const [habits, setHabits] = useRecoilState(habitsState);

  return (
    <>
      <HabitAddForm />
      <ul>
        {habits.map((habit) => (
          <Habit id={habit.id} name={habit.name} />
        ))}
      </ul>
    </>
  );
}