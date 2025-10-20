import React, { useState } from 'react';
import community from '../../assets/svgs/community.svg';
import skills from '../../assets/svgs/skill-set.gif';
import network from '../../assets/svgs/network.gif';
import expert_speacker from '../../assets/svgs/expert_speacker.jpg'
import background_Image from '../../assets/svgs/background_Image.png';

function HomeAbout() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const reasons = [
    {
      title: 'Community-Driven',
      description: 'GDG OC is powered by passionate developers who believe in collaboration and open-source values.',
      photo: community,
      bgcolor: "#4285F4",
    },
    {
      title: 'Expert Speakers',
      description: 'We host events with industry leaders and Googlers who share insights, trends, and hands-on knowledge.',
      photo: expert_speacker,
      bgcolor: "#DB4437",
    },
    {
      title: 'Connections',
      description: 'Connect with professionals, students, and tech enthusiasts from diverse backgrounds.',
      photo: network,
      bgcolor: "#F4B400",
    },
    {
      title: 'Skill Development',
      description: 'Workshops, hackathons, and study jams help you grow your skills and confidence.',
      photo: skills,
      bgcolor: "#0F9D58",
    },
  ];

  return (
    <>
      {/* About Us Section with Fixed Background Image */}
      <section 
        className="w-full text-black py-16 px-6 md:px-12 lg:px-24"
        style={{
          backgroundImage: `url(${background_Image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed', // Fixes the background image
          zIndex: '-1',
        }}
      >
        <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12 relative p-4 rounded-full bg-white/80">
          {/* Text Content */}
          <div className="flex-1 z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About Us
            </h2>
            <p className="text-lg md:text-xl mb-6 leading-relaxed">
              Welcome to our website! We are passionate about creating beautiful, functional, and modern web experiences.
              Our team is dedicated to building applications that are fast, responsive, and delightful to use.
            </p>
            <p className="text-md md:text-lg leading-relaxed">
              Whether you're a business looking to grow online or just exploring the web, we're here to make your digital journey exceptional. Let's build something great together.
            </p>
          </div>

          {/* Image */}
          <div className="flex-1 z-10">
            <img
              src="https://source.unsplash.com/600x400/?technology,web"
              alt="About"
              className="rounded-lg shadow-lg w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Why Choose GDG OC Section */}
      <section className="w-full bg-white/60 text-gray-900 py-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose GDG OC</h2>
          <p className="text-lg text-gray-600">Explore the reasons that make GDG OC an incredible place to grow and connect.</p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => {
            const isHovered = hoveredIndex === index;

            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="transition-all duration-300 rounded-xl p-6 shadow-md transform hover:-translate-y-2 hover:shadow-xl cursor-pointer"
                style={{
                  backgroundColor: isHovered ? reason.bgcolor : '#ffffff',
                  color: isHovered ? '#ffffff' : '#1f2937', 
                }}
              >
                <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
                <img
                  src={reason.photo}
                  alt={reason.title}
                  className="w-16 h-16 mx-auto mb-4 object-cover rounded"
                  style={{ backgroundColor: '#fff', borderRadius: '9999px', padding: '0.25rem' }}
                />
                <p className="text-sm">{reason.description}</p>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default HomeAbout;
