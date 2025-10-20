import React from 'react';
import { useParams } from 'react-router-dom';
import { eventsShowcase } from '../components/event/AllEvent';
import GFrame from './GFrame';
import Footer from './Footer';
import background_Image from '../assets/svgs/background_Image.png';

function EventFormPage() {
  const { id } = useParams();
  const event = eventsShowcase.find((e) => e.id === Number(id));

  return (
    <>
      {event ? (
        <div>
          <div
            className="min-h-screen py-12 px-4 my-14 sm:px-6 lg:px-8 relative"
            style={{
              backgroundImage: `url(${background_Image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundAttachment: 'fixed',
              zIndex: 0,
            }}
          >
            <div className="max-w-4xl mx-auto text-center mb-8 relative z-10 bg-white/80 rounded-lg shadow-xl p-6">
              <h1 className="text-3xl font-bold text-gray-800">{event.title}</h1>
              <p className="text-gray-600 mt-2 py-5">{event.description}</p>

              {/* Google Form Frame */}
              <GFrame link={event.link} />
            </div>
          </div>

          <Footer />
        </div>
      ) : (
        <div className="text-center py-20 text-red-600 text-lg font-semibold">
          Form not found or invalid event ID.
        </div>
      )}
    </>
  );
}

export default EventFormPage;
