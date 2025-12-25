import React from 'react';
import { motion } from 'framer-motion';
import takbir from '../assets/takbir.jpg';
import aisyah from '../assets/aisyah.jpg';

const Couple = () => {
  return (
    <section className="py-20 px-4 bg-wedding-cream overflow-hidden">
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
           initial={{ opacity: 0, y: 50 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: false, amount: 0.3 }}
           transition={{ duration: 0.8 }}
        >

          <p className="font-serif text-3xl md:text-4xl text-wedding-dark-green mb-8 italic">
            Assalamu'alaikum Warahmatullahi Wabarakatuh
          </p>
          <p className="text-gray-600 max-w-2xl mx-auto mb-16 leading-relaxed">
            Maha suci Allah yang telah menjadikan segala sesuatu lebih indah dan sempurna. 
            Dengan memohon Rahmat dan Ridho-Nya, kami bermaksud melaksanakan Penyelesaian adat pernikahan putra-putri kami:
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-24">
          {/* Groom */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center group"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 mb-6 rounded-full overflow-hidden border-4 border-wedding-gold shadow-2xl">
              <img 
                src={takbir} 
                alt="Groom" 
                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110" 
              />
            </div>
            <h3 className="font-script text-4xl text-wedding-gold font-bold mb-2">Takbirratul Ihram</h3>
            <p className="text-gray-600 font-semibold">Putra Bpk. Jasmin (Almarhum) & Ibu Hastian </p>
            <div className="mt-4 flex gap-3">
               <a href="#" className="p-2 bg-gray-200 rounded-full hover:bg-wedding-gold hover:text-white transition-colors"><i className="fab fa-instagram"></i></a>
            </div>
          </motion.div>

          <div className="text-5xl md:text-6xl text-wedding-dark-green font-script  md:my-0">&</div>

          {/* Bride */}
          <motion.div 
             initial={{ opacity: 0, x: 50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: false, amount: 0.3 }}
             transition={{ duration: 0.8 }}
             className="flex flex-col items-center group"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 mb-6 rounded-full overflow-hidden border-4 border-wedding-gold shadow-2xl">
              <img 
                src={aisyah} 
                alt="Bride" 
                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110" 
              />
            </div>
            <h3 className="font-script text-4xl text-wedding-gold font-bold mb-2">Aisyah Dwi yulia</h3>
            <p className="text-gray-600 font-semibold">Putri Bpk. Daliyono & Ibu Sarlina</p>
            <div className="mt-4 flex gap-3">
               <a href="#" className="p-2 bg-gray-200 rounded-full hover:bg-wedding-gold hover:text-white transition-colors"><i className="fab fa-instagram"></i></a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Couple;
