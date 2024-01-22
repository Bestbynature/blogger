import { FaPlugCircleBolt } from "react-icons/fa6";
import { FaSearchPlus } from "react-icons/fa";

const Navbar = (props) => {

  console.log('props in the navbare are as follows', props)

  const plastic = props.plastic
  const short = props.short


  return (
    <nav className="navbar">
      <h1 className="blog-plug">{plastic}<FaPlugCircleBolt className="plug"/></h1>
      <div className="links">
        <a href="/">Home</a>
        <a href="/create" style={{ 
          color: 'white', 
          backgroundColor: '#f1356d',
          borderRadius: '8px' 
        }}>New Blog <FaSearchPlus /></a>
      </div>
    </nav>
  );
}
 
export default Navbar;