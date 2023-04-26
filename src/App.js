import React from "react";
import Header from "./Components/Header";
import { Route, Routes } from "react-router-dom";
import DisplayRecipe from "./Components/DisplayRecipe";
import "./App.css";
import Register from "./Components/Register/Register";
import SignIn from "./Components/Signin/SignIn";
import Errror from "./Components/Errror.jsx";
import Profile from "./Components/Profile/Profile";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/signup" element={<Register />} />
        <Route exact path="/signin" element={<SignIn />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/" element={<DisplayRecipe />} />
        <Route exact path="*" element={<Errror />} />
      </Routes>
    </>
  );
}

export default App;
