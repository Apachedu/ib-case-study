import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from './firebase';
import SkillNestLogo from './assets/SkillNestLogo.png';

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

  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);

    try {
      const newStudy = {
        ...formData,
        caseText: formData.caseText.split('\n').filter(Boolean),
        dataTable: JSON.parse(formData.dataTable),
        questions: JSON.parse(formData.questions)
      };

      await addDoc(collection(db, 'caseStudies'), newStudy);
      setStatus('✅ Case study added successfully!');
      setFormData({
        title: '',
        level: 'SL',
        topic: '',
        module: '',
        toolkit: '',
        caseText: '',
        dataTable: '',
        questions: ''
      });
    } catch (err) {
      console.error('Error saving case study:', err);
      setStatus('❌ Failed to save. Please check your inputs.');
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto bg-gray-50 min-h-screen">
      <header className="flex items-center mb-6">
        <img src={SkillNestLogo} alt="SkillNest Logo" className="h-10 w-auto mr-4" />
        <h1 className="text-3xl font-bold text-blue-700">Admin: Add Case Study</h1>
      </header>

      {status && <div className="mb-4 text-lg">{status}</div>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="title" placeholder="Title" value={formData.title} onChange={handleChange} className="w-full p-2 border rounded" required />
        <div className="flex space-x-4">
          <select name="level" value={formData.level} onChange={handleChange} className="p-2 border rounded w-1/3">
            <option value="SL">SL</option>
            <option value="HL">HL</option>
            <option value="SL/HL">SL/HL</option>
          </select>
          <input type="text" name="topic" placeholder="Topic" value={formData.topic} onChange={handleChange} className="p-2 border rounded w-1/3" required />
          <input type="text" name="module" placeholder="Module" value={formData.module} onChange={handleChange} className="p-2 border rounded w-1/3" />
        </div>
        <input type="text" name="toolkit" placeholder="Toolkit (optional)" value={formData.toolkit} onChange={handleChange} className="w-full p-2 border rounded" />

        <textarea name="caseText" rows="4" placeholder="Case Text (1 paragraph per line)" value={formData.caseText} onChange={handleChange} className="w-full p-2 border rounded font-mono" required />
        <textarea name="dataTable" rows="4" placeholder='Data Table (e.g. [{"label":"Revenue","value":"$3M"}])' value={formData.dataTable} onChange={handleChange} className="w-full p-2 border rounded font-mono" required />
        <textarea name="questions" rows="6" placeholder='Questions (JSON array)' value={formData.questions} onChange={handleChange} className="w-full p-2 border rounded font-mono" required />

        <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded">
          Save Case Study
        </button>
      </form>
    </div>
  );
};

export default AdminPanel;
