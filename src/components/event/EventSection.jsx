import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { eventsShowcase as events } from './AllEvent';
import { Link } from 'react-router-dom';
import background_Image from '../../assets/svgs/background_Image.png'

const EventSection = () => {
  const navigate = useNavigate();

  // Sort events by date (assuming 'date' exists in the event object)
  const sortedEvents = [...events].sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <section 
      className="px-4 sm:px-8 py-12 bg-white/30"
      style={{
        backgroundImage: `url(${background_Image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        zIndex:'-1', // Keeps the background fixed when scrolling
      }}
    >
      <div className='bg-white/70 p-3 rounded-xl'>
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8 ">
        Upcoming Events
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
        {sortedEvents.slice(0, 3).map((event) => {
          const isClosed = event.status?.toLowerCase() === 'closed';
          const statusClass =
            event.status?.toLowerCase() === 'open'
              ? 'text-green-600'
              : event.status?.toLowerCase() === 'extended'
              ? 'text-yellow-500'
              : 'text-red-600';

          return (
            <Link
              key={event.id}
              to={isClosed ? '#' : `/event/${event.id}`}
              state={{ formLink: event.link }}
              className={`group bg-white shadow-md rounded-xl overflow-hidden transition transform hover:scale-105 hover:shadow-xl 
                ${isClosed ? 'cursor-not-allowed opacity-60 ' : 'cursor-pointer'}
              `}
            >
              <img
                src={event.image}
                alt={`Image for ${event.title}`} // Improved alt text for accessibility
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600">
                  {event.title}
                </h2>

                <h3 className={`text-base uppercase font-semibold ${statusClass}`}>
                  {event.status}
                </h3>

                <p className="text-sm text-gray-600 mt-2">{event.description}</p>

                {!isClosed && (
                  <p className="mt-3 text-blue-500 font-medium">Open Form →</p>
                )}
              </div>
            </Link>
          );
        })}
      </div>

      {/* Show More Button */}
      <div className="mt-10 text-center">
        <motion.button
          onClick={() => navigate('/event')}
          className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-md focus:outline-none"
          whileHover={{ scale: 1.05, boxShadow: '0 8px 15px rgba(59, 130, 246, 0.5)' }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
          Show More Events →
        </motion.button>
      </div>
      </div>
    </section>
  );
};

export default EventSection;
