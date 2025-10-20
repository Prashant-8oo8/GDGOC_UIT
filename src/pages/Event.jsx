import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import { eventsShowcase as eventImg } from '../components/event/AllEvent';
import background_Image from '../assets/svgs/background_Image.png'; // Import your background image

function Event() {
  return (
    <>
      <div
        className="min-h-screen py-32 px-4 sm:px-6 lg:px-8 relative"
        style={{
          backgroundImage: `url(${background_Image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          zIndex: 0, // Ensure content is above the background
        }}
      >
        <div className='bg-white/60 p-5 rounded-lg'>

      
        <div className="max-w-4xl mx-auto text-center mb-12  relative z-10">
          <h1 className="text-4xl font-bold text-gray-800">Upcoming Events</h1>
          <p className="text-gray-600 mt-4 text-lg">
            Click on an event to register via Google Form.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto relative z-10">
          {eventImg.map((event) => {
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
                  ${isClosed ? 'cursor-no-drop opacity-60 ' : 'cursor-pointer'}`}
              >
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover"
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
      </div>
      </div>

      <Footer />
    </>
  );
}

export default Event;
