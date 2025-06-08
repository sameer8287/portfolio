import React from 'react';
import { GithubIcon, LinkedinIcon, MailIcon } from 'lucide-react';
export const Footer = () => {
  const contactLinks = [{
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/sameer-ab515a214/',
    icon: <LinkedinIcon size={20} />
  }, {
    name: 'GitHub',
    url: 'https://github.com/sameer8287',
    icon: <GithubIcon size={20} />
  }, {
    name: 'Email',
    url: 'mailto:sameerflutterdev@gmail.com',
    icon: <MailIcon size={20} />
  }];
  return <footer className="bg-blue-800 text-white py-12">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-bold mb-8">Connect With Me</h2>
          <div className="flex gap-6 mb-8">
            {contactLinks.map((link, index) => <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" className="bg-blue-700 hover:bg-blue-600 p-3 rounded-full transition-colors" aria-label={link.name}>
                {link.icon}
              </a>)}
          </div>
          <div className="text-center">
            <p className="mb-1">sameerflutterdev@gmail.com</p>
            <p className="text-blue-200">
              © {new Date().getFullYear()} Sameer. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>;
};