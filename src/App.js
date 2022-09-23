import React from "react";
// import Home from "./pages/home/Home"; 
import Profile from "./pages/Profile/Profile";
import {
  BrowserRouter as Router,
  Routes,
  Route,
 
} from 'react-router-dom';
import Userlogin from "./pages/user/Userlogin";
import Topbar from "./components/Topbar/Topbar";
function App() {
  return (
    <>
 
    <Router> 
      <Topbar/>
    <Routes> 

    <Route exact path='/' element={<Profile/> }></Route>
    <Route exact path='/user' element={<Userlogin/>}></Route>
      
      </Routes>
    </Router> 
    </>
        
  ) 
 
       
    
}

export default App;
