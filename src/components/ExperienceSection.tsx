import React from 'react';
import { BriefcaseIcon } from 'lucide-react';
export const ExperienceSection = () => {
  const experiences = [{
    role: 'SDE I, Mobile Developer',
    company: 'Dhwani RIS',
    period: 'Sep 2024 – Present',
    description: ''
  }, {
    role: 'Software Developer',
    company: 'Extension Technologies',
    period: 'Apr 2023 – Aug 2024',
    description: ''
  }];
  return <section className="py-16 bg-white" id="experience">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <h2 className="text-3xl font-bold mb-12 text-center">Experience</h2>
        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => <div key={index} className="mb-8 flex">
              <div className="mr-4 mt-1">
                <div className="bg-blue-100 p-2 rounded-full">
                  <BriefcaseIcon size={20} className="text-blue-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold">{exp.role}</h3>
                <div className="text-lg text-blue-600 mb-1">{exp.company}</div>
                <div className="text-gray-500 mb-2">{exp.period}</div>
                {exp.description && <p className="text-gray-700">{exp.description}</p>}
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};