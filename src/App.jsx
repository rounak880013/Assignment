import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Home'
import Login from './Login'
import Register from './Register'
function App() {
  
  return (
    <div>
      <Router>
        <Routes>
        <Route path='/' element={<Home/>} />
        </Routes>
        <Routes>
        <Route path='/Login' element={<Login/>} />
        </Routes>
        <Routes>
        <Route path='/Register' element={<Register/>} />
        </Routes>
      </Router>
    </div>)
}

export default App;
