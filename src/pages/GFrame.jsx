// components/GFrame.jsx
import React from "react";


function GFrame({ link }) {
  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gray-100 py-10 px-4">
      <div className="w-full max-w-4xl h-[80vh] rounded-lg overflow-hidden shadow-xl border">
        <iframe
          src={link}
          title="Google Form"
          className="w-full h-full"
          frameBorder="0"
          allowFullScreen
        />
      </div>
    </div>
  );
}

export default GFrame;
