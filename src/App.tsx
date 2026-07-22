import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { LineupSection } from './components/LineupSection';
import { ActivitiesBento } from './components/ActivitiesBento';
import { ProgramSection } from './components/ProgramSection';
import { InteractivePicker } from './components/InteractivePicker';
import { FaqSection } from './components/FaqSection';
import { RegistrationForm } from './components/RegistrationForm';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#8DBD97] text-[#141414] font-body selection:bg-[#F5333F] selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <AboutSection />
        <LineupSection />
        <ActivitiesBento />
        <ProgramSection />
        <InteractivePicker />
        <FaqSection />
        <RegistrationForm />
      </main>
      <Footer />
    </div>
  );
}
