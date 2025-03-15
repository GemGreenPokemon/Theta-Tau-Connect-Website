import React from 'react';

const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-4 sm:px-8 pt-32 pb-24 bg-gradient-to-b from-[#8B0000] to-[#6b0000] min-h-screen" id="home">
      <div className="flex-1 max-w-2xl mb-12 md:mb-0">
        <h1 className="text-5xl font-bold mb-4 text-white leading-tight">Theta Tau Connect</h1>
        <p className="text-2xl text-theta-gold mb-2">A centralized platform for the Mu Delta chapter</p>
        <p className="text-xl text-white font-medium mb-6">Exclusively for Mu Delta Chapter at UC Merced</p>
        <div className="mb-8">
          <p className="text-lg text-white/90 leading-relaxed">Streamlining chapter activities, member requirements, events, and announcements</p>
        </div>
        <div className="flex gap-4">
          <a href="#features" className="inline-block px-6 py-3 rounded-full font-semibold bg-[#6b0000] text-white transition-all hover:bg-[#5a0000] hover:-translate-y-0.5 hover:shadow-md border-2 border-theta-gold">Explore Features</a>
          <a href="#about" className="inline-block px-6 py-3 rounded-full font-semibold bg-theta-gold text-theta-red transition-all hover:bg-yellow-400 hover:-translate-y-0.5 hover:shadow-md">Learn More</a>
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center">
        {/* Phone mockup with requirements tracking screen - increased size */}
        <div className="w-[340px] h-[680px] bg-white rounded-[36px] shadow-2xl overflow-hidden relative border-[12px] border-gray-800">
          {/* Status bar */}
          <div className="absolute top-0 left-0 right-0 h-7 bg-black/90 flex items-center justify-between px-5 z-10">
            <div className="text-white text-xs">4:58</div>
            <div className="flex items-center gap-1">
              <div className="text-white text-xs flex items-center">
                <span>••••</span>
                <span className="ml-1">📶</span>
                <span className="ml-1">94%</span>
              </div>
            </div>
          </div>
          
          <div className="w-full h-full bg-white pt-7 overflow-y-auto">
            {/* App header with title - shortened */}
            <div className="h-[60px] bg-[#8B0000] px-5 flex items-center justify-center">
              <h3 className="text-white font-bold text-2xl">Theta Tau</h3>
            </div>
            
            {/* Content area */}
            <div className="flex flex-col">
              {/* Community Service Section */}
              <div className="px-5 py-6">
                <h2 className="text-[#8B0000] text-2xl font-bold mb-5">Community Service</h2>
                
                <div className="bg-white rounded-lg shadow-md p-5 mb-7">
                  <div className="flex justify-between items-center mb-3">
                    <div>
                      <p className="text-gray-800 text-lg font-medium">General Service</p>
                      <p className="text-gray-700 text-base">9/8 hours</p>
                    </div>
                    <div className="bg-green-100 text-green-600 px-4 py-1 rounded-md text-sm font-medium">
                      COMPLETE
                    </div>
                  </div>
                  
                  <div className="w-full bg-green-500 h-2.5 rounded-full mb-5"></div>
                  
                  <p className="text-[#D4AF37] font-medium mb-3 text-base">Attended Events (3)</p>
                  
                  <div className="flex flex-wrap gap-3 mb-3">
                    <div className="bg-[#D4AF37]/10 border border-[#D4AF37] rounded-full px-4 py-1.5 text-sm">
                      <span>🌱 Campus Cleanup</span>
                      <span className="ml-1.5">3 hrs</span>
                    </div>
                    
                    <div className="bg-[#D4AF37]/10 border border-[#D4AF37] rounded-full px-4 py-1.5 text-sm">
                      <span>🌱 Food Drive</span>
                      <span className="ml-1.5">2 hrs</span>
                    </div>
                  </div>
                  
                  <button className="text-gray-500 bg-gray-100 rounded-full px-5 py-1.5 text-sm">
                    +1 more
                  </button>
                </div>
              </div>
              
              {/* Professional Development Section */}
              <div className="px-5 py-2">
                <h2 className="text-[#8B0000] text-2xl font-bold mb-5">Professional Development</h2>
                
                <div className="bg-white rounded-lg shadow-md p-5 mb-7">
                  <div className="flex justify-between items-center mb-3">
                    <div>
                      <p className="text-gray-800 text-lg font-medium">Workshop</p>
                      <p className="text-gray-700 text-base">2/1 events</p>
                    </div>
                    <div className="bg-green-100 text-green-600 px-4 py-1 rounded-md text-sm font-medium">
                      COMPLETE
                    </div>
                  </div>
                  
                  <div className="w-full bg-green-500 h-2.5 rounded-full mb-5"></div>
                  
                  <p className="text-[#D4AF37] font-medium mb-3 text-base">Attended Events</p>
                  
                  <div className="flex flex-wrap gap-3">
                    <div className="bg-[#D4AF37]/10 border border-[#D4AF37] rounded-full px-4 py-1.5 text-sm">
                      <span>Resume Workshop</span>
                    </div>
                    
                    <div className="bg-[#D4AF37]/10 border border-[#D4AF37] rounded-full px-4 py-1.5 text-sm">
                      <span>Mock Interview</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Social Events Section */}
              <div className="px-5 py-2">
                <h2 className="text-[#8B0000] text-2xl font-bold mb-5">Social Events</h2>
                
                <div className="bg-white rounded-lg shadow-md p-5 mb-7">
                  <div className="flex justify-between items-center mb-3">
                    <div>
                      <p className="text-gray-800 text-lg font-medium">Brotherhood</p>
                      <p className="text-gray-700 text-base">2/1 events</p>
                    </div>
                    <div className="bg-green-100 text-green-600 px-4 py-1 rounded-md text-sm font-medium">
                      COMPLETE
                    </div>
                  </div>
                  
                  <div className="w-full bg-green-500 h-2.5 rounded-full mb-5"></div>
                  
                  <p className="text-[#D4AF37] font-medium mb-3 text-base">Attended Events</p>
                  
                  <div className="flex flex-wrap gap-3">
                    <div className="bg-[#D4AF37]/10 border border-[#D4AF37] rounded-full px-4 py-1.5 text-sm">
                      <span>Brotherhood Dinner</span>
                    </div>
                    
                    <div className="bg-[#D4AF37]/10 border border-[#D4AF37] rounded-full px-4 py-1.5 text-sm">
                      <span>Game Night</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Bottom navigation */}
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-white border-t border-gray-200 flex justify-between items-center px-6">
              <div className="flex flex-col items-center">
                <div className="text-gray-400 text-lg">📅</div>
                <p className="text-[10px] text-gray-400">Events</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-[#8B0000] text-lg">📋</div>
                <p className="text-[10px] text-[#8B0000]">Reqs</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-gray-400 text-lg">📢</div>
                <p className="text-[10px] text-gray-400">Alerts</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-gray-400 text-lg">👤</div>
                <p className="text-[10px] text-gray-400">Profile</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-gray-400 text-lg">⚙️</div>
                <p className="text-[10px] text-gray-400">Settings</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 