import React from 'react';
import { Product } from '../types';
import ProductCard from '../components/ProductCard';

interface BestsellersPageProps {
  onAddToCart: (product: Product) => void;
}

const bestsellers: Product[] = [
  {
    id: '6',
    name: 'Midnight Rose',
    brand: 'Maison Lumière',
    price: 185,
    description: 'Our bestselling rose fragrance with over 10,000 bottles sold.',
    image: 'https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?auto=format&fit=crop&q=80&w=2000',
    category: 'floral',
    size: '50ml'
  },
  {
    id: '7',
    name: 'Ocean Breeze',
    brand: 'Aqua Essence',
    price: 150,
    description: 'A timeless fresh scent loved by customers worldwide.',
    image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=2000',
    category: 'fresh',
    size: '75ml'
  }
];

export default function BestsellersPage({ onAddToCart }: BestsellersPageProps) {
  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Bestsellers</h1>
        <p className="text-lg text-gray-600 mb-12">
          Our most loved fragrances, chosen by thousands of customers worldwide.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {bestsellers.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
      </div>
    </div>
  );
}