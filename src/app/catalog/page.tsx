'use client';

import { useState } from 'react';
import Navigation from '@/components/navigation';
import { products, categories } from '@/data/products';
import { Product } from '@/types/product';
import { useCart } from '@/context/CartContext';
import Logo from '@/components/logo';
import Footer from '@/components/footer';

export default function CatalogPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const { addToCart } = useCart();

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  const handleAddToCart = (product: Product) => {
    addToCart(product);
  };

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
            Notre collection
          </h1>
          <p className="text-xl text-muted-foreground">
            Découvrez toutes nos créations faites main
          </p>
        </div>
      </section>

      {/* Category Filters */}
      <section className="py-8 px-4 border-b border-border">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-full transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <div key={product.id} className="bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="aspect-square bg-secondary relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-foreground mb-2">{product.name}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{product.description}</p>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-bold text-foreground text-lg">{product.price} €</span>
                    <span className="text-xs text-muted-foreground">
                      {product.stock > 0 ? `${product.stock} en stock` : 'Rupture'}
                    </span>
                  </div>
                  <button
                    onClick={() => handleAddToCart(product)}
                    disabled={product.stock === 0}
                    className={`w-full py-2 rounded-full transition-colors ${
                      product.stock > 0
                        ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                        : 'bg-muted text-muted-foreground cursor-not-allowed'
                    }`}
                  >
                    {product.stock > 0 ? 'Ajouter au panier' : 'Rupture de stock'}
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                Aucun produit dans cette catégorie pour le moment.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Custom Orders Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Créations sur mesure
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Vous avez un projet particulier ? Nous créons des pièces personnalisées selon vos envies :
            couleurs, tailles, motifs... Contactez-nous pour discuter de votre projet !
          </p>
          <a
            href="/contact"
            className="inline-block bg-accent text-accent-foreground px-8 py-3 rounded-full text-lg font-medium hover:bg-accent/90 transition-colors"
          >
            Demander une création sur mesure
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
