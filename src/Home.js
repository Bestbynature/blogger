import { useEffect, useState } from "react";
import Bloglist from "./components/bloglist";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { id: 1, author: "Tobi", title: "My new website", body: "lorem ipsum..." },
    {
      id: 2,
      author: "Emmanuel",
      title: "Welcome party!",
      body: "lorem ipsum...",
    },
    {
      id: 3,
      author: "Ayooluwa",
      title: "Web dev top tips",
      body: "lorem ipsum...",
    },
  ]);

  const [course, setCourse] = useState("frontend");

  useEffect(() => {
    console.log("use Effect ran");
  }, [course]);

  const handleDelete = (id) => {
    const filteredBlogs = blogs.filter((blog, index) => blog.id !== id);

    setBlogs(filteredBlogs);
  };

  return (
    <div className="home">
      <h2>Home Component</h2>
      <Bloglist blogs={blogs} handleDelete={handleDelete} />
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
