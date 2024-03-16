import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Bloglist from './components/bloglist';
import { fetchBlogs, increaseCount } from './redux/blogs/blogsSlice';
// import useFetch from './hooks/use-fetch';

const Home = () => {
  const dispatch = useDispatch();

  const {
    blogs, error, loading, count,
  } = useSelector((store) => store.blogs);

  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch, blogs]);

  const handleIncrease = () => {
    dispatch(increaseCount());
  };

  // const { blogs, error, loading } = useFetch('http://localhost:8000/blogs');

  return (
    <div className="home">
      <h2>Home Component</h2>

      {loading && <div>Your item is being fetched</div>}

      {error && <div className="error">{error}</div>}

      <div className="redux-test">
        <p>{count}</p>
        <button type="button" onClick={handleIncrease}>Click to increase</button>
      </div>

      {blogs && <Bloglist blogs={blogs} />}

    </div>
  );
};
export default Home;
