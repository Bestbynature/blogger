import { Link, useParams } from "react-router-dom";
import useFetch from "../hooks/use-fetch";

const BlogDetails = () => {
  const { id } = useParams();

  const {
    blogs: blog,
    error,
    loading,
  } = useFetch(`http://localhost:8000/blogs/${id}`);

  return (
    <div className="blog-details">
      <h2>This is the blog details for blog with id - {id}</h2>
      {loading && <div> Your item is currently being fetched </div>}
      {error && <div>{error}</div>}

      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>{blog.author}</p>
          <div className="article-body">{blog.body}</div>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
