import Navigation from '@/components/navigation';
import Logo from '@/components/logo';
import Footer from '@/components/footer';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto text-center">
          <div className="mb-6 flex justify-center">
            <Logo className="h-16 w-auto" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Notre histoire
          </h1>
          <p className="text-xl text-muted-foreground">
            Trois amies, une passion commune
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Comment tout a commencé
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Notre histoire commence par une amitié partagée et une passion commune pour le crochet.
                Nous nous sommes rencontrées il y a quelques années lors d'un atelier artisanal,
                et c'est le coup de foudre créatif.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Chacune avec notre style et notre sensibilité, nous avons décidé de réunir nos talents
                pour créer quelque chose d'unique. [Nom de la marque] est née de cette envie de partager
                notre art avec le monde.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Aujourd'hui, nous créons chaque pièce avec amour, dans notre atelier, en utilisant
                des matériaux de qualité et en mettant tout notre cœur dans chaque point de crochet.
              </p>
            </div>
            <div className="aspect-square bg-secondary rounded-lg flex items-center justify-center overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&h=600&fit=crop"
                alt="Les trois créatrices"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
            Nos valeurs
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card p-6 rounded-lg">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Artisanat</h3>
              <p className="text-muted-foreground">
                Chaque pièce est faite main avec attention aux détails, garantissant une qualité exceptionnelle.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Qualité</h3>
              <p className="text-muted-foreground">
                Nous sélectionnons avec soin nos matériaux pour créer des pièces durables et confortables.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                  <line x1="9" x2="9.01" y1="9" y2="9" />
                  <line x1="15" x2="15.01" y1="9" y2="9" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Créativité</h3>
              <p className="text-muted-foreground">
                Nous innovons constamment pour vous proposer des designs originaux et tendance.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Lien avec nos clients</h3>
              <p className="text-muted-foreground">
                Nous créons un relationnel proche avec nos clients pour répondre à leurs envies.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
