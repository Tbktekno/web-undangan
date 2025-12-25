import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Hero = ({ onOpen, guestName }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('January 3, 2026 08:00:00').getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const CountdownItem = ({ value, label }) => (
    <div className="flex flex-col items-center bg-white/10 backdrop-blur-md rounded-lg p-2 min-w-[60px] md:min-w-[80px] border border-white/20">
      <span className="text-xl md:text-2xl font-bold text-wedding-gold">{value}</span>
      <span className="text-[10px] md:text-sm uppercase tracking-tighter opacity-80">{label}</span>
    </div>
  );

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Animated Background Image */}
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ scale: 1 }}
        animate={{ scale: 1.1 }}
        transition={{ 
          duration: 20, 
          ease: "linear", 
          repeat: Infinity, 
          repeatType: "reverse" 
        }}
      >
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1519225421980-715cb0202128?q=80&w=2070&auto=format&fit=crop')" 
          }}
        />
      </motion.div>

      {/* Premium Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-wedding-burgundy/80 via-wedding-burgundy/40 to-black/90 z-0" />
      <div className="absolute inset-0 bg-black/20 z-0" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white px-4">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-lg md:text-xl tracking-widest uppercase mb-4 font-light"
        >
          The Wedding of
        </motion.p>
        
        <motion.div
           initial={{ opacity: 0, scale: 0.8 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 1.2, ease: "easeOut" }}
           className="mb-4"
        >
          <h1 className="font-script text-6xl md:text-8xl lg:text-9xl text-wedding-gold drop-shadow-lg">
            Takbir & Aisyah
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex flex-col items-center"
        >
          <p className="text-xl md:text-2xl mb-6 font-semibold tracking-wide border-t border-b border-wedding-gold py-2 px-8">
            3  Januari  2026
          </p>

          {/* Countdown Timer */}
          <div className="flex gap-2 md:gap-4 mb-8">
            <CountdownItem value={timeLeft.days} label="Hari" />
            <CountdownItem value={timeLeft.hours} label="Jam" />
            <CountdownItem value={timeLeft.minutes} label="Menit" />
            <CountdownItem value={timeLeft.seconds} label="Detik" />
          </div>

          <div className="mb-8 space-y-2">
            <p className="text-sm font-light italic opacity-90">Kepada Yth. Bapak/Ibu/Saudara/i</p>
            <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-xl border border-white/20">
              <h2 className="text-4xl md:text-5xl font-script text-white drop-shadow-lg tracking-wide">{guestName || 'Tamu Undangan'}</h2>
            </div>
          </div>
          
          <button 
            onClick={onOpen}
            className="flex items-center gap-2 px-8 py-3 bg-wedding-gold text-white rounded-full hover:bg-white hover:text-wedding-gold transition-all duration-300 transform hover:scale-105 shadow-xl animate-bounce"
          >
            <span className="uppercase tracking-wider text-sm font-semibold">Buka Undangan</span>
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
