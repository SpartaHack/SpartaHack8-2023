import React, { Suspense, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, useParams, useNavigate } from 'react-router-dom';
import Footer from './components/layouts/Footer';
import MainNavbar from "./components/layouts/MainNavbar";
import HomePage from "./pages/HomePage";
import RegistrationPage from "./pages/RegistrationPage";
import AdminPage from "./pages/AdminPage/AdminPage";
import NotFound from './pages/NotFound';


function App() {

  return (
    <div>
      <Router>
        <MainNavbar />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/apply" element={<RegistrationPage />} />
            <Route exact path="/register" element={<RegistrationPage />}  />
            <Route exact path="/admin" element={<AdminPage />} />
            <Route exact path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        <Footer />
      </Router>
    </div >
  );
}

export default App;

// npx tailwindcss -i ./src/input.css -o ./src/index.css --watch
