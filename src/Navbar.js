import { FaPlugCircleBolt } from "react-icons/fa6";
import { FaSearchPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {

  return (
    <nav className="navbar">
      <h1 className="blog-plug">Your Blog Plug<FaPlugCircleBolt className="plug"/></h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/create" style={{ 
          color: 'white', 
          backgroundColor: '#f1356d',
          borderRadius: '8px' 
        }}>New Blog <FaSearchPlus /></Link>
      </div>
    </nav>
  );
}
 
export default Navbar;