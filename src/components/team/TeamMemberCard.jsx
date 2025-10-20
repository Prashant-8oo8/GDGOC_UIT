import React from 'react';

const TeamMemberCard = ({ 
  name, 
  role, 
  image, 
  linkedin, 
  github, 
  insta, 
  contact, 
  description,
  hoverColor 
}) => {
  return (
    <div
      className={`max-w-xs w-full group bg-white shadow-md rounded-lg p-6 text-center transition duration-300 transform hover:scale-105 hover:shadow-xl ${hoverColor}`}
    >
      <img
        src={image}
        alt={name}
        className="w-24 h-24 rounded-full mx-auto object-cover mb-4 border-4 border-white group-hover:border-gray-100 transition"
      />
      <h3 className="text-lg font-semibold group-hover:text-white transition">{name}</h3>
      <p className="text-sm text-gray-600 group-hover:text-gray-200">{role}</p>

      <p className="text-xs text-gray-500 group-hover:text-gray-200 mt-2">{description}</p> {/* Email contact */}

      <div className="flex justify-center space-x-4 mt-4">
        {linkedin && (
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 group-hover:text-white transition"
          >
            <i className="fab fa-linkedin text-xl"></i>
          </a>
        )}
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:text-black group-hover:text-white transition"
          >
            <i className="fab fa-github text-xl"></i>
          </a>
        )}
        {insta && (
          <a
            href={insta}
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-600 hover:text-pink-800 group-hover:text-white transition"
          >
            <i className="fab fa-instagram text-xl"></i>
          </a>
        )}
        {contact && (
          <a
            href={`mailto:${contact}`}
            className="text-gray-600 hover:text-black group-hover:text-white transition"
          >
            <i className="fas fa-envelope text-xl"></i> {/* Email icon */}
          </a>
        )}
      </div>
    </div>
  );
};

export default TeamMemberCard;
