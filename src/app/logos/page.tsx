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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Logo 1: Pelote de laine stylisée */}
          <div className="bg-card p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow">
            <svg viewBox="0 0 200 200" className="w-full h-auto mb-4">
              <defs>
                <linearGradient id="yarnGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{stopColor:'#c41e3a',stopOpacity:1}} />
                  <stop offset="100%" style={{stopColor:'#ff6b6b',stopOpacity:1}} />
                </linearGradient>
              </defs>
              <ellipse cx="100" cy="100" rx="60" ry="50" fill="none" stroke="url(#yarnGrad)" strokeWidth="4" />
              <ellipse cx="100" cy="100" rx="45" ry="38" fill="none" stroke="url(#yarnGrad)" strokeWidth="4" />
              <ellipse cx="100" cy="100" rx="30" ry="25" fill="none" stroke="url(#yarnGrad)" strokeWidth="4" />
              <path d="M 100 50 Q 120 30, 140 50" fill="none" stroke="url(#yarnGrad)" strokeWidth="3" strokeLinecap="round" />
              <text x="100" y="170" fontFamily="Arial, sans-serif" fontSize="24" fontWeight="bold" fill="#1a1a1a" textAnchor="middle">Les 2H</text>
            </svg>
            <h3 className="text-xl font-semibold text-foreground mb-2">Pelote stylisée</h3>
            <p className="text-muted-foreground">Logo avec pelote de laine minimaliste</p>
          </div>

          {/* Logo 2: Crochet élégant */}
          <div className="bg-card p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow">
            <svg viewBox="0 0 200 200" className="w-full h-auto mb-4">
              <defs>
                <linearGradient id="hookGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{stopColor:'#c41e3a',stopOpacity:1}} />
                  <stop offset="100%" style={{stopColor:'#ff6b6b',stopOpacity:1}} />
                </linearGradient>
              </defs>
              <path d="M 100 30 C 130 30, 150 50, 150 80 C 150 110, 130 130, 100 130 C 70 130, 50 110, 50 80" 
                    fill="none" stroke="url(#hookGrad)" strokeWidth="5" strokeLinecap="round" />
              <line x1="100" y1="130" x2="100" y2="170" stroke="url(#hookGrad)" strokeWidth="5" strokeLinecap="round" />
              <path d="M 100 170 Q 120 180, 130 190" fill="none" stroke="url(#hookGrad)" strokeWidth="5" strokeLinecap="round" />
              <text x="100" y="180" fontFamily="Arial, sans-serif" fontSize="20" fontWeight="bold" fill="#1a1a1a" textAnchor="middle" dy="25">Les 2H</text>
            </svg>
            <h3 className="text-xl font-semibold text-foreground mb-2">Crochet élégant</h3>
            <p className="text-muted-foreground">Logo avec crochet stylisé</p>
          </div>

          {/* Logo 3: Typographie moderne */}
          <div className="bg-card p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow">
            <svg viewBox="0 0 200 200" className="w-full h-auto mb-4">
              <text x="100" y="90" fontFamily="Georgia, serif" fontSize="48" fontWeight="bold" fill="#1a1a1a" textAnchor="middle" letterSpacing="3">
                Les
              </text>
              <text x="100" y="140" fontFamily="Georgia, serif" fontSize="64" fontWeight="bold" fill="#c41e3a" textAnchor="middle" letterSpacing="5">
                2H
              </text>
              <text x="100" y="170" fontFamily="Arial, sans-serif" fontSize="14" fill="#6b6b6b" textAnchor="middle" letterSpacing="2">
                HUMANS HAND'S
              </text>
            </svg>
            <h3 className="text-xl font-semibold text-foreground mb-2">Typographie moderne</h3>
            <p className="text-muted-foreground">Logo typographique élégant</p>
          </div>

          {/* Logo 4: Formes géométriques */}
          <div className="bg-card p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow">
            <svg viewBox="0 0 200 200" className="w-full h-auto mb-4">
              <defs>
                <linearGradient id="geoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{stopColor:'#c41e3a',stopOpacity:1}} />
                  <stop offset="100%" style={{stopColor:'#ff6b6b',stopOpacity:1}} />
                </linearGradient>
              </defs>
              <circle cx="100" cy="80" r="40" fill="url(#geoGrad)" />
              <text x="100" y="85" fontFamily="Arial, sans-serif" fontSize="36" fontWeight="bold" fill="white" textAnchor="middle">2H</text>
              <text x="100" y="150" fontFamily="Arial, sans-serif" fontSize="24" fontWeight="bold" fill="#1a1a1a" textAnchor="middle">Les 2H</text>
            </svg>
            <h3 className="text-xl font-semibold text-foreground mb-2">Formes géométriques</h3>
            <p className="text-muted-foreground">Logo avec cercle et typographie</p>
          </div>

          {/* Logo 5: Fil de laine */}
          <div className="bg-card p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow">
            <svg viewBox="0 0 200 200" className="w-full h-auto mb-4">
              <defs>
                <linearGradient id="threadGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{stopColor:'#c41e3a',stopOpacity:1}} />
                  <stop offset="100%" style={{stopColor:'#ff6b6b',stopOpacity:1}} />
                </linearGradient>
              </defs>
              <path d="M 30 100 Q 50 50, 100 50 Q 150 50, 170 100 Q 150 150, 100 150 Q 50 150, 30 100" 
                    fill="none" stroke="url(#threadGrad)" strokeWidth="4" />
              <path d="M 40 100 Q 60 60, 100 60 Q 140 60, 160 100 Q 140 140, 100 140 Q 60 140, 40 100" 
                    fill="none" stroke="url(#threadGrad)" strokeWidth="4" />
              <text x="100" y="175" fontFamily="Arial, sans-serif" fontSize="20" fontWeight="bold" fill="#1a1a1a" textAnchor="middle">Les 2H</text>
            </svg>
            <h3 className="text-xl font-semibold text-foreground mb-2">Fil de laine</h3>
            <p className="text-muted-foreground">Logo avec forme de fil stylisé</p>
          </div>

          {/* Logo 6: Minimaliste carré */}
          <div className="bg-card p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow">
            <svg viewBox="0 0 200 200" className="w-full h-auto mb-4">
              <defs>
                <linearGradient id="squareGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{stopColor:'#c41e3a',stopOpacity:1}} />
                  <stop offset="100%" style={{stopColor:'#ff6b6b',stopOpacity:1}} />
                </linearGradient>
              </defs>
              <rect x="60" y="40" width="80" height="80" rx="10" fill="url(#squareGrad)" />
              <text x="100" y="90" fontFamily="Arial, sans-serif" fontSize="40" fontWeight="bold" fill="white" textAnchor="middle">2H</text>
              <text x="100" y="155" fontFamily="Arial, sans-serif" fontSize="18" fontWeight="bold" fill="#1a1a1a" textAnchor="middle">Les 2H</text>
            </svg>
            <h3 className="text-xl font-semibold text-foreground mb-2">Carré minimaliste</h3>
            <p className="text-muted-foreground">Logo avec carré et typographie</p>
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
