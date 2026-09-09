'use client';

import Link from 'next/link';
import Navigation from '@/components/navigation';
import Logo from '@/components/logo';
import Footer from '@/components/footer';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center bg-background">
        <motion.div 
          className="text-center px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="mb-12 flex justify-center"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Logo className="h-32 w-auto" />
          </motion.div>
          <motion.p 
            className="text-2xl md:text-3xl text-foreground mb-12 font-light tracking-wide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            L'authenticité au bout des doigts
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Link
              href="/catalog"
              className="inline-block bg-primary text-primary-foreground px-10 py-4 rounded-none text-lg font-normal tracking-wider hover:bg-primary/90 transition-colors"
            >
              DÉCOUVRIR
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <motion.h2 
            className="text-3xl md:text-4xl font-light text-foreground mb-16 text-center tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Nos valeurs
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {[
              { title: 'Création artisanale', icon: '✦' },
              { title: 'Pièces uniques', icon: '✦' },
              { title: 'Fait avec passion', icon: '✦' },
              { title: 'Qualité & Élégance', icon: '✦' },
              { title: 'Authenticité', icon: '✦' },
            ].map((value, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-4xl text-primary mb-4">{value.icon}</div>
                <h3 className="text-lg font-medium text-foreground">{value.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.h2 
            className="text-3xl md:text-4xl font-light text-foreground mb-16 text-center tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Nos créations
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Béret en laine mérinos',
                description: 'Chaud et doux',
                price: 35,
                image: 'https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?w=400&h=400&fit=crop',
              },
              {
                name: 'Écharpe torsadée',
                description: 'Ample et confortable',
                price: 45,
                image: 'https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?w=400&h=400&fit=crop',
              },
              {
                name: 'Sac crochet boho',
                description: 'Artisanal unique',
                price: 55,
                image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&h=400&fit=crop',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-card overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="aspect-square bg-secondary relative overflow-hidden">
                  <motion.img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-medium text-foreground mb-2">{item.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{item.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-foreground">{item.price} €</span>
                    <Link
                      href="/catalog"
                      className="text-sm text-primary hover:text-primary/80 transition-colors"
                    >
                      Voir
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/catalog"
              className="inline-block bg-foreground text-background px-10 py-4 rounded-none text-lg font-normal tracking-wider hover:bg-foreground/90 transition-colors"
            >
              VOIR LE CATALOGUE
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
