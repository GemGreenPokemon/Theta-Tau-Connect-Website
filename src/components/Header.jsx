import React from 'react';
import thetaTauLogo from '../assets/theta-tau-logo.svg';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50 py-4">
      <div className="max-w-full mx-auto px-2 sm:px-4 lg:px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4 pl-2 sm:pl-4 lg:pl-8">
            <img src={thetaTauLogo} alt="Theta Tau Logo" className="w-12 h-12" />
            <div className="flex flex-col">
              <h2 className="text-xl font-semibold text-theta-red m-0">Theta Tau</h2>
              <p className="text-sm text-gray-600 m-0">Mu Delta Chapter</p>
            </div>
          </div>
          
          <nav className="pr-2 sm:pr-4 lg:pr-8">
            <ul className="flex space-x-4 sm:space-x-6 md:space-x-8 list-none m-0 p-0">
              <li><a href="#home" className="text-gray-800 font-medium hover:text-theta-red transition-colors">Home</a></li>
              <li><a href="#features" className="text-gray-800 font-medium hover:text-theta-red transition-colors">Features</a></li>
              <li><a href="#about" className="text-gray-800 font-medium hover:text-theta-red transition-colors">About</a></li>
              <li><a href="#contact" className="text-gray-800 font-medium hover:text-theta-red transition-colors">Contact</a></li>
              <li><a href="#privacy" className="text-gray-800 font-medium hover:text-theta-red transition-colors">Privacy</a></li>
              <li><a href="#terms" className="text-gray-800 font-medium hover:text-theta-red transition-colors">Terms</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header; 