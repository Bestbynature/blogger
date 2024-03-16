import { FaPlugCircleBolt } from 'react-icons/fa6';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar">
    <NavLink
      to="/"
      className={({ isActive }) => (
        isActive ? 'active' : ''
      )}
    >
      <img src="logo192.png" alt="React Logo" className="logo" />
      <h1 className="blog-plug">
        Your Blog Plug
        <FaPlugCircleBolt className="plug" />
      </h1>
    </NavLink>

    <div className="links">
      <NavLink
        to="/"
        className={({ isActive }) => (
          isActive ? 'active' : ''
        )}
      >
        Home
      </NavLink>
      <NavLink
        to="/create"
        className={({ isActive }) => (
          isActive ? 'active' : ''
        )}
      >
        Add new
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) => (
          isActive ? 'active' : ''
        )}
      >
        Contact
      </NavLink>
    </div>
  </nav>
);

export default Navbar;
