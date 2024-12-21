import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Product, CartItem } from './types';
import Navbar from './components/Navbar';
import Cart from './components/Cart';
import HomePage from './pages/HomePage';
import CollectionsPage from './pages/CollectionsPage';
import NewArrivalsPage from './pages/NewArrivalsPage';
import BestsellersPage from './pages/BestsellersPage';
import AboutPage from './pages/AboutPage';
import SearchPage from './pages/SearchPage';
import ProductDetailPage from './pages/ProductDetailPage';
import Footer from './components/Footer';

function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product: Product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.product.id === product.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { product, quantity: 1 }];
    });
  };

  const updateQuantity = (productId: string, quantity: number) => {
    setCartItems(prevItems =>
      quantity === 0
        ? prevItems.filter(item => item.product.id !== productId)
        : prevItems.map(item =>
            item.product.id === productId
              ? { ...item, quantity }
              : item
          )
    );
  };

  const removeItem = (productId: string) => {
    setCartItems(prevItems =>
      prevItems.filter(item => item.product.id !== productId)
    );
  };

  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar 
          cartItemsCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)}
          onCartClick={() => setIsCartOpen(true)}
        />
        
        <main>
          <Routes>
            <Route path="/" element={<HomePage onAddToCart={addToCart} />} />
            <Route path="/collections" element={<CollectionsPage onAddToCart={addToCart} />} />
            <Route path="/new-arrivals" element={<NewArrivalsPage onAddToCart={addToCart} />} />
            <Route path="/bestsellers" element={<BestsellersPage onAddToCart={addToCart} />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/search" element={<SearchPage onAddToCart={addToCart} />} />
            <Route path="/product/:id" element={<ProductDetailPage onAddToCart={addToCart} />} />
          </Routes>
        </main>

        <Cart
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
          items={cartItems}
          onUpdateQuantity={updateQuantity}
          onRemoveItem={removeItem}
        />

        <Footer />
      </div>
    </Router>
  );
}

export default App;