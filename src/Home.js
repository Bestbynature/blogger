import { useEffect, useState } from "react";
import Bloglist from "./components/bloglist";

const Home = () => {
  const [blogs, setBlogs] = useState(null);

  const [course, setCourse] = useState("frontend");





  useEffect(() => {
   fetch('http://localhost:8000/blogs') //slaughtering
   .then((response)=>{
    return response.json()
   })
   .then((item)=>{
    // console.log(item)
    setBlogs(item)
   })
  }, []); // dependency array

  const handleDelete = (id) => {
    const filteredBlogs = blogs.filter((blog, index) => blog.id !== id);

    setBlogs(filteredBlogs);
  };

  return (
    <div className="home">
      <h2>Home Component</h2>

      {blogs && <Bloglist blogs={blogs} handleDelete={handleDelete} />}
      {/* <button onClick={()=>setCourse('backend')}>click to change course</button> */}

      <p>{course}</p>
    </div>
  );
};

export default Home;

// Create a delete button for each blog post
// create a function that will handle the delete button
// create a bloglist component that will be used to display the list of blogs
// introduce useEffect hook
// creating a dummy server.
