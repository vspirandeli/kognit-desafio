import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { SignIn } from './pages/SignIn';
import { Dashboard } from './pages/Dashboard';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;