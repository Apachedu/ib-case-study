// src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage.jsx';
import LoginForm from './LoginForm.jsx';
import CaseStudyDashboard from './CaseStudyDashboard.jsx';
import CaseStudyPage from './CaseStudyPage.jsx';
import AdminPanel from './AdminPanel.jsx'; // import your AdminPanel

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/firestore-admin" element={<CaseStudyDashboard />} />
        <Route path="/case/:id" element={<CaseStudyPage />} />
        <Route path="/admin" element={<AdminPanel />} /> {/* New admin route */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
