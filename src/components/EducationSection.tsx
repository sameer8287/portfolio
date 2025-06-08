import React from 'react';
import { GraduationCapIcon } from 'lucide-react';
export const EducationSection = () => {
  return <section className="py-16 bg-gray-50" id="education">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <h2 className="text-3xl font-bold mb-12 text-center">Education</h2>
        <div className="max-w-3xl mx-auto">
          <div className="flex">
            <div className="mr-4 mt-1">
              <div className="bg-blue-100 p-2 rounded-full">
                <GraduationCapIcon size={20} className="text-blue-600" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold">
                B.Tech Computer Science & Engineering
              </h3>
              <div className="text-lg text-blue-600 mb-1">
                Aravali College of Engineering & Management
              </div>
              <div className="text-gray-500 mb-2">CGPA: 8.0</div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};