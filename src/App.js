import React from "react"
import './App.css';
import { Routes, Route } from "react-router-dom"
import { Home, Blog, Errorw } from "./pages";

function App() {
  return (
    <div>
      <Routes>
        <Route path ="/" element={<Home />}/>
        <Route path ="/blog" element={<Blog />}/>
        <Route path ="*" element={<Error />}/>
      </Routes>
    </div>
  );
}

export default App;
