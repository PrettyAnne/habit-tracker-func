import { useSelector } from 'react-redux';

export default function Navbar() {
  const habits = useSelector(state => state.habitReducer);
  
  return (
    <nav className="navbar">
      <i className="navbar-logo fas fa-leaf"></i>
      <span>Habit Tracker</span>
      <span className="navbar-count">{habits.length}</span>
    </nav>
  );
}