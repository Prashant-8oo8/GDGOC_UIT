import React from 'react';
import TeamMemberCard from './TeamMemberCard'; // Reusable card
import { core, volunteer } from './AllMember'; // Adjust the import path
import background_Image from '../../assets/svgs/background_Image.png'; // Background image import

const TeamSection = () => {
  // Find team lead and other members separately
  const leadMember = core.find(member => member.postition === "Team Lead");
  const otherMembers = core.filter(member => member.postition !== "Team Lead");

  return (
    <section
      className="bg-white py-16 relative"
      style={{
        backgroundImage: `url(${background_Image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        zIndex: 0, // Ensure content is above the background
      }}
    >
      <div className="max-w-6xl mx-auto px-4 space-y-16 relative z-10">

        {/* Core Team Section */}
        <div>
          <h2 className="text-3xl font-bold text-center mb-10 text-blue-800">
            💼 Meet the Core Team
          </h2>

          {/* Team Lead Section */}
          {leadMember && (
            <div className="bg-blue-50 rounded-xl p-8 mb-12 shadow-md flex flex-col md:flex-row items-center gap-6">
              <div className="md:w-1/3">
                <TeamMemberCard
                  name={leadMember.name}
                  role={leadMember.postition}
                  image={leadMember.photo}
                  linkedin={leadMember.linkedin}
                  contact={leadMember.contact}
                  insta={leadMember.insta}
                  github={leadMember.github}
                  description={leadMember.description}
                  hoverColor={leadMember.hoverColor || "hover:bg-blue-500"}
                />
              </div>
              <div className="md:w-2/3 text-gray-700">
                <p className="text-lg leading-relaxed">
                  The team lead plays a crucial role in coordinating the efforts of all members,
                  ensuring the project vision is realized while fostering collaboration and innovation.
                  This section celebrates their leadership in the core team.
                </p>
              </div>
            </div>
          )}

          {/* Other Core Team Members Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  bg-white/70 rounded-xl p-4 gap-8 justify-items-center">
            {otherMembers.map((member, index) => (
              <TeamMemberCard
                key={`core-${index}`}
                name={member.name}
                role={member.postition}
                image={member.photo}
                linkedin={member.linkedin}
                contact={member.contact}
                insta={member.insta}
                github={member.github}
                description={member.description}
                hoverColor={member.hoverColor || "hover:bg-blue-500"}
              />
            ))}
          </div>
        </div>

        {/* Volunteer Team Section */}
        <div className="px-4 py-6 bg-white/60 rounded-xl">
          <h2 className="text-3xl font-bold text-center mb-10 text-purple-800">
            🤝 Meet the Volunteers
          </h2>

          {/* Horizontal scroll container */}
          <div className="flex overflow-x-auto space-x-6 pb-4 scrollbar-thin scrollbar-thumb-purple-500 scrollbar-track-purple-200">
            {volunteer.map((member, index) => (
              <div
                key={`volunteer-${index}`}
                className={`min-w-[250px] sm:min-w-[300px] bg-gray-800 text-white p-6 rounded-xl shadow-lg flex-shrink-0 ${member.hoverColor} transition-colors duration-300`}
              >
                <TeamMemberCard
                  name={member.name}
                  role={member.intrest || "Volunteer"}
                  image={member.photo}
                  description={member.description}
                  linkedin={member.linkedin}
                  contact={member.contact}
                  insta={member.insta}
                  github={member.github}
                  hoverColor={member.hoverColor || "hover:bg-purple-700"}
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default TeamSection;
