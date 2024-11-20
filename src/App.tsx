import React from 'react';
import NutritionLabel from './components/NutritionLabel';
import { mockData } from './data/mockData';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <NutritionLabel data={mockData} />
    </div>
  );
}

export default App;