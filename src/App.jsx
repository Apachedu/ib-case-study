import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './HomePage';
import CaseStudyPage from './CaseStudyPage';
import AdminPanel from './AdminPanel';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/case/:id" element={<CaseStudyPage />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="*" element={<p className="p-10 text-center text-red-500">Page not found</p>} />
      </Routes>
    </Router>
  );
};

export default App;
