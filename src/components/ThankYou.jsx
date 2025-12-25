import React from 'react';
import { motion } from 'framer-motion';

const ThankYou = () => {
    return (
        <section className="py-20 px-6 bg-wedding-cream/50">
            <div className="max-w-3xl mx-auto text-center">
                 <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{ duration: 0.8 }}
                 >
                    <h2 className="font-script text-4xl md:text-5xl text-wedding-gold mb-8">Terima Kasih</h2>
                    <p className="font-serif text-xl md:text-2xl text-wedding-dark-green italic leading-relaxed">
                        “Terima kasih telah meluangkan waktu untuk melihat undangan ini. Kami sangat berharap doa dan kehadiran Anda dapat menyempurnakan kebahagiaan kami.”
                    </p>
                 </motion.div>

                 <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="mt-16"
                 >
                    <p className="font-serif text-lg text-gray-600 mb-6 font-semibold">Turut Mengundang:</p>
                    <div className="grid md:grid-cols-2 gap-8 text-wedding-dark-green">
                        <div className="flex flex-col items-center">
                            <h4 className="font-bold mb-2">Keluarga Mempelai Pria</h4>
                            <p className="font-serif italic text-lg">Kel. Besar Bpk. Jasmin ( Almarhum )  </p>
                            <p className="font-serif italic text-lg">& Ibu Hastian </p>
                        </div>
                        <div className="flex flex-col items-center">
                            <h4 className="font-bold mb-2">Keluarga Mempelai Wanita</h4>
                            <p className="font-serif italic text-lg">Kel. Besar Bpk. Daliyono</p>
                            <p className="font-serif italic text-lg">& Ibu Sarlina</p>
                        </div>
                    </div>
                 </motion.div>
            </div>
        </section>
    );
};

export default ThankYou;
