import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import MainNavbar from "./components/layouts/MainNavbar";
import HomePage from "./pages/HomePage";
import RegistrationPage from "./pages/RegistrationPage";

function App() {
  return (
    <div>
      <Router>
      <MainNavbar />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/register" element={<RegistrationPage />} />
          </Routes>
        </Suspense>
      </Router>
    </div >
  );
}

export default App;
