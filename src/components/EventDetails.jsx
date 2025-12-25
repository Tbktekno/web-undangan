import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Clock } from 'lucide-react';

const EventCard = ({ title, date, time, location, delay }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false, amount: 0.3 }}
    transition={{ duration: 0.6, delay }}
    className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-shadow relative overflow-hidden group"
  >
    <div className="absolute top-0 left-0 w-full h-1 bg-wedding-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
    <h3 className="font-serif text-3xl text-wedding-dark-green mb-6 text-center">{title}</h3>
    
    <div className="space-y-4">
      <div className="flex items-start gap-4">
        <div className="p-3 bg-wedding-cream rounded-full text-wedding-gold">
          <Calendar size={24} />
        </div>
        <div>
          <p className="font-bold text-gray-800">Tanggal</p>
          <p className="text-gray-600">{date}</p>
        </div>
      </div>
      
      <div className="flex items-start gap-4">
        <div className="p-3 bg-wedding-cream rounded-full text-wedding-gold">
          <Clock size={24} />
        </div>
        <div>
          <p className="font-bold text-gray-800">Waktu</p>
          <p className="text-gray-600">{time}</p>
        </div>
      </div>

      <div className="flex items-start gap-4">
         <div className="p-3 bg-wedding-cream rounded-full text-wedding-gold">
          <MapPin size={24} />
        </div>
        <div>
          <p className="font-bold text-gray-800">Lokasi</p>
          <p className="text-gray-600">{location}</p>
        </div>
      </div>
    </div>
  </motion.div>
);

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const EventDetails = () => {
    return (
        <section className="py-20 px-4 bg-wedding-sand/30 relative">
             <div className="max-w-5xl mx-auto">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    className="text-center mb-16"
                >
                    <h2 className="font-script text-5xl text-wedding-gold mb-4">Acara Pernikahan</h2>
                    <p className="text-gray-600">Kami mengundang Anda untuk merayakan momen bahagia ini bersama kami</p>
                </motion.div>

                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.2 }}
                    className="flex justify-center"
                >
                    <motion.div variants={itemVariants}>
                        <EventCard 
                            title="Penyelesaian Adat"
                            date="Sabtu, 3 Januari 2026"
                            time="16:00 WIB - Selesai"
                            location="Rumah Kediaman Bpk. Daliyono, Desa Uelawu, Kec.Konawe, Kab.Konawe"
                            delay={0}
                        />
                    </motion.div>
                    
                </motion.div>

                <div className="text-center mt-12">
                    <motion.a 
                        href="https://www.google.com/maps/search/?api=1&query=-3.927889,122.108667" 
                        target="_blank"
                        className="inline-flex items-center gap-2 px-8 py-3 bg-wedding-dark-green text-white rounded-full hover:bg-wedding-gold transition-colors shadow-lg"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <MapPin size={20} />
                        Lihat Lokasi di Google Maps
                    </motion.a>
                </div>
             </div>
        </section>
    );
};

export default EventDetails;
