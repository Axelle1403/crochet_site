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
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=1920&h=1080&fit=crop"
            alt="Crochet yarn"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60"></div>
        </div>
        <motion.div 
          className="relative z-10 text-center px-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.div 
            className="mb-10 flex justify-center"
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-2xl">
              <Logo className="h-28 w-auto" />
            </div>
          </motion.div>
          <motion.p 
            className="text-3xl md:text-5xl text-white mb-12 font-light tracking-wide drop-shadow-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            L'authenticité au bout des doigts
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <Link
              href="/catalog"
              className="inline-block bg-primary text-white px-12 py-5 rounded-none text-xl font-medium tracking-wider hover:bg-primary/90 transition-all hover:scale-105 shadow-xl"
            >
              DÉCOUVRIR
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Values Section */}
      <section className="py-24 px-4 bg-gradient-to-r from-primary/10 via-primary/5 to-secondary/10">
        <div className="container mx-auto max-w-6xl">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-foreground mb-16 text-center tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Nos valeurs
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { title: 'Création artisanale', icon: '✦', color: 'text-primary' },
              { title: 'Pièces uniques', icon: '✦', color: 'text-primary' },
              { title: 'Fait avec passion', icon: '✦', color: 'text-primary' },
              { title: 'Qualité & Élégance', icon: '✦', color: 'text-primary' },
              { title: 'Authenticité', icon: '✦', color: 'text-primary' },
            ].map((value, index) => (
              <motion.div
                key={index}
                className="text-center bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className={`text-5xl ${value.color} mb-4`}>{value.icon}</div>
                <h3 className="text-base font-semibold text-foreground">{value.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 px-4 bg-gradient-to-b from-background to-primary/5">
        <div className="container mx-auto max-w-6xl">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-foreground mb-16 text-center tracking-wide"
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
                image: 'https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?w=600&h=600&fit=crop',
              },
              {
                name: 'Écharpe torsadée',
                description: 'Ample et confortable',
                price: 45,
                image: 'https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?w=600&h=600&fit=crop',
              },
              {
                name: 'Sac crochet boho',
                description: 'Artisanal unique',
                price: 55,
                image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&h=600&fit=crop',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -10 }}
              >
                <div className="aspect-square bg-secondary relative overflow-hidden group">
                  <motion.img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                  />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-foreground mb-2 text-lg">{item.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{item.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-primary text-xl">{item.price} €</span>
                    <Link
                      href="/catalog"
                      className="text-sm font-semibold text-primary hover:text-primary/80 transition-colors underline"
                    >
                      Voir détails
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-16">
            <Link
              href="/catalog"
              className="inline-block bg-primary text-white px-12 py-5 rounded-none text-xl font-medium tracking-wider hover:bg-primary/90 transition-all hover:scale-105 shadow-xl"
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
