import "./App.css";
import React, { useState, useEffect } from "react";
import DetailPage from "./components/DetailPgae/DetailPage";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Test from "./Test";

const App = () => {
  const [theme, setTheme] = useState("light-theme");

  // const toggleTheme = () =>{
  //   if(theme === "dark-theme"){
  //     setTheme("light-theme")
  //   }else{
  //     setTheme("dark-theme")

  //   }
  // }

  // useEffect(() => {
  //   document.body.className = theme
  // },[theme]);

  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/detailPage" element={<DetailPage />} />
            <Route path="/test" element={<Test />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
