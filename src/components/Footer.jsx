import React from 'react';
import thetaTauLogo from '../assets/theta-tau-logo.svg';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-theta-red text-white py-16 px-4" id="contact">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-12">
          <div className="lg:col-span-1">
            <div className="flex flex-col items-start">
              <div className="relative mb-6 group">
                {/* Outer glow/border */}
                <div className="absolute inset-0 bg-theta-gold rounded-full blur-md opacity-60 group-hover:opacity-80 transition-opacity"></div>
                {/* Inner white circle */}
                <div className="absolute inset-0.5 bg-white rounded-full"></div>
                {/* Logo */}
                <img 
                  src={thetaTauLogo} 
                  alt="Theta Tau Logo" 
                  className="relative w-24 h-24 p-2 rounded-full transition-transform duration-300 group-hover:scale-105" 
                />
              </div>
              <p className="text-theta-gold font-semibold text-lg tracking-wide">Theta Tau - Mu Delta Chapter</p>
            </div>
          </div>
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-6 relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-theta-gold">Navigation</h3>
              <ul className="space-y-3">
                <li><a href="#home" className="text-white hover:text-theta-gold transition-colors">Home</a></li>
                <li><a href="#features" className="text-white hover:text-theta-gold transition-colors">Features</a></li>
                <li><a href="#about" className="text-white hover:text-theta-gold transition-colors">About</a></li>
                <li><a href="#contact" className="text-white hover:text-theta-gold transition-colors">Contact</a></li>
                <li><a href="#privacy" className="text-white hover:text-theta-gold transition-colors">Privacy Policy</a></li>
                <li><a href="#terms" className="text-white hover:text-theta-gold transition-colors">Terms of Service</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-6 relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-theta-gold">Contact</h3>
              <ul className="space-y-3">
                <li><a href="https://www.mdthetatau.org/index.html" target="_blank" rel="noopener noreferrer" className="text-white hover:text-theta-gold transition-colors">Official Website</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-6 relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-theta-gold">Social</h3>
              <div className="flex flex-col space-y-3">
                <a href="https://www.instagram.com/mdthetatau/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-theta-gold transition-colors">Instagram</a>
                <a href="https://www.linkedin.com/company/theta-tau-mu-delta-chapter" target="_blank" rel="noopener noreferrer" className="text-white hover:text-theta-gold transition-colors">LinkedIn</a>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center pt-8 border-t border-white/20">
          <p className="text-white/70 text-sm">&copy; {currentYear} Theta Tau Mu Delta Chapter. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 