import Navbar from './Navbar';
import Home from './Home';

function App() {

  const heading = 'The blog Heading'
  const heading2 = 'The second heading'

  return (
    <div className="App">
      <Navbar plastic={heading} short={heading2} />
      <div className="content">
        <Home title={heading} />
      </div>
    </div>
  );
}

export default App;