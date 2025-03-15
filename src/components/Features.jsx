import React from 'react';

const Features = () => {
  const featuresList = [
    {
      id: 1,
      title: 'User Management & Authentication',
      description: 'Google Sign-In authentication with role-based access control for members, chairmen, and executive board.',
      icon: '👤'
    },
    {
      id: 2,
      title: 'Requirements Tracking',
      description: 'Track community service hours, professional development, and social events with visual progress indicators.',
      icon: '📊'
    },
    {
      id: 3,
      title: 'Event Management',
      description: 'Comprehensive event listing with details from Google Calendar, categorization, and attendance tracking.',
      icon: '📅'
    },
    {
      id: 4,
      title: 'Forms Integration',
      description: 'Seamless Google Forms integration for event check-ins with pre-filled user data.',
      icon: '📝'
    },
    {
      id: 5,
      title: 'Announcements',
      description: 'Chapter-wide announcements with a notification system for important updates.',
      icon: '📢'
    },
    {
      id: 6,
      title: 'Administrative Features',
      description: 'Role management, device synchronization, and configuration screens for Google services integration.',
      icon: '⚙️'
    }
  ];

  return (
    <section className="py-24 px-4 bg-theta-offwhite/30" id="features">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-theta-red mb-4">Key Features</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Designed specifically for the Theta Tau Mu Delta chapter</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresList.map(feature => (
            <div 
              key={feature.id} 
              className="bg-white rounded-lg p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg flex flex-col h-full border-t-4 border-theta-red"
            >
              <div className="text-5xl mb-6 bg-theta-red/10 h-16 w-16 flex items-center justify-center rounded-full text-theta-red">{feature.icon}</div>
              <h3 className="text-2xl font-semibold text-theta-red mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed flex-grow">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features; 