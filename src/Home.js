import { useEffect, useState } from "react";
import Bloglist from "./components/bloglist";

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true); //true false

  const [course, setCourse] = useState("frontend");



// catch

  useEffect(() => {
   setTimeout(()=>{
    fetch('http://localhost:8000/blogs')
   .then((response)=>{
    if(!response.ok){
      throw Error('Server is busy. Please try again later.')
    }
    return response.json()
   })
   .then((item)=>{
    setBlogs(item)
    setLoading(false)
   })
   .catch((err)=>{
    console.log(err.message)
    setError(err.message)
    setLoading(false)
   })
   }, 3000) 
  }, []);

  return (
    <div className="home">
      <h2>Home Component</h2>

      {loading && <div>Your item is being fetched</div>}

      {error && <div className="error">{error}</div>}

      {blogs && <Bloglist blogs={blogs} />}

      <p>{course}</p>
    </div>
  );
};

export default Home;
