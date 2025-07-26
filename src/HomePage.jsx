import React from 'react';
import { Link } from 'react-router-dom';
import { useCaseStudies } from './useCaseStudies';
import SkillNestLogo from './assets/SkillNestLogo.png';

const HomePage = () => {
  const { caseStudies, loading } = useCaseStudies();

  if (loading) return <p className="text-center text-gray-400 mt-10">Loading case studies...</p>;

  return (
    <div className="max-w-6xl mx-auto px-6 py-10 font-sans">
      {/* Header */}
      <header className="flex items-center justify-between mb-10">
        <div className="flex items-center space-x-4">
          <img src={SkillNestLogo} alt="SkillNest Logo" className="h-10" />
          <h1 className="text-3xl font-bold text-brandBlue">SkillNest IB Business</h1>
        </div>
      </header>

      {/* Case Study List */}
      <div className="grid md:grid-cols-2 gap-6">
        {caseStudies.map(cs => (
          <Link
            key={cs.id}
            to={`/case/${cs.id}`}
            className="p-6 bg-white rounded-xl border shadow hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold text-brandBlue">{cs.title}</h2>
            <p className="text-gray-600">{cs.topic} — <span className="italic">{cs.level}</span></p>
          </Link>
        ))}
      </div>

      <footer className="text-center mt-12 text-sm text-gray-400">
        &copy; 2025 SkillNestEdu. All rights reserved.
      </footer>
    </div>
  );
};

export default HomePage;
