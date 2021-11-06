import { useRecoilState } from 'recoil';
import { habitsState } from './atom';

export default function Navbar() {
  const [habits, setHabits] = useRecoilState(habitsState);
  console.log(habits.length);

  return (
    <nav className="navbar">
      <i className="navbar-logo fas fa-leaf"></i>
      <span>Habit Tracker</span>
      <span className="navbar-count">{habits.length}</span>
    </nav>
  );
}