import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 py-8 border-t">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between text-sm">
          

          <div className="mb-4 md:mb-0 flex items-center space-x-2">
            <img 
              src="https://www.gstatic.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" 
              alt="Google Logo" 
              className="w-20"
            />
            <span>GDG UIT &copy; 2025</span>
          </div>

          {/* Center: Links */}
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a href="https://developers.google.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
              Developers
            </a>
            <a href="https://gdg.community.dev" target="_blank" rel="noopener noreferrer" className="hover:underline">
              GDG
            </a>
            <a href="https://about.google" target="_blank" rel="noopener noreferrer" className="hover:underline">
              About
            </a>
            <a href="https://www.google.com/privacy/" target="_blank" rel="noopener noreferrer" className="hover:underline">
              Privacy
            </a>
          </div>

          {/* Right: Contact */}
          <div>
            <p className="text-sm">contact@gdg-uit.dev</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
