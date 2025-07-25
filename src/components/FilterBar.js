// src/components/FilterBar.js
import React from 'react';
import './FilterBar.css'; // Optional for styling

function FilterBar({ filters, setFilters, caseStudies }) {
  const topics = [...new Set(caseStudies.map(cs => cs.topic))];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  const clearFilters = () => {
    setFilters({ search: '', level: '', topic: '' });
  };

  return (
    <div className="filter-bar">
      <input
        type="text"
        name="search"
        value={filters.search}
        onChange={handleChange}
        placeholder="🔍 Search by title, case, data..."
      />

      <select name="level" value={filters.level} onChange={handleChange}>
        <option value="">All Levels</option>
        <option value="SL">SL</option>
        <option value="HL">HL</option>
        <option value="SL/HL">SL/HL</option>
      </select>

      <select name="topic" value={filters.topic} onChange={handleChange}>
        <option value="">All Topics</option>
        {topics.map(topic => (
          <option key={topic} value={topic}>{topic}</option>
        ))}
      </select>

      <button onClick={clearFilters}>Reset</button>
    </div>
  );
}

export default FilterBar;

