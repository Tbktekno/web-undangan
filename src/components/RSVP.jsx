import React, { useState } from 'react';
import { motion } from 'framer-motion';

const RSVP = () => {
    const [status, setStatus] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Terima kasih atas konfirmasinya!");
    };

    return (
        <section className="py-20 px-4 bg-wedding-dark-green relative overflow-hidden">
             {/* Decorative circles */}
             <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
             <div className="absolute bottom-0 right-0 w-96 h-96 bg-wedding-gold/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

             <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="max-w-xl mx-auto relative z-10 bg-white p-8 md:p-12 rounded-3xl shadow-2xl"
             >
                <div className="text-center mb-10">
                    <h2 className="font-script text-5xl text-wedding-gold mb-2">RSVP</h2>
                    <p className="text-gray-600">Mohon konfirmasi kehadiran Anda</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2 ml-1">Nama Lengkap</label>
                        <input 
                            type="text" 
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-wedding-gold focus:ring-2 focus:ring-wedding-gold/20 outline-none transition-all"
                            placeholder="Masukkan nama Anda"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2 ml-1">Jumlah Tamu</label>
                         <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-wedding-gold focus:ring-2 focus:ring-wedding-gold/20 outline-none transition-all">
                            <option>1 Orang</option>
                            <option>2 Orang</option>
                        </select>
                    </div>

                    <div>
                         <label className="block text-gray-700 text-sm font-bold mb-2 ml-1">Konfirmasi Kehadiran</label>
                         <div className="flex gap-4">
                            <button
                                type="button"
                                onClick={() => setStatus('hadir')}
                                className={`flex-1 py-3 rounded-xl border transition-all ${status === 'hadir' ? 'bg-wedding-gold text-white border-wedding-gold' : 'border-gray-200 text-gray-600 hover:border-wedding-gold'}`}
                            >
                                Hadir
                            </button>
                            <button
                                type="button"
                                onClick={() => setStatus('tidak')}
                                className={`flex-1 py-3 rounded-xl border transition-all ${status === 'tidak' ? 'bg-gray-800 text-white border-gray-800' : 'border-gray-200 text-gray-600 hover:border-gray-800'}`}
                            >
                                Maaf Tidak Bisa
                            </button>
                         </div>
                    </div>
                    
                    <div>
                         <label className="block text-gray-700 text-sm font-bold mb-2 ml-1">Ucapan & Doa</label>
                         <textarea 
                            rows="4"
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-wedding-gold focus:ring-2 focus:ring-wedding-gold/20 outline-none transition-all"
                            placeholder="Tuliskan ucapan selamat..."
                         ></textarea>
                    </div>

                    <button 
                        type="submit"
                        className="w-full py-4 bg-wedding-dark-green text-white font-bold rounded-xl shadow-lg hover:bg-wedding-gold transition-colors transform hover:-translate-y-1"
                    >
                        Kirim Konfirmasi
                    </button>
                </form>
             </motion.div>
        </section>
    );
};

export default RSVP;
