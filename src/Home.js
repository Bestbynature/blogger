import { useState } from "react";

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


  return (
    <div className="home">
      <h2>Home Component</h2>
      {blogs.map((blog, index) => (
        <div className="blog-preview" key={blog.id}>
          <h2>Title is {blog.title}</h2>
          <p>Written by {blog.author}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;


// Create a delete button for each blog post
// create a function that will handle the delete button
// create a bloglist component that will be used to display the list of blogs
// introduce useEffect hook