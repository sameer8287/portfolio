import React from 'react';
export const AboutSection = () => {
  const techLogos = [{
    name: 'Flutter',
    url: 'https://storage.googleapis.com/cms-storage-bucket/4fd5520fe28ebf839174.svg'
  }, {
    name: 'Dart',
    url: "/dart_logo.png"
  }, {
    name: 'Firebase',
    url: 'https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg'
  }, {
    name: 'GitHub',
    url: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png'
  }];
  const skillsData = {
    stateManagement: [{
      name: 'Provider',
      level: 95
    }, {
      name: 'GetX',
      level: 90
    }, {
      name: 'Riverpod',
      level: 85
    }],
    tools: [{
      name: 'Flutter',
      level: 95
    }, {
      name: 'Dart',
      level: 90
    }, {
      name: 'Firebase',
      level: 85
    }, {
      name: 'REST APIs',
      level: 90
    }, {
      name: 'SQLite',
      level: 80
    }, {
      name: 'Git',
      level: 85
    }],
    platforms: [{
      name: 'Android Studio',
      level: 90
    }, {
      name: 'Xcode',
      level: 85
    }, {
      name: 'VS Code',
      level: 95
    }]
  };
  const SkillBar = ({
    name,
    level
  }: {
    name: string;
    level: number;
  }) => <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-gray-700">{name}</span>
        <span className="text-sm font-medium text-blue-600">{level}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div className="bg-blue-600 h-2.5 rounded-full transition-all duration-500 ease-out" style={{
        width: `${level}%`
      }} />
      </div>
    </div>;
  return <section className="py-16 bg-white" id="about">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
        <div className="max-w-3xl mx-auto text-lg text-gray-700 mb-10 text-center">
          <p>
            I'm a Flutter Developer with experience in scalable mobile/web apps,
            offline-first architecture, and speech-enabled accessibility tools.
            Passionate about crafting seamless user experiences and eager to
            grow into a full-stack Flutter engineer.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-8 md:gap-12 my-10">
          {techLogos.map((logo, index) => <div key={index} className="flex flex-col items-center transform hover:scale-110 transition-transform">
              <div className="bg-gray-100 p-4 rounded-full h-20 w-20 flex items-center justify-center shadow-md">
                <img src={logo.url} alt={`${logo.name} logo`} className="h-12 object-contain" />
              </div>
              <span className="mt-2 text-sm font-medium">{logo.name}</span>
            </div>)}
        </div>
        <div className="mt-12">
          <h3 className="text-2xl font-semibold mb-6 text-center">Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h4 className="font-semibold mb-4 text-blue-600">
                State Management
              </h4>
              {skillsData.stateManagement.map((skill, index) => <SkillBar key={index} name={skill.name} level={skill.level} />)}
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h4 className="font-semibold mb-4 text-blue-600">
                Tools & Technologies
              </h4>
              {skillsData.tools.map((skill, index) => <SkillBar key={index} name={skill.name} level={skill.level} />)}
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h4 className="font-semibold mb-4 text-blue-600">Platforms</h4>
              {skillsData.platforms.map((skill, index) => <SkillBar key={index} name={skill.name} level={skill.level} />)}
            </div>
          </div>
        </div>
      </div>
    </section>;
};