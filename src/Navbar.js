import { FaPlugCircleBolt } from 'react-icons/fa6';
// import { FaSearchPlus } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar">
    <Link to="/">
      <img src="logo192.png" alt="React Logo" className="logo" />
      <h1 className="blog-plug">
        Your Blog Plug
        <FaPlugCircleBolt className="plug" />
      </h1>
    </Link>

    <div className="links">

      {/* <Link to="/">Home</Link>
      <Link
        to="/create"
        style={{
          color: 'white',
          backgroundColor: '#f1356d',
          borderRadius: '8px',
        }}
      >
        New Blog
        {' '}
        <FaSearchPlus />
      </Link> */}
      <NavLink to="/" activeClassName="active" exact>
        Home
      </NavLink>
      <NavLink to="/create" activeClassName="active">
        Add new
      </NavLink>
      <NavLink to="/contact" activeClassName="active">
        Contact
      </NavLink>
    </div>
  </nav>
);

export default Navbar;
