import React from 'react';
import { Route, Routes } from 'react-router-dom';
import {motion} from 'motion/react'
import Navbar from './components/Navbar';
import FullNav from './components/FullNav';
import Home from './pages/Home';
import Team from './pages/Team';


import Event from './pages/Event';
import EventFormPage from './pages/EventFormPage';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <FullNav />
      <main className="flex-grow">
       
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<Team />} />
          <Route path="/event" element={<Event/>} />
           <Route path="/event/:id" element={<EventFormPage/>} />
        </Routes>
      </main>

      
    </div>
  );
}

export default App;
