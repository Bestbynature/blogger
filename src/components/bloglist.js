const Bloglist = ({blogs, handleDelete}) => {

  return ( 
    <>
    {blogs.map((blog, index) => (
        <div className="blog-preview" key={blog.id}>
          <h2>Title is {blog.title}</h2>
          <p>Written by {blog.author}</p>
          <button onClick={()=>{handleDelete(blog.id)}}>Delete blog </button>
        </div>
        ))}
    </>
   );
}
 
export default Bloglist;