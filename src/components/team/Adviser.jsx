import React from 'react';

const Advisor = () => {
  // Directly importing the advisor array here
  const advisor = [
    {
      id: 1,
      photo: 'https://randomuser.me/api/portraits/men/50.jpg',
      name: "Dr. Radhika Verma",
      position: "Chief Advisor",
      description: "A visionary leader with expertise in business strategy and growth.",
      linkedin: "https://linkedin.com/in/radhikaverma",
      github: "https://github.com/radhikaverma",
      insta: "https://instagram.com/radhika.verma",
      contact: "radhika.verma@example.com",
      hoverColor: "hover:bg-purple-700",
    }
  ];

  return (
    <section className="py-12 bg-gray-100 z-10">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-10">Meet Our Advisors</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-8">
          {advisor.map(advisorData => (
            <div
              key={advisorData.id}
              className="flex items-center bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white shadow-lg rounded-lg p-6 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
            >
              {/* Advisor Image */}
              <div className="w-1/3 flex justify-center mb-6">
                <img
                  src={advisorData.photo}
                  alt={advisorData.name}
                  className="w-28 h-28 rounded-full object-cover border-4 border-white shadow-md"
                />
              </div>

              {/* Description Section */}
              <div className="w-2/3 pl-6">
                <h3 className="text-xl font-bold">{advisorData.name}</h3>
                <p className="text-sm mt-2">{advisorData.position}</p>
                <p className="text-xs mt-3">{advisorData.description}</p>

                {/* Additional Paragraph */}
                <p className="text-md mt-4">
                  Dr. {advisorData.name} brings years of experience in business strategy, helping companies thrive in competitive environments. Her leadership and innovative thinking have been key in driving growth and success in various sectors.
                </p>

                {/* Contact Links */}
                <div className="flex space-x-4 mt-6">
                  {advisorData.linkedin && (
                    <a
                      href={advisorData.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-blue-300 transition"
                    >
                      <i className="fab fa-linkedin text-xl"></i>
                    </a>
                  )}
                  {advisorData.github && (
                    <a
                      href={advisorData.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-gray-200 transition"
                    >
                      <i className="fab fa-github text-xl"></i>
                    </a>
                  )}
                  {advisorData.insta && (
                    <a
                      href={advisorData.insta}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-pink-300 transition"
                    >
                      <i className="fab fa-instagram text-xl"></i>
                    </a>
                  )}
                  {advisorData.contact && (
                    <a
                      href={`mailto:${advisorData.contact}`}
                      className="hover:text-yellow-300 transition"
                    >
                      <i className="fas fa-envelope text-xl"></i>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advisor;
