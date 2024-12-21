import React from 'react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import { Product } from '../types';

interface CollectionsPageProps {
  onAddToCart: (product: Product) => void;
}

export default function CollectionsPage({ onAddToCart }: CollectionsPageProps) {
  const categories = ['floral', 'woody', 'oriental', 'fresh'];

  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Our Collections</h1>
        
        {categories.map(category => (
          <div key={category} className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 capitalize">
              {category} Fragrances
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {products
                .filter(product => product.category === category)
                .map(product => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onAddToCart={onAddToCart}
                  />
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}