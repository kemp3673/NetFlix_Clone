import React, {useState} from "react";
import Cookies from "js-cookie";
import { HashRouter, BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Main from './pages/Main';
import Player from "./pages/Player";
import PasswordReset from "./pages/PasswordReset";

const App = () => {
  // Check if the 'loggedIn' cookie is set
  console.log('Cookies: ', Cookies.get('NotFlix-loggedIn'));
  const [isLoggedIn, setIsLoggedIn] = useState(Cookies.get('NotFlix-loggedIn') === 'true');
  console.log('loggedin: ', isLoggedIn);

  return (
    // HashRouter is used for github pages
    // Otherwise, use BrowserRouter
      <HashRouter>
        <Routes>
          <Route exact path="/" element={isLoggedIn ? <Main /> : <Navigate to="/signup" />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/player/:id" element={<Player />} />
          <Route exact path="/password-reset" element={<PasswordReset />} />
        </Routes>
      </HashRouter>
  );
};

export default App;
