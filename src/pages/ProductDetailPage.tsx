import React from 'react';
import { useParams } from 'react-router-dom';
import { useProduct } from '../hooks/useProduct';

export default function ProductDetailPage({ onAddToCart }) {
  const { id } = useParams();
  const { product, isLoading } = useProduct(id);

  if (isLoading) {
    return (
      <div className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex justify-center items-center min-h-[400px]">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
          </div>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900">Product not found</h1>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <img
              src={product.image}
              alt={product.name}
              className="w-full rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
            <p className="text-xl text-gray-600 mb-4">{product.brand}</p>
            <p className="text-2xl font-bold text-gray-900 mb-6">${product.price}</p>
            <p className="text-gray-600 mb-6">{product.description}</p>
            <div className="mb-6">
              <h2 className="text-lg font-bold text-gray-900 mb-2">Details</h2>
              <ul className="space-y-2 text-gray-600">
                <li>Size: {product.size}</li>
                <li>Category: {product.category}</li>
              </ul>
            </div>
            <button
              onClick={() => onAddToCart(product)}
              className="w-full bg-black text-white py-3 px-6 rounded-md hover:bg-gray-800 transition-colors"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}