import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from './firebase';

const TABS = ['Overview', 'Data', 'Questions'];

const CaseStudyPage = () => {
  const { id } = useParams();
  const [caseStudy, setCaseStudy] = useState(null);
  const [loading, setLoading] = useState(true);
  const [tab, setTab] = useState(TABS[0]);
  const [responses, setResponses] = useState({});
  const [feedback, setFeedback] = useState({});
  const [showHelp, setShowHelp] = useState(true);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const fetchStudy = async () => {
      try {
        const docRef = doc(db, 'caseStudies', id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setCaseStudy(docSnap.data());
        } else {
          console.error('No such case study!');
        }
      } catch (error) {
        console.error('Error loading case study:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStudy();
  }, [id]);

  if (loading) return <p className="p-6">Loading...</p>;
  if (!caseStudy) return <p className="p-6 text-red-600">Case study not found.</p>;

  const handleChange = (qId, val) => {
    setResponses(prev => ({ ...prev, [qId]: val }));
  };

  const handleSubmit = () => {
    const newFeedback = {};
    caseStudy.questions.forEach(q => {
      if (!responses[q.id] || responses[q.id].trim() === '') {
        newFeedback[q.id] = '❌ Please provide an answer.';
      } else {
        const bandDescriptors = q.banding
          ? q.banding.map(desc => `• ${desc}`).join('\n')
          : '';
        newFeedback[q.id] = `✅ Good start! Include: ${q.sampleAnswer.substring(0, 80)}...\n\nBand descriptors:\n${bandDescriptors}`;
      }
    });
    setFeedback(newFeedback);
    setSubmitted(true);
  };

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-extrabold text-blue-700 mb-6">{caseStudy.title}</h1>

      {/* Tabs */}
      <nav className="flex space-x-4 border-b border-blue-300 mb-6">
        {TABS.map(t => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`py-2 px-4 font-semibold ${tab === t ? 'border-b-4 border-blue-600 text-blue-600' : 'text-gray-500'}`}
          >
            {t}
          </button>
        ))}
      </nav>

      {/* Tab Content */}
      {tab === 'Overview' && (
        <section className="space-y-4 text-lg">
          {caseStudy.caseText?.map((para, idx) => (
            <p key={idx}>{para}</p>
          ))}
        </section>
      )}

      {tab === 'Data' && (
        <section className="font-mono text-base">
          <h2 className="font-bold mb-3">Data Table</h2>
          <ul className="list-disc list-inside">
            {caseStudy.dataTable?.map((d, idx) => (
              <li key={idx}><strong>{d.label}:</strong> {d.value}</li>
            ))}
          </ul>
        </section>
      )}

      {tab === 'Questions' && (
        <section className="space-y-8">
          <button
            onClick={() => setShowHelp(!showHelp)}
            className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            {showHelp ? 'Hide Help' : 'Show Help'}
          </button>

          {caseStudy.questions.map(q => (
            <div key={q.id} className="p-4 bg-blue-50 rounded border border-blue-200">
              <p className="font-bold text-lg mb-2">{q.text} ({q.marks} marks)</p>
              <textarea
                rows={q.marks >= 10 ? 8 : 4}
                value={responses[q.id] || ''}
                onChange={(e) => handleChange(q.id, e.target.value)}
                className="w-full p-3 border border-blue-300 rounded"
                disabled={submitted}
              />
              {showHelp && (
                <div className="mt-3 text-blue-800 text-sm bg-white p-3 rounded border border-blue-200">
                  <strong>Hint:</strong> {q.sampleAnswer}
                  <ul className="list-disc ml-6 mt-2">
                    {q.banding.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                </div>
              )}
              {submitted && feedback[q.id] && (
                <div className="mt-4 bg-yellow-100 p-3 border-l-4 border-yellow-500 rounded">
                  <strong>Feedback:</strong> {feedback[q.id]}
                </div>
              )}
            </div>
          ))}

          {!submitted && (
            <button
              onClick={handleSubmit}
              className="mt-6 px-6 py-3 bg-green-600 text-white rounded hover:bg-green-700"
            >
              Submit Answers
            </button>
          )}
        </section>
      )}
    </div>
  );
};

export default CaseStudyPage;
