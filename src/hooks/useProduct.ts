import { useState, useEffect } from 'react';
import { Product } from '../types';
import { products } from '../data/products';

export function useProduct(id: string | undefined) {
  const [product, setProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!id) {
      setProduct(null);
      setIsLoading(false);
      return;
    }

    // Simulate API call with setTimeout
    setTimeout(() => {
      const foundProduct = products.find(p => p.id === id) || null;
      setProduct(foundProduct);
      setIsLoading(false);
    }, 500);
  }, [id]);

  return { product, isLoading };
}