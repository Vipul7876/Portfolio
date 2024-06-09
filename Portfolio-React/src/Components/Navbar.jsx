import { Link, NavLink } from 'react-router-dom';
import './Css/Navbar.css';

export default function Navbar () {
  return (
    <div className='navbar-container'>
      <p><Link to='/'>V</Link></p>
      <div className='navbar-menu'>
        <ul>
          <li>
            <NavLink to='/'>Home</NavLink>
          </li>
          <li>
            <NavLink to='/recentwork'>Work</NavLink>
          </li>
          <li>
            <NavLink to='/resume'>Resume</NavLink>
          </li>
          <li>
            <NavLink to='/skills'>Skills</NavLink>
          </li>
          <li>
            <NavLink to='/contact'>Contact</NavLink>
          </li>
        </ul>
        <Link to='/contact'><button>Hire me!</button></Link>
      </div>
    </div>
  );
}
