import React, { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import TeamMemberCard from "../team/TeamMemberCard";
import background_Image from '../../assets/svgs/background_Image.png'; // Your background image

const DropDown = ({ core, year, side = "left" }) => {
  const [isOpen, setIsOpen] = useState(false);

  const leadMember = core.find((member) => member.postition === "Team Lead");
  const otherMembers = core.filter((member) => member.postition !== "Team Lead");

  return (
    <div
      className="px-4 py-6 rounded-lg shadow-lg text-gray-900"
      style={{
        backgroundImage: `url(${background_Image})`,
        backgroundSize: "cover", // Ensure the image covers the whole container
        backgroundPosition: "center", // Center the image
        backgroundRepeat: "no-repeat", // Prevent repeating the image
        backgroundAttachment: "fixed", // Make it stay fixed while scrolling
      }}
    >
      {/* Heading */}
      <div className="flex items-center justify-center mb-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-purple-600 mr-3">
          📆 GDG Year {year} Team
        </h2>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="focus:outline-none transform transition-transform duration-300"
          aria-label={isOpen ? "Hide Team" : "Show Team"}
          aria-expanded={isOpen}
        >
          <div
            className={`transition-transform duration-300 ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
          >
            <ChevronDownIcon className="w-5 h-5 text-purple-600" />
          </div>
        </button>
      </div>

      {/* 🧑‍💼 Team Lead Section (conditionally aligned) */}
      {leadMember && (
        <div className="bg-blue-50 rounded-xl p-8 mb-12 shadow-md flex flex-col md:flex-row items-center gap-6">
          {side === "left" ? (
            <>
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
                  This section celebrates their leadership in the {year} team.
                </p>
              </div>
            </>
          ) : (
            <>
              <div className="md:w-2/3 text-gray-700 order-2 md:order-1">
                <p className="text-lg leading-relaxed">
                  The team lead plays a crucial role in coordinating the efforts of all members,
                  ensuring the project vision is realized while fostering collaboration and innovation.
                  This section celebrates their leadership in the {year} team.
                </p>
              </div>
              <div className="md:w-1/3 order-1 md:order-2">
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
            </>
          )}
        </div>
      )}

      {/* 👥 Other Members (Dropdown) */}
      <div
        className={`flex overflow-x-auto space-x-4 pb-4 scrollbar-thin scrollbar-thumb-purple-600 scrollbar-track-purple-200 transition-all duration-700 ease-in-out
        ${isOpen ? "opacity-100 max-h-96" : "opacity-0 max-h-0 pointer-events-none"}`}
        style={{ transitionProperty: "opacity, max-height" }}
      >
        {otherMembers.map((member, index) => (
          <div
            key={`core-${index}`}
            className={`min-w-[250px] sm:min-w-[280px] bg-gray-900 text-white p-4 rounded-xl shadow-md flex-shrink-0 ${member.hoverColor} transition-colors duration-300 transform hover:scale-100 hover:shadow-xl`}
          >
            <TeamMemberCard
              name={member.name}
              role={member.postition || "Team Member"}
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
  );
};

export default DropDown;
