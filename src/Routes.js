import React from 'react'; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 

// Importing page components
import Home from './pages/Home'; 

/**
 * Main App component responsible for defining routes and rendering page content.
 */
function App() {
  return (
    // Wrapping the application in a Router to enable routing
    <Router>
      <div className="App">
        
        {/* Routes defines the application's routes, each Route maps a path to a component */}
        <Routes>
          {/* Root route "/" renders the Home component */}
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

// Exporting App to be used in the root file (e.g., index.js)
export default App;
