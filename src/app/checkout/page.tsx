'use client';

import { useState } from 'react';
import { useCart } from '@/context/CartContext';
import Navigation from '@/components/navigation';
import Logo from '@/components/logo';
import Footer from '@/components/footer';
import Link from 'next/link';

export default function CheckoutPage() {
  const { cart, cartTotal, clearCart } = useCart();
  const [isProcessing, setIsProcessing] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    postalCode: '',
    country: 'France',
    phone: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    alert('Commande confirmée ! Merci pour votre achat.');
    clearCart();
    window.location.href = '/';
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <Navigation />
        <div className="container mx-auto px-4 py-20 text-center">
          <div className="mb-6 flex justify-center">
            <Logo className="h-16 w-auto" />
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-4">Commande</h1>
          <p className="text-xl text-muted-foreground mb-8">Votre panier est vide</p>
          <Link
            href="/catalog"
            className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-full text-lg font-medium hover:bg-primary/90 transition-colors"
          >
            Découvrir notre collection
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

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
            Finaliser votre commande
          </h1>
          <p className="text-xl text-muted-foreground">
            Vous y êtes presque !
          </p>
        </div>
      </section>

      {/* Checkout Content */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Checkout Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Contact Information */}
                <div className="bg-card p-6 rounded-lg shadow-sm">
                  <h2 className="text-xl font-bold text-foreground mb-6">Informations de contact</h2>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring bg-background"
                        placeholder="votre@email.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                        Téléphone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring bg-background"
                        placeholder="+33 6 00 00 00 00"
                      />
                    </div>
                  </div>
                </div>

                {/* Shipping Information */}
                <div className="bg-card p-6 rounded-lg shadow-sm">
                  <h2 className="text-xl font-bold text-foreground mb-6">Adresse de livraison</h2>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
                        Prénom *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring bg-background"
                        placeholder="Jean"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
                        Nom *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring bg-background"
                        placeholder="Dupont"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label htmlFor="address" className="block text-sm font-medium text-foreground mb-2">
                        Adresse *
                      </label>
                      <input
                        type="text"
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring bg-background"
                        placeholder="123 Rue de la Paix"
                      />
                    </div>
                    <div>
                      <label htmlFor="postalCode" className="block text-sm font-medium text-foreground mb-2">
                        Code postal *
                      </label>
                      <input
                        type="text"
                        id="postalCode"
                        name="postalCode"
                        value={formData.postalCode}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring bg-background"
                        placeholder="75001"
                      />
                    </div>
                    <div>
                      <label htmlFor="city" className="block text-sm font-medium text-foreground mb-2">
                        Ville *
                      </label>
                      <input
                        type="text"
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring bg-background"
                        placeholder="Paris"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label htmlFor="country" className="block text-sm font-medium text-foreground mb-2">
                        Pays *
                      </label>
                      <input
                        type="text"
                        id="country"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring bg-background"
                      />
                    </div>
                  </div>
                </div>

                {/* Payment Information */}
                <div className="bg-card p-6 rounded-lg shadow-sm">
                  <h2 className="text-xl font-bold text-foreground mb-6">Paiement</h2>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 p-4 border border-input rounded-lg">
                      <input
                        type="radio"
                        id="card"
                        name="paymentMethod"
                        value="card"
                        defaultChecked
                        className="w-4 h-4"
                      />
                      <label htmlFor="card" className="flex-1 cursor-pointer">
                        <span className="font-medium text-foreground">Carte bancaire</span>
                        <p className="text-sm text-muted-foreground">Visa, Mastercard, etc.</p>
                      </label>
                    </div>
                    
                    <div className="flex items-center gap-3 p-4 border border-input rounded-lg">
                      <input
                        type="radio"
                        id="paypal"
                        name="paymentMethod"
                        value="paypal"
                        className="w-4 h-4"
                      />
                      <label htmlFor="paypal" className="flex-1 cursor-pointer">
                        <span className="font-medium text-foreground">PayPal</span>
                        <p className="text-sm text-muted-foreground">Payez en toute sécurité avec PayPal</p>
                      </label>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-muted/30 rounded-lg">
                    <p className="text-sm text-muted-foreground">
                      🔒 Paiement sécurisé via Stripe. Vos informations de paiement sont cryptées et ne sont jamais stockées sur nos serveurs.
                    </p>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isProcessing}
                  className="w-full bg-primary text-primary-foreground py-4 rounded-full font-medium hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-lg"
                >
                  {isProcessing ? 'Traitement en cours...' : `Payer ${cartTotal.toFixed(2)} €`}
                </button>
              </form>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-card p-6 rounded-lg shadow-sm sticky top-4">
                <h2 className="text-xl font-bold text-foreground mb-6">Récapitulatif de commande</h2>
                
                <div className="space-y-4">
                  {cart.map((item) => (
                    <div key={item.id} className="flex gap-3">
                      <div className="w-16 h-16 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium text-foreground text-sm">{item.name}</h3>
                        <p className="text-xs text-muted-foreground">Qté: {item.quantity}</p>
                        <p className="font-bold text-foreground text-sm">{(item.price * item.quantity).toFixed(2)} €</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-t border-border pt-4 space-y-3">
                  <div className="flex justify-between text-muted-foreground">
                    <span>Sous-total</span>
                    <span>{cartTotal.toFixed(2)} €</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>Livraison</span>
                    <span>Gratuite</span>
                  </div>
                  <div className="border-t border-border pt-3 flex justify-between font-bold text-foreground text-lg">
                    <span>Total</span>
                    <span>{cartTotal.toFixed(2)} €</span>
                  </div>
                </div>

                <div className="mt-6 text-xs text-muted-foreground">
                  <p className="mb-2">En passant commande, vous acceptez nos conditions générales de vente.</p>
                  <p>Délai de livraison : 5-7 jours ouvrés pour les produits en stock.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
