
import Homepage from "./Pages/Homepage";
import Header from "./components/Header";
import Signin from "./components/Signin" ;
import Signup from "./components/Signup";
import Footer from "./components/Footer";
import Headersmall from "./components/HeaderSmall";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import Products from "./Pages/Products";
import Sales from "./Pages/Sales";
import Contact from "./Pages/Contact";
import Settings from "./Pages/Settings";



import React, { useState } from 'react';

  function App() {
    var [loggedin, setloggedin] = useState(0)
    var [loggedout, setloggedout] = useState(0)
    console.log("lin",loggedin)
    console.log("lout",loggedout)
    const setlogin = (l) => {
      setloggedin(l)
    }
    const setlogout = (l) => {
      setloggedout(l)
  
    }
    if(loggedin===0){
    
       
     return (
       
        <Router>
          
          <div className="App">
          <Headersmall setlogout={setlogout}/>
            <Routes>
              <Route path="/" element={<Homepage />} exact></Route>
              <Route path="/signup" element={<Signup />} ></Route>
              <Route path="/signin" element={<Signin  setlogin={setlogin}/>} ></Route>
            </Routes>
            
          </div>
          <Footer />
        </Router>
      );
    }
     
    
      else 
      {
        return(
       
    <Router>
      
      <div className="App">
      <Header setlogout={setlogout}/>
   
      <Routes>
        
        <Route path="/" element={<Homepage />} ></Route>
       
          <Route path='/products' element={<Products />} ></Route>
          <Route path='/sales' element={<Sales />} ></Route>
          <Route path='/contact' element={<Contact />} ></Route>
          <Route path='/settings' element={<Settings />} ></Route>
          
          
        </Routes>
        <Footer />
      </div>
      
     
    </Router>
  
     );
  }
  };
export default App;
