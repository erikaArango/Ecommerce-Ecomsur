//import React, { useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import {ToastContainer} from "react-toastify"
import NavBar  from "./components/NavBar.jsx";
import HomePage from "./components/HomePage.jsx";

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
     <ToastContainer/>  
          <NavBar/>
        <Routes>
          <Route path='/' element={<HomePage/>} />
        </Routes>
    </Router>
   
  );
};

export default App;