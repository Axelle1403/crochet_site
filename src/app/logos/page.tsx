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
          {/* Logo 1: Simple typographie */}
          <div className="bg-card p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow">
            <svg viewBox="0 0 200 200" className="w-full h-auto mb-4">
              <text x="100" y="100" fontFamily="Arial, sans-serif" fontSize="60" fontWeight="bold" fill="#c41e3a" textAnchor="middle">2H</text>
              <text x="100" y="140" fontFamily="Arial, sans-serif" fontSize="20" fill="#1a1a1a" textAnchor="middle">Les 2H</text>
            </svg>
            <h3 className="text-xl font-semibold text-foreground mb-2">Typographie simple</h3>
            <p className="text-muted-foreground">Logo minimaliste avec texte</p>
          </div>

          {/* Logo 2: Ligne horizontale */}
          <div className="bg-card p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow">
            <svg viewBox="0 0 200 200" className="w-full h-auto mb-4">
              <text x="100" y="80" fontFamily="Arial, sans-serif" fontSize="24" fontWeight="bold" fill="#1a1a1a" textAnchor="middle">LES</text>
              <text x="100" y="120" fontFamily="Arial, sans-serif" fontSize="50" fontWeight="bold" fill="#c41e3a" textAnchor="middle">2H</text>
              <line x1="40" y1="140" x2="160" y2="140" stroke="#c41e3a" strokeWidth="3" />
            </svg>
            <h3 className="text-xl font-semibold text-foreground mb-2">Ligne horizontale</h3>
            <p className="text-muted-foreground">Logo avec ligne décorative</p>
          </div>

          {/* Logo 3: Cercle simple */}
          <div className="bg-card p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow">
            <svg viewBox="0 0 200 200" className="w-full h-auto mb-4">
              <circle cx="100" cy="100" r="60" fill="none" stroke="#c41e3a" strokeWidth="4" />
              <text x="100" y="105" fontFamily="Arial, sans-serif" fontSize="40" fontWeight="bold" fill="#1a1a1a" textAnchor="middle">2H</text>
            </svg>
            <h3 className="text-xl font-semibold text-foreground mb-2">Cercle simple</h3>
            <p className="text-muted-foreground">Logo avec cercle minimaliste</p>
          </div>

          {/* Logo 4: Lettres superposées */}
          <div className="bg-card p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow">
            <svg viewBox="0 0 200 200" className="w-full h-auto mb-4">
              <text x="100" y="110" fontFamily="Arial, sans-serif" fontSize="80" fontWeight="bold" fill="#c41e3a" textAnchor="middle">2H</text>
              <text x="100" y="150" fontFamily="Arial, sans-serif" fontSize="16" fill="#1a1a1a" textAnchor="middle">Les 2H</text>
            </svg>
            <h3 className="text-xl font-semibold text-foreground mb-2">Lettres géantes</h3>
            <p className="text-muted-foreground">Logo avec lettres XXL</p>
          </div>

          {/* Logo 5: Rectangle coloré */}
          <div className="bg-card p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow">
            <svg viewBox="0 0 200 200" className="w-full h-auto mb-4">
              <rect x="40" y="40" width="120" height="80" fill="#c41e3a" />
              <text x="100" y="90" fontFamily="Arial, sans-serif" fontSize="40" fontWeight="bold" fill="white" textAnchor="middle">2H</text>
              <text x="100" y="150" fontFamily="Arial, sans-serif" fontSize="18" fill="#1a1a1a" textAnchor="middle">Les 2H</text>
            </svg>
            <h3 className="text-xl font-semibold text-foreground mb-2">Rectangle coloré</h3>
            <p className="text-muted-foreground">Logo avec rectangle rouge</p>
          </div>

          {/* Logo 6: Point décoratif */}
          <div className="bg-card p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow">
            <svg viewBox="0 0 200 200" className="w-full h-auto mb-4">
              <circle cx="100" cy="70" r="8" fill="#c41e3a" />
              <text x="100" y="120" fontFamily="Arial, sans-serif" fontSize="45" fontWeight="bold" fill="#1a1a1a" textAnchor="middle">Les 2H</text>
            </svg>
            <h3 className="text-xl font-semibold text-foreground mb-2">Point décoratif</h3>
            <p className="text-muted-foreground">Logo avec point rouge</p>
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
