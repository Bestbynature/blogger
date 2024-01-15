import { useState } from "react";

const Home = () => {
  const [blogs, setBlogs] = useState();
  return (
    <div className="home">
      <h2>Home Component</h2>
      {/* {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
        </div>
      ))} */}

    </div>
  );
};

export default Home;


// initial state of blogs

/*
[
  { id: 1, author: "Tobi", title: "My new website", body: "lorem ipsum..." },
  { id: 2, author: "Emmanuel", title: "Welcome party!", body: "lorem ipsum..." },
  { id: 3, author: "Ayooluwa", title: "Web dev top tips", body: "lorem ipsum..." },

]


*/