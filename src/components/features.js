import React from 'react';

const Features = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Feature 1</h3>
            <p>Explanation of Feature 1.</p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Feature 2</h3>
            <p>Explanation of Feature 2.</p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Feature 3</h3>
            <p>Explanation of Feature 3.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
