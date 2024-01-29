import { useState } from "react";
import Bloglist from "./components/bloglist";
import useFetch from "./hooks/use-fetch";

const Home = () => {
  

  const [course, setCourse] = useState("frontend");

  const { blogs, error, loading } = useFetch('http://localhost:8000/blogs');

  
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
