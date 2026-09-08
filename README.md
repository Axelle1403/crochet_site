# Site E-commerce - Marque de Crochet

Site web e-commerce moderne pour une marque de vêtements et accessoires en crochet, créé avec Next.js, React, TailwindCSS et shadcn/ui.

## 🎨 Caractéristiques

- **Page d'accueil** : Hero accrocheur, présentation de la marque, coups de cœur, lien Instagram
- **Page À propos** : Histoire du trio de créatrices, valeurs de la marque
- **Catalogue** : Grille de produits avec filtres par catégorie (Accessoires, Vêtements, Pièces uniques)
- **Panier d'achat** : Gestion du panier avec localStorage
- **Checkout** : Formulaire de commande avec options de paiement
- **Page contact** : Formulaire de contact, coordonnées, réseaux sociaux
- **Dashboard admin** : Interface pour gérer les produits (ajouter, modifier, supprimer)
- **Design responsive** : Adapté mobile, tablette et desktop
- **Palette de couleurs** : Tons neutres (beige, blanc cassé, gris) avec touches pastel (rose poudré, vert sauge)

## 🚀 Démarrage rapide

### Prérequis

- Node.js 18+ installé
- npm ou yarn

### Installation

1. Cloner le projet :
```bash
cd crochet-site
```

2. Installer les dépendances :
```bash
npm install
```

3. Lancer le serveur de développement :
```bash
npm run dev
```

4. Ouvrir [http://localhost:3000](http://localhost:3000) dans votre navigateur

## 🎯 Personnalisation

### 1. Changer le nom de la marque

Remplacez `[Nom de la marque]` par votre nom de marque dans les fichiers suivants :
- `src/app/page.tsx`
- `src/app/about/page.tsx`
- `src/app/catalog/page.tsx`
- `src/app/contact/page.tsx`
- `src/app/cart/page.tsx`
- `src/app/checkout/page.tsx`
- `src/app/admin/page.tsx`
- `src/components/navigation.tsx`
- `src/app/layout.tsx` (metadata)

### 2. Modifier les couleurs

Éditez `src/app/globals.css` pour personnaliser la palette de couleurs :
```css
:root {
  --background: #faf9f7;      /* Fond principal */
  --foreground: #2d2d2d;      /* Texte principal */
  --primary: #d4a5a5;         /* Couleur principale (rose poudré) */
  --secondary: #e8e4e1;       /* Couleur secondaire */
  --accent: #c5d4c5;          /* Couleur d'accent (vert sauge) */
  /* ... autres variables */
}
```

### 3. Ajouter vos produits

Modifiez `src/data/products.ts` pour ajouter vos produits :
```typescript
export const products: Product[] = [
  {
    id: '1',
    name: 'Nom du produit',
    description: 'Description du produit',
    price: 45,
    category: 'accessories', // ou 'clothing' ou 'unique'
    image: '/chemin/vers/image.jpg',
    stock: 10,
  },
  // ... ajoutez vos produits
];
```

### 4. Ajouter vos images

Placez vos images dans le dossier `public/` et mettez à jour les chemins dans :
- `src/data/products.ts` (images des produits)
- `src/app/about/page.tsx` (photo des créatrices)
- `src/app/page.tsx` (images de la page d'accueil)

### 5. Configurer les réseaux sociaux

Mettez à jour les liens Instagram et TikTok dans :
- `src/app/page.tsx`
- `src/app/contact/page.tsx`

### 6. Configurer l'email de contact

Remplacez `contact@votremarque.com` par votre email professionnel dans `src/app/contact/page.tsx`.

## 💳 Intégration Stripe (Optionnel)

Pour accepter des paiements réels avec Stripe :

1. Créer un compte Stripe : [stripe.com](https://stripe.com)
2. Installer les packages Stripe :
```bash
npm install stripe @stripe/stripe-js
```
3. Créer un fichier `.env.local` avec vos clés Stripe :
```
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=votre_clé_publique
STRIPE_SECRET_KEY=votre_clé_secrète
```
4. Implémenter l'intégration Stripe dans `src/app/checkout/page.tsx` (actuellement simulé)

## 📦 Déploiement

### Vercel (Recommandé)

1. Poussez votre code sur GitHub
2. Importez le projet sur [Vercel](https://vercel.com)
3. Suivez les instructions de déploiement

### Autres plateformes

Le site peut être déployé sur :
- Netlify
- AWS Amplify
- Render
- Tout hébergeur supportant Next.js

## 📁 Structure du projet

```
src/
├── app/
│   ├── about/          # Page À propos
│   ├── admin/          # Dashboard admin
│   ├── cart/           # Page panier
│   ├── catalog/        # Page catalogue
│   ├── checkout/       # Page checkout
│   ├── contact/        # Page contact
│   ├── globals.css     # Styles globaux
│   ├── layout.tsx      # Layout principal
│   └── page.tsx        # Page d'accueil
├── components/
│   └── navigation.tsx  # Barre de navigation
├── context/
│   └── CartContext.tsx # Contexte du panier
├── data/
│   └── products.ts     # Données des produits
└── types/
    └── product.ts      # Types TypeScript
```

## 🔧 Technologies utilisées

- **Next.js 16** - Framework React
- **React 19** - Bibliothèque UI
- **TypeScript** - Typage statique
- **TailwindCSS** - Framework CSS
- **shadcn/ui** - Composants UI

## 📝 Notes importantes

- Le système de panier utilise localStorage (les données sont persistantes localement)
- Le dashboard admin est une démo - pour la production, connectez-le à une base de données
- Le paiement est actuellement simulé - intégrez Stripe pour des paiements réels
- Les formulaires de contact sont simulés - connectez-les à un service email (Resend, SendGrid, etc.)

## 🤝 Support

Pour toute question ou problème, n'hésitez pas à consulter la documentation :
- [Next.js Documentation](https://nextjs.org/docs)
- [TailwindCSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com)

---

Créé avec ❤️ pour votre marque de crochet
