// src/firebaseConfig.jsx
import React, { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  doc,
  updateDoc
} from 'firebase/firestore';

// Firebase configs for multiple projects
const firebaseConfigs = {
  main: {
    apiKey: "AIzaSyAxns05_hEcEIoh-qmjO1ksVJjdvRDP7n0",
    authDomain: "ibcasestudies-1784e.firebaseapp.com",
    projectId: "ibcasestudies-1784e",
    storageBucket: "ibcasestudies-1784e.appspot.com",
    messagingSenderId: "547857666534",
    appId: "1:547857666534:web:0970ef90482e387b3bc627",
    measurementId: "G-8V4WGJD9HT"
  },
  webinar: {
    apiKey: "AIzaSyB4_scj4_g2c7x3oojobMBuoGJK4Vl6wMo",
    authDomain: "ibcasestudies-webinar.firebaseapp.com",
    projectId: "ibcasestudies-webinar",
    storageBucket: "ibcasestudies-webinar.firebasestorage.app",
    messagingSenderId: "401140167731",
    appId: "1:401140167731:web:c72788200c30da79951f46"
  }
};

// Switch active Firebase project here:
const ACTIVE_CONFIG = firebaseConfigs.main; // or firebaseConfigs.webinar

// Initialize Firebase
const app = initializeApp(ACTIVE_CONFIG);
const db = getFirestore(app);

// Fetch case studies from Firestore
export async function getCaseStudies() {
  try {
    const querySnapshot = await getDocs(collection(db, "caseStudies"));
    const studies = [];
    querySnapshot.forEach(docSnap => {
      studies.push({ id: docSnap.id, ...docSnap.data() });
    });
    return studies;
  } catch (error) {
    console.error("Error fetching case studies:", error);
    return [];
  }
}

// Form component to add/update case studies
export function CaseStudyForm({ selectedCase, refresh }) {
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

  useEffect(() => {
    if (selectedCase) {
      setFormData({
        title: selectedCase.title || '',
        level: selectedCase.level || 'SL',
        topic: selectedCase.topic || '',
        module: selectedCase.module || '',
        toolkit: (selectedCase.toolkit || []).join(', '),
        caseText: selectedCase.caseText || '',
        dataTable: selectedCase.dataTable ? JSON.stringify(selectedCase.dataTable, null, 2) : '',
        questions: selectedCase.questions ? JSON.stringify(selectedCase.questions, null, 2) : ''
      });
    } else {
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
    }
  }, [selectedCase]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const dataToSave = {
        ...formData,
        toolkit: formData.toolkit.split(',').map(item => item.trim()),
        dataTable: JSON.parse(formData.dataTable),
        questions: JSON.parse(formData.questions)
      };

      if (selectedCase && selectedCase.id) {
        const docRef = doc(db, "caseStudies", selectedCase.id);
        await updateDoc(docRef, dataToSave);
      } else {
        await addDoc(collection(db, "caseStudies"), dataToSave);
      }

      alert('Case study saved successfully!');
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
      refresh();
    } catch (error) {
      alert('Error saving case study: ' + error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-6 bg-white rounded shadow max-w-4xl mx-auto">
      <h2 className="text-xl font-bold text-blue-700 mb-4">Add / Edit Case Study</h2>

      <input
        name="title"
        value={formData.title}
        onChange={handleChange}
        placeholder="Title"
        required
        className="w-full border rounded px-3 py-2"
      />

      <select
        name="level"
        value={formData.level}
        onChange={handleChange}
        className="w-full border rounded px-3 py-2"
      >
        <option value="SL">SL</option>
        <option value="HL">HL</option>
        <option value="SL/HL">SL/HL</option>
      </select>

      <input
        name="topic"
        value={formData.topic}
        onChange={handleChange}
        placeholder="Topic"
        className="w-full border rounded px-3 py-2"
        required
      />

      <input
        name="module"
        value={formData.module}
        onChange={handleChange}
        placeholder="Module"
        className="w-full border rounded px-3 py-2"
      />

      <input
        name="toolkit"
        value={formData.toolkit}
        onChange={handleChange}
        placeholder="Toolkit (comma-separated)"
        className="w-full border rounded px-3 py-2"
      />

      <textarea
        name="caseText"
        value={formData.caseText}
        onChange={handleChange}
        placeholder="Case Text"
        rows={6}
        className="w-full border rounded px-3 py-2"
        required
      />

      <textarea
        name="dataTable"
        value={formData.dataTable}
        onChange={handleChange}
        placeholder="Data Table (JSON format)"
        rows={6}
        className="w-full border rounded px-3 py-2 font-mono text-sm"
        required
      />

      <textarea
        name="questions"
        value={formData.questions}
        onChange={handleChange}
        placeholder="Questions (JSON format with id, text, marks, banding, sampleAnswer)"
        rows={8}
        className="w-full border rounded px-3 py-2 font-mono text-sm"
        required
      />

      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded transition"
      >
        Save Case Study
      </button>
    </form>
  );
}
