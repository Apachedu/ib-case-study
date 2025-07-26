// src/components/Hints.jsx
import React from 'react';

const Hints = () => {
  // You can pass props for dynamic content, here is a static example:
  return (
    <section className="mt-10 p-4 border border-green-300 rounded bg-green-50">
      <h2 className="text-2xl font-bold text-green-700 mb-4">Helpful Hints & Resources</h2>
      
      <div className="mb-3">
        <h3 className="font-semibold text-green-800">Key Concepts to Review:</h3>
        <ul className="list-disc list-inside text-green-700">
          <li><a href="https://www.investopedia.com/terms/e/elasticity.asp" target="_blank" rel="noreferrer" className="underline hover:text-green-900">Price Elasticity of Demand</a></li>
          <li><a href="https://www.porteranalysis.com/porters-five-forces-analysis/" target="_blank" rel="noreferrer" className="underline hover:text-green-900">Porter’s Five Forces</a></li>
          <li><a href="https://www.investopedia.com/terms/c/cost-plus-pricing.asp" target="_blank" rel="noreferrer" className="underline hover:text-green-900">Cost-Plus Pricing</a></li>
        </ul>
      </div>

      <div className="mb-3">
        <h3 className="font-semibold text-green-800">Recommended Toolkit:</h3>
        <ul className="list-disc list-inside text-green-700">
          <li>Elasticity Analysis</li>
          <li>Porter’s Five Forces</li>
          <li>Cost-Plus Pricing Methods</li>
        </ul>
      </div>

      <div>
        <h3 className="font-semibold text-green-800">Additional Resources:</h3>
        <p className="text-green-700">
          See IB Business Management guide section 4.5 for detailed pricing strategies and economic concepts.
        </p>
      </div>
    </section>
  );
};

export default Hints;
