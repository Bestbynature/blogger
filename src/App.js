import Navbar from './Navbar';


function App() {
  return (
    <div className="App">
      <div id="content">
        <h1 style={{ 
    color: "red",
    fontSize: "20px",
    fontWeight: "bold",
    textAlign: "right",
    marginTop: "100px"
}}>This is App component</h1>


        <Navbar />
        
      </div>
     
    </div>
  );
}

export default App;
