'use client';

import Link from 'next/link';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';

export default function LogosPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      
      <div className="flex-1 container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold text-foreground mb-4 text-center">
          Choisissez votre logo personnalisé
        </h1>
        <p className="text-muted-foreground mb-12 text-center">
          Sélectionnez le style qui vous plaît le plus
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Logo 1: Style Shadaf Création - Élégant traditionnel */}
          <div className="bg-card p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow">
            <svg viewBox="0 0 200 200" className="w-full h-auto mb-4">
              <defs>
                <linearGradient id="shadafGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{stopColor:'#c41e3a',stopOpacity:1}} />
                  <stop offset="100%" style={{stopColor:'#8B4513',stopOpacity:1}} />
                </linearGradient>
              </defs>
              <rect x="30" y="40" width="140" height="120" rx="5" fill="none" stroke="url(#shadafGrad)" strokeWidth="3" />
              <rect x="40" y="50" width="120" height="100" rx="3" fill="url(#shadafGrad)" opacity="0.1" />
              <text x="100" y="95" fontFamily="Georgia, serif" fontSize="36" fontWeight="bold" fill="#1a1a1a" textAnchor="middle">Les</text>
              <text x="100" y="135" fontFamily="Georgia, serif" fontSize="48" fontWeight="bold" fill="#c41e3a" textAnchor="middle">2H</text>
              <text x="100" y="175" fontFamily="Arial, sans-serif" fontSize="12" fill="#6b6b6b" textAnchor="middle" letterSpacing="3">CROCHET ARTISANAL</text>
            </svg>
            <h3 className="text-xl font-semibold text-foreground mb-2">Style Shadaf Création</h3>
            <p className="text-muted-foreground">Élégant traditionnel avec cadre</p>
          </div>

          {/* Logo 2: Style MGN EBEN - Moderne tendance */}
          <div className="bg-card p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow">
            <svg viewBox="0 0 200 200" className="w-full h-auto mb-4">
              <defs>
                <linearGradient id="mgnGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{stopColor:'#c41e3a',stopOpacity:1}} />
                  <stop offset="100%" style={{stopColor:'#ff6b6b',stopOpacity:1}} />
                </linearGradient>
              </defs>
              <circle cx="100" cy="80" r="50" fill="url(#mgnGrad)" />
              <text x="100" y="85" fontFamily="Arial, sans-serif" fontSize="40" fontWeight="bold" fill="white" textAnchor="middle">2H</text>
              <text x="100" y="150" fontFamily="Arial, sans-serif" fontSize="24" fontWeight="bold" fill="#1a1a1a" textAnchor="middle">Les 2H</text>
              <text x="100" y="180" fontFamily="Arial, sans-serif" fontSize="10" fill="#6b6b6b" textAnchor="middle" letterSpacing="2">MODE & CRÉATION</text>
            </svg>
            <h3 className="text-xl font-semibold text-foreground mb-2">Style MGN EBEN</h3>
            <p className="text-muted-foreground">Moderne tendance avec cercle</p>
          </div>

          {/* Logo 3: Style 1Look By Adé - Premium artisanal */}
          <div className="bg-card p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow">
            <svg viewBox="0 0 200 200" className="w-full h-auto mb-4">
              <defs>
                <linearGradient id="lookGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{stopColor:'#c41e3a',stopOpacity:1}} />
                  <stop offset="100%" style={{stopColor:'#d4a574',stopOpacity:1}} />
                </linearGradient>
              </defs>
              <path d="M 100 20 L 180 60 L 180 140 L 100 180 L 20 140 L 20 60 Z" fill="url(#lookGrad)" />
              <text x="100" y="100" fontFamily="Georgia, serif" fontSize="36" fontWeight="bold" fill="white" textAnchor="middle">2H</text>
              <text x="100" y="195" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="bold" fill="#1a1a1a" textAnchor="middle">Les 2H</text>
            </svg>
            <h3 className="text-xl font-semibold text-foreground mb-2">Style 1Look By Adé</h3>
            <p className="text-muted-foreground">Premium artisanal avec hexagone</p>
          </div>

          {/* Logo 4: Style KANZA - Bogolan africain */}
          <div className="bg-card p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow">
            <svg viewBox="0 0 200 200" className="w-full h-auto mb-4">
              <defs>
                <pattern id="bogolan" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                  <rect width="20" height="20" fill="#d4a574" />
                  <circle cx="10" cy="10" r="3" fill="#8B4513" />
                </pattern>
              </defs>
              <rect x="30" y="30" width="140" height="140" rx="10" fill="url(#bogolan)" stroke="#8B4513" strokeWidth="3" />
              <text x="100" y="100" fontFamily="Georgia, serif" fontSize="40" fontWeight="bold" fill="#1a1a1a" textAnchor="middle">Les</text>
              <text x="100" y="140" fontFamily="Georgia, serif" fontSize="48" fontWeight="bold" fill="#c41e3a" textAnchor="middle">2H</text>
            </svg>
            <h3 className="text-xl font-semibold text-foreground mb-2">Style KANZA</h3>
            <p className="text-muted-foreground">Bogolan africain avec motif</p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link href="/" className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors">
            Retour à l'accueil
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}
