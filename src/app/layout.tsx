import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";

export const metadata: Metadata = {
  title: "Les 2H - Créations en crochet",
  description: "L'authenticité au bout des doigts - Créations artisanales uniques en crochet.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr" className="h-full antialiased">
      <body className="min-h-full flex flex-col font-sans">
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
