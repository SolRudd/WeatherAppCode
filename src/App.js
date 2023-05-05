import React from 'react';
import Weather from './Weather';

function App() {
  return (
    <div className="bg-gray-900 min-h-screen flex items-center justify-center">
      <div className="bg-gray-800 p-10 rounded-lg shadow-md w-11/12 lg:w-3/4 xl:w-2/4">
        <h1 className="text-3xl font-semibold text-white text-center mb-5">Weather App</h1>
        <Weather />
      </div>
    </div>
  );
}

export default App;
