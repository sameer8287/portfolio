import React from 'react';
import { ExternalLinkIcon } from 'lucide-react';
export const ProjectsSection = () => {
  const projects = [{
    name: 'Resilience Connect',
    description: 'Community resilience app, used by 1000+ users.',
    link: 'https://play.google.com/store/apps/details?id=pci.resilienceconnect',
    linkText: 'View on Play Store',
    image: "/resilience_connect_tumbnail.webp"
  }, {
    name: 'WHO VPD App',
    description: 'Offline-first disease reporting app for doctors.',
    link: 'https://stgutthaanui.dhwaniris.in/',
    linkText: 'View Demo',
    image: "/flutter_thumbnail.jpg"
  }, {
    name: 'UNDP Test Portal',
    description: 'AI-based voice-enabled certification portal for disabled users.',
    link: 'https://stgutthaanui.dhwaniris.in/',
    linkText: 'Visit',
    image: "/flutter_thumbnail.jpg"
  }, {
    name: 'Spring House App',
    description: 'Booking system integrated with ERP for coworking spaces.',
    link: 'https://play.google.com/store/apps/details?id=com.extension.springhouse.apk',
    linkText: 'View on Play Store',
    image: "/spring_house_thubmnail.webp"
  }, {
    name: 'CRM App',
    description: 'Custom CRM for sales lead and activity management.',
    link: 'https://play.google.com/store/apps/details?id=com.excitor.salescrm',
    linkText: 'View on Play Store',
    image: "/crm_app_thumbnail.webp"
  }];
  return <section className="py-16 bg-gray-50" id="projects">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="h-48 overflow-hidden">
                <img src={project.image} alt={project.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium">
                  {project.linkText}
                  <ExternalLinkIcon size={16} className="ml-1" />
                </a>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};