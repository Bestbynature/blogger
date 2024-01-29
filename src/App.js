import Navbar from "./Navbar";
import Home from "./Home";
import { Routes, Route } from "react-router-dom";
import About from "./components/about-us";
import Contact from "./components/contact-us";
import Create from "./components/create";
import NotFound from "./components/not-found";

function App() {
  const heading = "The blog Heading";
  const heading2 = "The second heading";

  return (
    <div className="App">
      <Navbar plastic={heading} short={heading2} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
