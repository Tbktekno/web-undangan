import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Music, PauseCircle, PlayCircle } from 'lucide-react';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import Hero from './components/Hero';
import Quote from './components/Quote';
import Couple from './components/Couple';
import EventDetails from './components/EventDetails';
import Gallery from './components/Gallery';
import ThankYou from './components/ThankYou';
import RSVP from './components/RSVP';
import Footer from './components/Footer';

const InvitationContent = () => {
    const { guestName } = useParams();
    const [isOpen, setIsOpen] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(new Audio('https://cdn.pixabay.com/download/audio/2022/03/10/audio_c8c8a73467.mp3?filename=piano-moment-11143.mp3'));
    
    // Decode URL component to handle spaces and special characters e.g. "Ardin%20dan%20Partner" -> "Ardin dan Partner"
    const decodedGuestName = guestName ? decodeURIComponent(guestName) : '';

    const handleOpen = () => {
        setIsOpen(true);
        setIsPlaying(true);
        audioRef.current.play().catch(e => console.log("Audio play failed", e));
    };

    const toggleMusic = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    useEffect(() => {
        const audio = audioRef.current;
        audio.loop = true;
        return () => {
            audio.pause();
            audio.currentTime = 0;
        }
    }, []);

    return (
        <div className={`min-h-screen font-sans ${isOpen ? 'overflow-auto' : 'overflow-hidden h-screen'}`}>
            <div className={`fixed bottom-6 right-6 z-50 transition-all duration-500 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
                <button 
                    onClick={toggleMusic}
                    className="bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-lg border border-wedding-gold text-wedding-gold hover:bg-wedding-gold hover:text-white transition-all animate-spin-slow"
                >
                    {isPlaying ? <PauseCircle size={28} /> : <PlayCircle size={28} />}
                </button>
            </div>

            <Hero onOpen={handleOpen} guestName={decodedGuestName} />
            
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        <Quote />
                        <Couple />
                        <EventDetails />
                        <Gallery />
                        <ThankYou />
                        <RSVP />
                        <Footer />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

function App() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<InvitationContent />} />
            <Route path="/:guestName" element={<InvitationContent />} />
            {/* Catch all to handle simpler deployments or nested paths if needed later */}
            <Route path="*" element={<InvitationContent />} />
        </Routes>
    </Router>
  );
}

export default App;
