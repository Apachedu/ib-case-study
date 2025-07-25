// src/AdminPanel.jsx
import React, { useState } from 'react';

const AdminPanel = () => {
  const [formData, setFormData] = useState({
    title: '',
    level: 'SL',
    topic: '',
    module: '',
    toolkit: '',
    caseText: '',
    dataTable: '',
    questions: ''
  });

  const [caseStudies, setCaseStudies] = useState([
    { id: '1', title: 'Sample Case Study 1', topic: 'Marketing', level: 'HL' },
    { id: '2', title: 'Sample Case Study 2', topic: 'Economics', level: 'SL' },
  ]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Save functionality not implemented yet');
  };

  return (
    <div className="p-4 bg-gray-50 min-h-screen">
      <h1 className="text-blue-500 text-xl font-bold mb-4">Add / Edit Case Study</h1>
      
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4 mb-8">
        <div className="flex items-center space-x-2">
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={formData.title}
            onChange={handleChange}
            className="flex-1 p-2 border rounded"
            required
          />
          <select
            name="level"
            value={formData.level}
            onChange={handleChange}
            className="flex-1 p-2 border rounded"
          >
            <option value="SL">SL</option>
            <option value="HL">HL</option>
            <option value="SL/HL">SL/HL</option>
          </select>
          <input
            type="text"
            name="topic"
            placeholder="Topic"
            value={formData.topic}
            onChange={handleChange}
            className="flex-1 p-2 border rounded"
            required
          />
          <input
            type="text"
            name="module"
            placeholder="Module"
            value={formData.module}
            onChange={handleChange}
            className="flex-1 p-2 border rounded"
          />
          <input
            type="text"
            name="toolkit"
            placeholder="Toolkit"
            value={formData.toolkit}
            onChange={handleChange}
            className="flex-1 p-2 border rounded"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <textarea
            rows="4"
            name="caseText"
            placeholder="Case Text"
            value={formData.caseText}
            onChange={handleChange}
            className="w-full p-2 border rounded resize-none"
            required
          />
          <textarea
            rows="4"
            name="dataTable"
            placeholder="Data Table (JSON)"
            value={formData.dataTable}
            onChange={handleChange}
            className="w-full p-2 border rounded resize-none font-mono"
            required
          />
          <textarea
            rows="4"
            name="questions"
            placeholder="Questions (JSON)"
            value={formData.questions}
            onChange={handleChange}
            className="w-full p-2 border rounded resize-none font-mono"
            required
          />
        </div>
        <button
          type="submit"
          className="self-start px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Save
        </button>
      </form>

      <ul className="space-y-4">
        {caseStudies.map((cs) => (
          <li key={cs.id} className="bg-white p-4 shadow rounded">
            <a href="#" className="font-bold text-blue-500 hover:underline">{cs.title}</a>
            <p className="text-sm text-gray-500">{cs.topic} | {cs.level}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminPanel;
