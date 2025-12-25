import React from 'react';
import { CloudLightningIcon, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 bg-wedding-cream text-center text-wedding-dark-green relative z-10">
        <div className="flex items-center justify-center gap-2 mb-2">
            <span className="font-serif">Di Buat Oleh</span>
            <CloudLightningIcon size={16} className="fill-wedding-gold text-wedding-gold animate-pulse" />
            <span className="font-serif">Tino Perdiyansya</span>
        </div>
        <p className="text-sm opacity-60">© 2025 Takbir & Aisyah Wedding. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
