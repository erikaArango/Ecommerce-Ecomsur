import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import NavBar  from "./components/Navbar/NavBar.jsx";
import HomePage from "./pages/HomePage.jsx";

const App = () => {
 
  //const [response, setResponse] = useState("");

  // call server to see if its running
/*   useEffect(() => {
    const getApiResponse = () => {
      fetch("http://localhost:5000/")
        .then((res) => res.text())
        .then((res) => setResponse(res));
    };
    getApiResponse();
  }, []); */
  // -------------------------------------------------

  return (
    <Router>
      <div>
        <div>
          <NavBar/>
        </div>
        <Routes>
          <Route path='/' element={<HomePage/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;