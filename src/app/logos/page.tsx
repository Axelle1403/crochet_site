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
          {/* Logo 1: Image de pelote de laine */}
          <div className="bg-card p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow">
            <div className="w-full h-48 mb-4 flex items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl overflow-hidden">
              <img src="https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=300&h=300&fit=crop" alt="Pelote de laine" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">Image de pelote</h3>
            <p className="text-muted-foreground">Logo avec vraie photo de pelote</p>
          </div>

          {/* Logo 2: Main stylisée */}
          <div className="bg-card p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow">
            <svg viewBox="0 0 200 200" className="w-full h-auto mb-4">
              <defs>
                <linearGradient id="handGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{stopColor:'#c41e3a',stopOpacity:1}} />
                  <stop offset="100%" style={{stopColor:'#ff6b6b',stopOpacity:1}} />
                </linearGradient>
              </defs>
              <path d="M 60 60 Q 60 30, 90 30 L 110 30 Q 140 30, 140 60 L 140 120 Q 140 150, 110 150 L 90 150 Q 60 150, 60 120 Z" 
                    fill="url(#handGrad)" />
              <text x="100" y="100" fontFamily="Arial, sans-serif" fontSize="32" fontWeight="bold" fill="white" textAnchor="middle">2H</text>
              <text x="100" y="180" fontFamily="Arial, sans-serif" fontSize="18" fontWeight="bold" fill="#1a1a1a" textAnchor="middle">Les 2H</text>
            </svg>
            <h3 className="text-xl font-semibold text-foreground mb-2">Main stylisée</h3>
            <p className="text-muted-foreground">Logo avec forme de main</p>
          </div>

          {/* Logo 3: Cœur artisanal */}
          <div className="bg-card p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow">
            <svg viewBox="0 0 200 200" className="w-full h-auto mb-4">
              <defs>
                <linearGradient id="heartGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{stopColor:'#c41e3a',stopOpacity:1}} />
                  <stop offset="100%" style={{stopColor:'#ff6b6b',stopOpacity:1}} />
                </linearGradient>
              </defs>
              <path d="M 100 160 C 100 160, 30 100, 30 70 C 30 40, 60 30, 100 60 C 140 30, 170 40, 170 70 C 170 100, 100 160, 100 160" 
                    fill="url(#heartGrad)" />
              <text x="100" y="95" fontFamily="Arial, sans-serif" fontSize="28" fontWeight="bold" fill="white" textAnchor="middle">2H</text>
              <text x="100" y="185" fontFamily="Arial, sans-serif" fontSize="16" fontWeight="bold" fill="#1a1a1a" textAnchor="middle">Les 2H</text>
            </svg>
            <h3 className="text-xl font-semibold text-foreground mb-2">Cœur artisanal</h3>
            <p className="text-muted-foreground">Logo avec cœur stylisé</p>
          </div>

          {/* Logo 4: Étoiles créatives */}
          <div className="bg-card p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow">
            <svg viewBox="0 0 200 200" className="w-full h-auto mb-4">
              <defs>
                <linearGradient id="starGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{stopColor:'#c41e3a',stopOpacity:1}} />
                  <stop offset="100%" style={{stopColor:'#ff6b6b',stopOpacity:1}} />
                </linearGradient>
              </defs>
              <polygon points="100,20 120,80 180,80 130,120 150,180 100,140 50,180 70,120 20,80 80,80" fill="url(#starGrad)" />
              <text x="100" y="105" fontFamily="Arial, sans-serif" fontSize="24" fontWeight="bold" fill="white" textAnchor="middle">2H</text>
              <text x="100" y="195" fontFamily="Arial, sans-serif" fontSize="16" fontWeight="bold" fill="#1a1a1a" textAnchor="middle">Les 2H</text>
            </svg>
            <h3 className="text-xl font-semibold text-foreground mb-2">Étoiles créatives</h3>
            <p className="text-muted-foreground">Logo avec étoile stylisée</p>
          </div>

          {/* Logo 5: Losange moderne */}
          <div className="bg-card p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow">
            <svg viewBox="0 0 200 200" className="w-full h-auto mb-4">
              <defs>
                <linearGradient id="diamondGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{stopColor:'#c41e3a',stopOpacity:1}} />
                  <stop offset="100%" style={{stopColor:'#ff6b6b',stopOpacity:1}} />
                </linearGradient>
              </defs>
              <polygon points="100,20 180,100 100,180 20,100" fill="url(#diamondGrad)" />
              <text x="100" y="105" fontFamily="Arial, sans-serif" fontSize="32" fontWeight="bold" fill="white" textAnchor="middle">2H</text>
              <text x="100" y="195" fontFamily="Arial, sans-serif" fontSize="16" fontWeight="bold" fill="#1a1a1a" textAnchor="middle">Les 2H</text>
            </svg>
            <h3 className="text-xl font-semibold text-foreground mb-2">Losange moderne</h3>
            <p className="text-muted-foreground">Logo avec losange stylisé</p>
          </div>

          {/* Logo 6: Hexagone tech */}
          <div className="bg-card p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow">
            <svg viewBox="0 0 200 200" className="w-full h-auto mb-4">
              <defs>
                <linearGradient id="hexGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{stopColor:'#c41e3a',stopOpacity:1}} />
                  <stop offset="100%" style={{stopColor:'#ff6b6b',stopOpacity:1}} />
                </linearGradient>
              </defs>
              <polygon points="100,20 170,60 170,140 100,180 30,140 30,60" fill="url(#hexGrad)" />
              <text x="100" y="105" fontFamily="Arial, sans-serif" fontSize="32" fontWeight="bold" fill="white" textAnchor="middle">2H</text>
              <text x="100" y="195" fontFamily="Arial, sans-serif" fontSize="16" fontWeight="bold" fill="#1a1a1a" textAnchor="middle">Les 2H</text>
            </svg>
            <h3 className="text-xl font-semibold text-foreground mb-2">Hexagone tech</h3>
            <p className="text-muted-foreground">Logo avec hexagone stylisé</p>
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
