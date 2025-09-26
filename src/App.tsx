import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ThemeProvider } from './components/ThemeProvider';
import { LoginPage } from './components/LoginPage';
import { HomePage } from './components/HomePage';
import { Navigation } from './components/Navigation';
import { BikeCatalog } from './components/BikeCatalog';
import { BikeDetails } from './components/BikeDetails';
import { ComparisonTool } from './components/ComparisonTool';
import { Calculators } from './components/Calculators';
import { UpcomingLaunches } from './components/UpcomingLaunches';
import { Rentals } from './components/Rentals';
import { WarrantySupport } from './components/WarrantySupport';
import { About } from './components/About';
import { Footer } from './components/Footer';
import { Spares } from './components/Spares';
import { Cart } from './components/Cart';
import { AIChatSupport } from './components/AIChatSupport';

export type Page = 'login' | 'home' | 'catalog' | 'details' | 'compare' | 'calculators' | 'upcoming' | 'rentals' | 'warranty' | 'about' | 'spares' | 'cart';

export interface Bike {
  id: string;
  name: string;
  brand: string;
  price: number;
  image: string;
  mileage: number;
  fuelType: 'Petrol' | 'Electric' | 'Hybrid';
  engine: string;
  power: string;
  torque: string;
  rpm: string;
  cylinders: number;
  description: string;
  category?: string;
  stock?: number;
}

export interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
  type: 'bike' | 'spare';
}

export interface SparePart {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  brand: string;
  compatibleBikes: string[];
  description: string;
  stock: number;
}

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('login');
  const [selectedBike, setSelectedBike] = useState<Bike | null>(null);
  const [compareList, setCompareList] = useState<Bike[]>([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isChatOpen, setIsChatOpen] = useState(false);

  const navigateTo = (page: Page, bike?: Bike) => {
    setCurrentPage(page);
    if (bike) setSelectedBike(bike);
    // Scroll to top when changing sections
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const addToCompare = (bike: Bike) => {
    if (compareList.length < 3 && !compareList.find(b => b.id === bike.id)) {
      setCompareList([...compareList, bike]);
    }
  };

  const removeFromCompare = (bikeId: string) => {
    setCompareList(compareList.filter(b => b.id !== bikeId));
  };

  const addToCart = (item: { id: string; name: string; price: number; image: string; type: 'bike' | 'spare' }) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(cartItem => cartItem.id === item.id);
      if (existingItem) {
        return prevItems.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...prevItems, { ...item, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (itemId: string) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== itemId));
  };

  const updateCartQuantity = (itemId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(itemId);
    } else {
      setCartItems(prevItems =>
        prevItems.map(item =>
          item.id === itemId ? { ...item, quantity } : item
        )
      );
    }
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
    setCurrentPage('home');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentPage('login');
  };

  if (!isLoggedIn) {
    return (
      <ThemeProvider>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <LoginPage onLogin={handleLogin} />
        </motion.div>
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider>
      <motion.div 
        className="min-h-screen bg-background transition-colors duration-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Navigation 
          currentPage={currentPage} 
          onNavigate={navigateTo} 
          onLogout={handleLogout}
          compareCount={compareList.length}
          cartCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)}
        />
        
        <main className="pt-12 lg:pt-14">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {currentPage === 'home' && <HomePage onNavigate={navigateTo} onAddToCart={addToCart} />}
              {currentPage === 'catalog' && (
                <BikeCatalog 
                  onNavigate={navigateTo} 
                  onAddToCompare={addToCompare}
                  onAddToCart={addToCart}
                  compareList={compareList}
                />
              )}
              {currentPage === 'details' && selectedBike && (
                <BikeDetails 
                  bike={selectedBike} 
                  onAddToCompare={addToCompare}
                  onAddToCart={addToCart}
                  onNavigate={navigateTo}
                />
              )}
              {currentPage === 'compare' && (
                <ComparisonTool 
                  bikes={compareList} 
                  onRemove={removeFromCompare}
                  onNavigate={navigateTo}
                />
              )}
              {currentPage === 'calculators' && <Calculators />}
              {currentPage === 'upcoming' && <UpcomingLaunches onNavigate={navigateTo} onAddToCart={addToCart} />}
              {currentPage === 'rentals' && <Rentals onNavigate={navigateTo} onAddToCart={addToCart} />}
              {currentPage === 'warranty' && <WarrantySupport />}
              {currentPage === 'about' && <About />}
              {currentPage === 'spares' && <Spares onNavigate={navigateTo} onAddToCart={addToCart} />}
              {currentPage === 'cart' && (
                <Cart 
                  items={cartItems}
                  onRemove={removeFromCart}
                  onUpdateQuantity={updateCartQuantity}
                  onNavigate={navigateTo}
                />
              )}
            </motion.div>
          </AnimatePresence>
        </main>

        <Footer onNavigate={navigateTo} />
        
        {/* AI Chat Support */}
        <AIChatSupport isOpen={isChatOpen} onToggle={() => setIsChatOpen(!isChatOpen)} />
      </motion.div>
    </ThemeProvider>
  );
}