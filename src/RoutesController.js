import React, { useContext, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import App from './App'
import SelectionPage from './Content/SelectionPage'
import Facebook from './Content/facebook/Facebook'
import ProtectedRoute from './components/ProtectedRoute'
import { AuthContext } from "./context/AuthConext";

function RoutesController(){
    const timeLimit =  20 * 1000;
   
    return(
        <Router>
            <Routes>
            <Route exact path="/" element={<App />} />
            <Route  path="/Select" element={<SelectionPage  />} />
            <Route element={<ProtectedRoute timeLimit={timeLimit}  />}>
                <Route path="/Select/facebook" element={<Facebook timeLimit={timeLimit}  />} />
            </Route>
            </Routes>
        </Router>
    )
}

export default RoutesController;