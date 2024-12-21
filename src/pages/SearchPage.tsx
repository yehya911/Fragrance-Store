import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { useSearch } from '../hooks/useSearch';
import ProductCard from '../components/ProductCard';
import { Product } from '../types';

interface SearchPageProps {
  onAddToCart: (product: Product) => void;
}

export default function SearchPage({ onAddToCart }: SearchPageProps) {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const { results, isLoading } = useSearch(query);

  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Search Results</h1>
        <p className="text-lg text-gray-600 mb-8">
          {query ? `Showing results for "${query}"` : 'No search query provided'}
        </p>

        {isLoading ? (
          <div className="flex justify-center items-center min-h-[200px]">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
          </div>
        ) : results.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {results.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={onAddToCart}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500">No fragrances found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  );
}