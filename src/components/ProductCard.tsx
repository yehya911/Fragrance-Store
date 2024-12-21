import { Link } from 'react-router-dom';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export default function ProductCard({ product, onAddToCart }: ProductCardProps) {
  return (
    <div className="group">
      <div className="aspect-square w-full overflow-hidden rounded-lg bg-gray-200">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover object-center group-hover:opacity-75 transition-opacity"
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700">{product.name}</h3>
          <p className="mt-1 text-sm text-gray-500">{product.brand}</p>
        </div>
        <p className="text-sm font-medium text-gray-900">${product.price}</p>
      </div>
      <div className="mt-4 flex gap-2">
        <button
          onClick={() => onAddToCart(product)}
          className="flex-1 bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 transition-colors"
        >
          Add to Cart
        </button>
        <Link
          to={`/product/${product.id}`}
          className="flex-1 bg-gray-100 text-gray-900 py-2 px-4 rounded-md hover:bg-gray-200 transition-colors text-center"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}