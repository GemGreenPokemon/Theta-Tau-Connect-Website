import React from 'react';

const About = () => {
  return (
    <section className="py-24 px-4 bg-theta-red text-white" id="about">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">About the App</h2>
          <p className="text-xl text-theta-gold">The technology behind our solution</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-8">
          <div className="about-text">
            <h3 className="text-2xl font-bold text-theta-gold mb-6">Core Purpose</h3>
            <ul className="space-y-4 pl-6 mb-8">
              <li className="text-white/90 leading-relaxed">
                <strong className="text-theta-gold">Centralize Information:</strong> Provides organized access to Theta Tau-related information including event details, attendance records, and active member requirements.
              </li>
              <li className="text-white/90 leading-relaxed">
                <strong className="text-theta-gold">Tool Integration:</strong> Streamlines access to Google tools (Calendar, Sheets, Forms) used by chapter members.
              </li>
              <li className="text-white/90 leading-relaxed">
                <strong className="text-theta-gold">Mobile Accessibility:</strong> Simplifies access to chapter resources on mobile devices.
              </li>
            </ul>
            
            <h3 className="text-2xl font-bold text-theta-gold mb-6">Technical Features</h3>
            <ul className="space-y-3 pl-6">
              <li className="text-white/90 flex items-center">
                <span className="inline-block w-2 h-2 bg-theta-gold rounded-full mr-2"></span>
                Background data loading for improved performance
              </li>
              <li className="text-white/90 flex items-center">
                <span className="inline-block w-2 h-2 bg-theta-gold rounded-full mr-2"></span>
                Smart caching system for offline access
              </li>
              <li className="text-white/90 flex items-center">
                <span className="inline-block w-2 h-2 bg-theta-gold rounded-full mr-2"></span>
                Firebase integration for real-time updates
              </li>
              <li className="text-white/90 flex items-center">
                <span className="inline-block w-2 h-2 bg-theta-gold rounded-full mr-2"></span>
                Cross-platform support (Android and iOS)
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-theta-gold mb-6">Technology Stack</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#6b0000] p-6 rounded-lg shadow-sm transition-transform hover:-translate-y-1 border-t-4 border-theta-gold hover:bg-[#5a0000]">
                <h4 className="text-lg font-semibold text-theta-gold mb-2">Frontend</h4>
                <p className="text-white/90">Flutter for cross-platform development</p>
              </div>
              <div className="bg-[#6b0000] p-6 rounded-lg shadow-sm transition-transform hover:-translate-y-1 border-t-4 border-theta-gold hover:bg-[#5a0000]">
                <h4 className="text-lg font-semibold text-theta-gold mb-2">Backend</h4>
                <p className="text-white/90">Firebase (Firestore, Authentication)</p>
              </div>
              <div className="bg-[#6b0000] p-6 rounded-lg shadow-sm transition-transform hover:-translate-y-1 border-t-4 border-theta-gold hover:bg-[#5a0000]">
                <h4 className="text-lg font-semibold text-theta-gold mb-2">APIs</h4>
                <p className="text-white/90">Google Calendar, Google Forms, Google Sheets</p>
              </div>
              <div className="bg-[#6b0000] p-6 rounded-lg shadow-sm transition-transform hover:-translate-y-1 border-t-4 border-theta-gold hover:bg-[#5a0000]">
                <h4 className="text-lg font-semibold text-theta-gold mb-2">Authentication</h4>
                <p className="text-white/90">Google Sign-In</p>
              </div>
              <div className="bg-[#6b0000] p-6 rounded-lg shadow-sm transition-transform hover:-translate-y-1 border-t-4 border-theta-gold hover:bg-[#5a0000]">
                <h4 className="text-lg font-semibold text-theta-gold mb-2">Notifications</h4>
                <p className="text-white/90">Firebase Cloud Messaging</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 