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

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyAxns05_hEcEIoh-qmjO1ksVJjdvRDP7n0",
  authDomain: "ibcasestudies-1784e.firebaseapp.com",
  projectId: "ibcasestudies-1784e",
  storageBucket: "ibcasestudies-1784e.appspot.com",
  messagingSenderId: "547857666534",
  appId: "1:547857666534:web:0970ef90482e387b3bc627",
  measurementId: "G-8V4WGJD9HT"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function getCaseStudies() {
  const querySnapshot = await getDocs(collection(db, "caseStudies"));
  const studies = [];
  querySnapshot.forEach(docSnap => {
    studies.push({ id: docSnap.id, ...docSnap.data() });
  });
  return studies;
}

export function CaseStudyForm({ selectedCase, refresh }) {
  const [formData, setFormData] = useState({
    title: '',
    level: '',
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
        ...selectedCase,
        toolkit: selectedCase.toolkit ? selectedCase.toolkit.join(", ") : '',
        dataTable: selectedCase.dataTable ? JSON.stringify(selectedCase.dataTable, null, 2) : '',
        questions: selectedCase.questions ? JSON.stringify(selectedCase.questions, null, 2) : ''
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
        toolkit: formData.toolkit.split(",").map(item => item.trim()),
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
        level: '',
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
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <input name="title" value={formData.title} onChange={handleChange} placeholder="Title" required />
      <input name="level" value={formData.level} onChange={handleChange} placeholder="Level" />
      <input name="topic" value={formData.topic} onChange={handleChange} placeholder="Topic" />
      <input name="module" value={formData.module} onChange={handleChange} placeholder="Module" />
      <input name="toolkit" value={formData.toolkit} onChange={handleChange} placeholder="Toolkit (comma-separated)" />
      <textarea name="caseText" value={formData.caseText} onChange={handleChange} placeholder="Case Text" rows={5} />
      <textarea name="dataTable" value={formData.dataTable} onChange={handleChange} placeholder="Data Table (JSON format)" rows={5} />
      <textarea name="questions" value={formData.questions} onChange={handleChange} placeholder="Questions (JSON format)" rows={5} />
      <button type="submit">Save Case Study</button>
    </form>
  );
}
