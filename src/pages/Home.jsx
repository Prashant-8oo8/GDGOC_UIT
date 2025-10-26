import React from 'react';
import Video from '../components/home/Video';
import HeroText from '../components/home/HeroText';
import HomeAbout from '../components/home/HomeAbout';
import Footer from './Footer';
import EventSection from '../components/event/EventSection';
import Map from '../components/Map';
import Box from '../components/Box';
import background_Image from '../assets/svgs/background_Image.png';

function Home() {
  return (
    <div className="relative w-full overflow-x-hidden box-border p-0 m-0">
      {/* Background Image */}
      <div 
        className="fixed inset-0 -z-10 w-full h-full bg-blue-200"
        style={{ 
          backgroundImage: `url(${background_Image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed', // Optional: Keeps the background fixed when scrolling
        }}
      />

      {/* Hero Section */}
      <section className="relative w-full h-[60vh] sm:h-[70vh] md:h-[75vh] lg:min-h-[80vh] max-h-[90vh] flex items-center justify-center p-0 my-7 z-10">
        <HeroText />
      </section>

      {/* About Section */}
      <section className="relative w-full p-0 m-0 z-10">
        <HomeAbout />
      </section>

      {/* Events */}
      <section className="relative w-full p-0 m-0 z-10">
        <EventSection />
      </section>

      {/* Map */}
      <section className="relative w-full p-0 m-0 z-10">
        <Map />
      </section>

      {/* Footer */}
      <footer className="relative w-full p-0 m-0 z-10">
        <Footer />
      </footer>
    </div>
  );
}

export default Home;
