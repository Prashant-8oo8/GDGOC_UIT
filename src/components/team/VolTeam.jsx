import React from "react";
import { motion } from "framer-motion";

const VolunteerCard = ({ photo, name, postition, intrest, description, linkedin, github, insta }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden p-4 w-full max-w-xs"
    >
      <div className="w-full h-40 bg-gray-100 rounded-md overflow-hidden mb-4">
        {photo ? (
          <img src={photo} alt={name} className="object-cover w-full h-full" />
        ) : (
          <div className="flex items-center justify-center h-full text-gray-400">No Photo</div>
        )}
      </div>
      <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
      <p className="text-sm text-gray-600 italic">{postition || intrest}</p>
      <p className="mt-2 text-sm text-gray-700">{description}</p>

      <div className="mt-4 flex gap-3">
        {linkedin && <a href={linkedin} target="_blank" rel="noopener noreferrer">🔗</a>}
        {github && <a href={github} target="_blank" rel="noopener noreferrer">💻</a>}
        {insta && <a href={insta} target="_blank" rel="noopener noreferrer">📷</a>}
      </div>
    </motion.div>
  );
};

export default VolunteerCard;
