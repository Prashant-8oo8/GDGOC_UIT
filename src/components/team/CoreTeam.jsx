import React from 'react';
import { motion } from 'framer-motion';
import { core } from './AllMember'; // Adjust this path to where your data is

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

const CoreTeam = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center text-blue-800 mb-12"
        >
          🚀 Our Core Team
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {core.map((member, i) => (
            <motion.div
              key={member.id}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              whileHover={{ scale: 1.05, boxShadow: '0px 12px 30px rgba(0,0,0,0.2)' }}
              className="bg-white p-6 rounded-xl shadow-md text-center transition-all duration-300"
            >
              <img
                src={member.photo || 'https://via.placeholder.com/100'}
                alt={member.name}
                className="w-24 h-24 rounded-full object-cover mx-auto mb-4 border-4 border-blue-200"
              />
              <h3 className="text-xl font-semibold text-blue-700">{member.name}</h3>
              <p className="text-sm text-gray-500 mb-2">{member.postition}</p>
              <p className="text-sm text-gray-600">{member.description}</p>

              <div className="flex justify-center space-x-4 mt-4 text-xl">
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    <i className="fab fa-linkedin"></i>
                  </a>
                )}
                {member.github && (
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-800 hover:text-black"
                  >
                    <i className="fab fa-github"></i>
                  </a>
                )}
                {member.insta && (
                  <a
                    href={member.insta}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink-500 hover:text-pink-600"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreTeam;
