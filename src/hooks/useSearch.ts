import { useState, useEffect } from 'react';
import { Product } from '../types';
import { products } from '../data/products';

export function useSearch(query: string) {
  const [results, setResults] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!query) {
      setResults([]);
      return;
    }

    setIsLoading(true);
    
    // Simulate API call with setTimeout
    setTimeout(() => {
      const searchResults = products.filter(product => 
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.brand.toLowerCase().includes(query.toLowerCase()) ||
        product.description.toLowerCase().includes(query.toLowerCase())
      );
      
      setResults(searchResults);
      setIsLoading(false);
    }, 500);
  }, [query]);

  return { results, isLoading };
}