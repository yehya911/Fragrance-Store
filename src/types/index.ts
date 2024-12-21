export interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  description: string;
  image: string;
  category: 'floral' | 'woody' | 'oriental' | 'fresh';
  size: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}