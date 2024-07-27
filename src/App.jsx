import React from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './index.css'; // Ensure this import is here

function App() {
  return (
    <div className="max-w-screen-xl h-screen mx-auto p-8 text-center bg-slate-400">
      <div className="flex justify-center items-center space-x-8">
        <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">
          <img src={viteLogo} className="h-24 p-6 transition-filter duration-300 will-change-transform hover:drop-shadow-lg" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img src={reactLogo} className="h-24 p-6 transition-filter duration-300 will-change-transform hover:drop-shadow-lg" alt="React logo" />
        </a>
      </div>
      <h1 className=" text-4xl font-bold ">Vite + React</h1>
      <h1 className=" text-2xl font-bold underline">Hello world!</h1>
      <div className="p-8">
        <h4 className="text-cyan-600 p-2">click me</h4>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="text-gray-500">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
