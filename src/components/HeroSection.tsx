import React from 'react';
import { Mail, MapPin, Linkedin } from 'lucide-react';
export const HeroSection = () => {
  return <section className="w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-lg">
            <img src="/profile.jpg" alt="Sameer" className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Sameer</h1>
            <h2 className="text-xl md:text-2xl mb-6">
              Flutter Developer | Mobile & Web Apps Specialist
            </h2>
            <div className="flex flex-col md:flex-row gap-4 md:gap-8 mb-8">
              <div className="flex items-center gap-2">
                <Mail size={18} />
                <span>sameerflutterdev@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={18} />
                <span>Faridabad, Haryana</span>
              </div>
            </div>
            <a href="https://www.linkedin.com/in/sameer-ab515a214/" target="_blank" rel="noopener noreferrer" className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-md hover:bg-blue-50 transition-colors">
              Let's Connect
            </a>
          </div>
        </div>
      </div>
    </section>;
};