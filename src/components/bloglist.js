const Bloglist = ({blogs}) => {

  return ( 
    <>
    {blogs.map((blog, index) => (
        <div className="blog-preview" key={blog.id}>
          <h2>Title is {blog.title}</h2>
          <p>Written by {blog.author}</p>
        </div>
        ))}
    </>
   );
}
 
export default Bloglist;