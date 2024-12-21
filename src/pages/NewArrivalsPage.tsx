import { Product } from '../types';
import ProductCard from '../components/ProductCard';

interface NewArrivalsPageProps {
  onAddToCart: (product: Product) => void;
}

const newArrivals: Product[] = [
  {
    id: '4',
    name: 'Golden Amber',
    brand: 'Maison Lumière',
    price: 220,
    description: 'A warm and sensual blend of amber, vanilla, and precious woods.',
    image: 'https://uae.ibrahimalqurashi.com/image/cache/catalog/products/2024_new/wafya/golden%20amber-1000x1000.jpg',
    category: 'oriental',
    size: '75ml'
  },
  {
    id: '5',
    name: 'Spring Blossom',
    brand: 'Floral Dreams',
    price: 165,
    description: 'A fresh and delicate composition of cherry blossoms and white musk.',
    image: 'https://images.unsplash.com/photo-1557170334-a9632e77c6e4?auto=format&fit=crop&q=80&w=2000',
    category: 'floral',
    size: '50ml'
  }
];

export default function NewArrivalsPage({ onAddToCart }: NewArrivalsPageProps) {
  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">New Arrivals</h1>
        <p className="text-lg text-gray-600 mb-12">
          Discover our latest fragrances, crafted with the finest ingredients and contemporary sensibilities.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {newArrivals.map(product => (
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