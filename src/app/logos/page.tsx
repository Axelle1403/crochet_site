'use client';

import { useState } from 'react';
import Navigation from '@/components/navigation';

const logoVariants = [
  {
    id: 1,
    name: 'Human Hands',
    description: 'Style Chanel - Monogramme interlacé',
    svg: (
      <svg viewBox="0 0 200 60" className="w-full h-16" xmlns="http://www.w3.org/2000/svg">
        <text x="100" y="25" fontFamily="Times New Roman, serif" fontSize="16" fontWeight="bold" fill="#1a1a1a" letterSpacing="3" textAnchor="middle">HUMAN</text>
        <text x="100" y="45" fontFamily="Times New Roman, serif" fontSize="16" fontWeight="bold" fill="#1a1a1a" letterSpacing="3" textAnchor="middle">HANDS</text>
        <line x1="30" y1="35" x2="170" y2="35" stroke="#1a1a1a" strokeWidth="1"/>
      </svg>
    ),
  },
  {
    id: 2,
    name: 'Laine & Co',
    description: 'Style Louis Vuitton - Lettrage espacé',
    svg: (
      <svg viewBox="0 0 200 60" className="w-full h-16" xmlns="http://www.w3.org/2000/svg">
        <text x="100" y="35" fontFamily="Times New Roman, serif" fontSize="20" fontWeight="bold" fill="#1a1a1a" letterSpacing="5" textAnchor="middle">LAINE &amp; CO</text>
        <rect x="40" y="45" width="120" height="2" fill="#1a1a1a"/>
      </svg>
    ),
  },
  {
    id: 3,
    name: 'Fils d\'Art',
    description: 'Style Gucci - Double ligne style',
    svg: (
      <svg viewBox="0 0 200 60" className="w-full h-16" xmlns="http://www.w3.org/2000/svg">
        <text x="100" y="25" fontFamily="Times New Roman, serif" fontSize="14" fontWeight="bold" fill="#1a1a1a" letterSpacing="4" textAnchor="middle">FILS D'ART</text>
        <text x="100" y="45" fontFamily="Times New Roman, serif" fontSize="12" fontWeight="normal" fill="#1a1a1a" letterSpacing="6" textAnchor="middle">PARIS</text>
      </svg>
    ),
  },
  {
    id: 4,
    name: 'Tricot & Moi',
    description: 'Style Hermès - Orange et noir',
    svg: (
      <svg viewBox="0 0 200 60" className="w-full h-16" xmlns="http://www.w3.org/2000/svg">
        <rect x="0" y="0" width="200" height="60" fill="#f4721a"/>
        <text x="100" y="35" fontFamily="Times New Roman, serif" fontSize="18" fontWeight="bold" fill="#1a1a1a" letterSpacing="4" textAnchor="middle">TRICOT &amp; MOI</text>
      </svg>
    ),
  },
  {
    id: 5,
    name: 'Cœur de Laine',
    description: 'Style Dior - Typographie élégante',
    svg: (
      <svg viewBox="0 0 200 60" className="w-full h-16" xmlns="http://www.w3.org/2000/svg">
        <text x="100" y="25" fontFamily="Times New Roman, serif" fontSize="14" fontWeight="bold" fill="#1a1a1a" letterSpacing="3" textAnchor="middle">CŒUR DE</text>
        <text x="100" y="45" fontFamily="Times New Roman, serif" fontSize="18" fontWeight="bold" fill="#1a1a1a" letterSpacing="4" textAnchor="middle">LAINE</text>
      </svg>
    ),
  },
  {
    id: 6,
    name: 'Atelier Trois',
    description: 'Style Prada - Minimaliste moderne',
    svg: (
      <svg viewBox="0 0 200 60" className="w-full h-16" xmlns="http://www.w3.org/2000/svg">
        <text x="100" y="35" fontFamily="Times New Roman, serif" fontSize="18" fontWeight="bold" fill="#1a1a1a" letterSpacing="4" textAnchor="middle">ATELIER TROIS</text>
        <line x1="50" y1="45" x2="150" y2="45" stroke="#1a1a1a" strokeWidth="2"/>
      </svg>
    ),
  },
  {
    id: 7,
    name: 'Petits Points',
    description: 'Style Balenciaga - Typographie large',
    svg: (
      <svg viewBox="0 0 200 60" className="w-full h-16" xmlns="http://www.w3.org/2000/svg">
        <text x="100" y="35" fontFamily="Times New Roman, serif" fontSize="22" fontWeight="bold" fill="#1a1a1a" letterSpacing="2" textAnchor="middle">PETITS POINTS</text>
      </svg>
    ),
  },
  {
    id: 8,
    name: 'Mains Créatives',
    description: 'Style Celine - Ultra minimaliste',
    svg: (
      <svg viewBox="0 0 200 60" className="w-full h-16" xmlns="http://www.w3.org/2000/svg">
        <text x="100" y="25" fontFamily="Times New Roman, serif" fontSize="14" fontWeight="bold" fill="#1a1a1a" letterSpacing="5" textAnchor="middle">MAINS</text>
        <text x="100" y="45" fontFamily="Times New Roman, serif" fontSize="14" fontWeight="bold" fill="#1a1a1a" letterSpacing="5" textAnchor="middle">CRÉATIVES</text>
      </svg>
    ),
  },
];

export default function LogosPage() {
  const [selectedLogo, setSelectedLogo] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-center">
            Choisissez votre nom de marque
          </h1>
          <p className="text-xl text-muted-foreground mb-12 text-center">
            Voici plusieurs variantes de logos avec différents noms. Cliquez sur celui que vous préférez.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {logoVariants.map((variant) => (
              <div
                key={variant.id}
                onClick={() => setSelectedLogo(variant.id)}
                className={`bg-card p-8 rounded-lg shadow-sm cursor-pointer transition-all hover:shadow-md ${
                  selectedLogo === variant.id ? 'ring-2 ring-primary' : ''
                }`}
              >
                <div className="bg-background p-6 rounded-lg mb-4 flex items-center justify-center">
                  {variant.svg}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{variant.name}</h3>
                <p className="text-muted-foreground">{variant.description}</p>
              </div>
            ))}
          </div>

          {selectedLogo && (
            <div className="mt-12 text-center">
              <p className="text-lg text-muted-foreground mb-4">
                Vous avez choisi : <strong className="text-foreground">{logoVariants.find(l => l.id === selectedLogo)?.name}</strong>
              </p>
              <button
                onClick={() => alert('Logo sélectionné ! Dites-moi si vous voulez que je l\'applique à tout le site.')}
                className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-medium hover:bg-primary/90 transition-colors"
              >
                Confirmer ce choix
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
