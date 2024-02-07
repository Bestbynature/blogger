import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import About from './components/about-us';
import Contact from './components/contact-us';
import Create from './components/create';
import NotFound from './components/not-found';
import BlogDetails from './components/blog-details';

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogs/:id" element={<BlogDetails />} />
        <Route path="/edit/:id" element={<Create />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
