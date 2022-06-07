
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";
import Home from "../pages/home";
import Login from "../pages/login";
import NotFound from "../pages/NotFound";
import SignUp from "../pages/signUp";



function RoutingApp(){
    return(
        <>
        <Router>
            <Routes>
                <Route  path="/home/:id" element={<Home/>}  />
                <Route path="/" element={<SignUp/>}/>
                <Route path="/*" element={<NotFound/>} />
                <Route path="/login" element={<Login/>} />
            </Routes>
        </Router>
        
        </>
    )
}



export default RoutingApp;