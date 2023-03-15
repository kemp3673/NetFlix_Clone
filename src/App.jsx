import React, {useState} from "react";
import { HashRouter, BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Main from './pages/Main';
import Player from "./pages/Player";
import PasswordReset from "./pages/PasswordReset";

const App = () => {
  // key exists in localStorage
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('NotFlix-loggedIn') === 'true');

  return (
    // HashRouter is used for github pages
    // Otherwise, use BrowserRouter
      <HashRouter>
        <Routes>
          <Route exact path="/" element={isLoggedIn ? <Main setIsLoggedIn={setIsLoggedIn}/> : <Navigate to="/signup" setIsLoggedIn={setIsLoggedIn}/>} />
          <Route exact path="/signup" element={<SignUp setIsLoggedIn={setIsLoggedIn}/>} />
          <Route exact path="/login" element={<Login setIsLoggedIn={setIsLoggedIn}/>} />
          <Route exact path="/player/:id" element={<Player />} />
          <Route exact path="/password-reset" element={<PasswordReset setIsLoggedIn={setIsLoggedIn}/>} />
        </Routes>
      </HashRouter>
  );
};

export default App;
