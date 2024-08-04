import React from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './index.css'
import Navbar from './components/navbar';


function App() {
  return (

    <div className="container-fluid h-screen bg-yellow-400 mx-auto  text-center">
      <Navbar />
      <div className="flex justify-center items-center space-x-10">
        <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">
          <img src={viteLogo} className="h-32 p-1 transition-filter duration-300  hover:drop-shadow-lg" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img src={reactLogo} className="h-32 p-1 transition-filter duration-300 hover:drop-shadow-lg" alt="React logo" />
        </a>
      </div>
      <h1 className="font-bold text-4xl mt-8">Vite + React</h1>
      <h1 className=" font-bold underline">Hello world!</h1>
      <div className="card p-8">
        <div className=''>
          <button className="btn btn-primary mr-3">Primary Button</button>
          <button className="btn btn-secondary">Secondary Button</button>
          <div className='m-5'>
            <button className=" btn btn-primary mr-3">click me</button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Button
            </button>
            <button className="btn btn-blue">
              Button
            </button>
          </div>

          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
      </div>
      <p className="text-gray-500">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
