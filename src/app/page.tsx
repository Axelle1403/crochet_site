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
      <section className="relative h-screen flex items-center justify-center bg-background">
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

      <Footer />
    </div>
  );
}
