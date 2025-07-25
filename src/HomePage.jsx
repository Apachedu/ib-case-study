import React from 'react';
import { Link } from 'react-router-dom';
import { useCaseStudies } from './useCaseStudies';
import SkillNestLogo from './assets/SkillNestLogo.png'; // Make sure path is correct

const HomePage = () => {
  const { caseStudies, loading } = useCaseStudies();

  if (loading)
    return <p className="p-6 text-center text-gray-500">Loading case studies...</p>;

  return (
    <div className="max-w-5xl mx-auto p-6">
      {/* Header with logo */}
      <header className="flex items-center space-x-4 mb-10">
        <img src={SkillNestLogo} alt="SkillNest Logo" className="h-12" />
        <h1 className="text-4xl font-extrabold text-blue-700">IB Business Case Studies</h1>
      </header>

      {/* List of case studies */}
      <ul>
        {caseStudies.map((cs) => (
          <li
            key={cs.id}
            className="mb-6 p-6 rounded-lg shadow-md hover:shadow-lg transition cursor-pointer bg-white"
          >
            <Link
              to={`/case/${cs.id}`}
              className="font-semibold text-2xl text-blue-600 hover:underline"
            >
              {cs.title}
            </Link>
            <p className="mt-1 text-gray-600 text-lg">
              {cs.topic} — <span className="italic">{cs.level}</span>
            </p>
          </li>
        ))}
      </ul>

      {/* Footer copyright */}
      <footer className="mt-12 text-center text-gray-400 text-sm">
        &copy; 2025 SkillNestEdu. All rights reserved. © All case studies copyright protected.
      </footer>
    </div>
  );
};

export default HomePage;
