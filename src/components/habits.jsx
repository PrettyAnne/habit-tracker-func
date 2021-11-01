import React, { useState } from "react";
import Habit from "./habit";
import HabitAddForm from './habitAddForm';


export default function Habits() {
  return (
    <>
      <HabitAddForm />
      <ul>
        <Habit />
      </ul>
    </>
  );
}