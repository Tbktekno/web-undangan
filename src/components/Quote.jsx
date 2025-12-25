import React from 'react';
import { motion } from 'framer-motion';
import bismillahImg from '../assets/bismillah2.png';

const Quote = () => {
  return (
    <section className="py-24 px-6 bg-wedding-cream relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-wedding-gold/50"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 1, ease: "easeOut" }}
            >
                <img src={bismillahImg} alt="Bismillah" className="h-32 mx-auto mb-8 opacity-70" />
                <h3 className="font-serif text-2xl md:text-3xl text-wedding-dark-green italic leading-relaxed mb-8">
                    “Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu pasangan dari jenismu sendiri supaya kamu cenderung dan merasa tentram kepadanya, dan dijadikan-Nya di antaramu rasa kasih dan sayang.”
                </h3>
                
                <div className="flex items-center justify-center gap-4">
                    <div className="h-px w-12 bg-wedding-gold"></div>
                    <p className="font-sans font-bold text-wedding-gold tracking-widest uppercase text-sm">QS. Ar-Rum: 21</p>
                    <div className="h-px w-12 bg-wedding-gold"></div>
                </div>
            </motion.div>
        </div>
    </section>
  );
};

export default Quote;
