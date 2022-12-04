import React, { Suspense, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Background from './components/layouts/Background';
import Footer from './components/layouts/Footer';
import MainNavbar from "./components/layouts/MainNavbar";
import HomePage from "./pages/HomePage";
import RegistrationPage from "./pages/RegistrationPage";
import AdminPage from "./pages/AdminPage/AdminPage";

function App() {

  return (
    <div>
      <Router>
        <MainNavbar />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/register" element={<RegistrationPage />} />
            <Route exact path="/admin" element={<AdminPage />} />
          </Routes>
        </Suspense>
        <Footer />
      </Router>
    </div >
  );
}

export default App;

// npx tailwindcss -i ./src/input.css -o ./src/index.css --watch
