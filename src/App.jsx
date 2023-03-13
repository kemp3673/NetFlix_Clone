import React, { Suspense } from 'react';
import { HashRouter, BrowserRouter, Routes, Route } from 'react-router-dom';

import SignUp from './pages/SignUp';
import Login from './pages/Login';
// import Main from './pages/Main';
import Player from './pages/Player';
const Main = React.lazy(() => import('./pages/Main'));


const App = () => {
  return (
    // HashRouter is used for github pages
    // Otherwise, use BrowserRouter
    <HashRouter>
      <Routes>
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/" element={<Main />} />
        <Route exact path="/player/:id" element={<Player />} />
      </Routes>
    </HashRouter>
  );
}

export default App;