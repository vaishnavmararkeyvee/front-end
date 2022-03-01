import React from "react";
import Homepage from "./Pages/Homepage";
import Header from "./components/Header";
import Signin from "./components/Signin" ;
import Signup from "./components/Signup";
import Footer from "./components/Footer";

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import Products from "./Pages/Products";
import Sales from "./Pages/Sales";
import Contact from "./Pages/Contact";
import Settings from "./Pages/Settings";
function App() {
  return (
    <Router>
      <Header />
      
      <div className="App">
      
      
        <Routes>
        <Route path="/" element={<Homepage />} exact></Route>
          <Route path='/signin' element={<Signin />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/products' element={<Products />} />
          <Route path='/sales' element={<Sales />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/settings' element={<Settings />} />
          
        </Routes>
        
      </div>
      <Footer />
     
    </Router>
  );
}

export default App;
