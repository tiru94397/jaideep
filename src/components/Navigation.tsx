import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu';
import { Badge } from './ui/badge';
import { useTheme } from './ThemeProvider';
import { 
  Menu, 
  Home, 
  Search, 
  Settings, 
  Car, 
  Wrench, 
  Calculator, 
  Calendar, 
  MapPin, 
  Crown, 
  ShieldCheck, 
  Info,
  LogOut,
  GitCompare,
  Sun,
  Moon,
  Sparkles,
  ShoppingCart,
  Package
} from 'lucide-react';
import type { Page } from '../App';

interface NavigationProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
  onLogout: () => void;
  compareCount: number;
  cartCount: number;
}

// Scroll to section function
const scrollToSection = (sectionId: string) => {
  const element = document.querySelector(`[data-section="${sectionId}"]`);
  if (element) {
    element.scrollIntoView({ 
      behavior: 'smooth', 
      block: 'start' 
    });
  } else {
    // If section doesn't exist, navigate to home and then scroll
    window.location.hash = sectionId;
  }
};

export function Navigation({ currentPage, onNavigate, onLogout, compareCount, cartCount }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const menuItems = [
    { id: 'home', label: 'Home', icon: Home, page: 'home' as Page },
    { id: 'catalog', label: 'Browse Bikes', icon: Search, page: 'catalog' as Page },
    { id: 'spares', label: 'Spare Parts', icon: Package, page: 'spares' as Page },
    { id: 'calculators', label: 'Calculators', icon: Calculator, page: 'calculators' as Page },
    { id: 'upcoming', label: 'Upcoming Launches', icon: Calendar, page: 'upcoming' as Page },
    { id: 'rentals', label: 'Rentals', icon: Car, page: 'rentals' as Page },
    { id: 'warranty', label: 'Warranty & Support', icon: ShieldCheck, page: 'warranty' as Page },
    { id: 'about', label: 'About VeloCity', icon: Info, page: 'about' as Page },
  ];

  const serviceItems = [
    { label: 'Normal Service', icon: Settings, action: () => handleNavigate('warranty') },
    { label: 'Specialized Service', icon: Wrench, action: () => handleNavigate('warranty') },
    { label: 'Stickering', icon: Car, action: () => handleNavigate('warranty') },
  ];

  const handleNavigate = (page: Page) => {
    onNavigate(page);
    setIsMobileMenuOpen(false);
  };

  const handleEliteMembership = () => {
    if (currentPage !== 'home') {
      onNavigate('home');
      setTimeout(() => {
        scrollToSection('elite-membership');
      }, 500);
    } else {
      scrollToSection('elite-membership');
    }
    setIsMobileMenuOpen(false);
  };

  const handleNearbyStores = () => {
    if (currentPage !== 'home') {
      onNavigate('home');
      setTimeout(() => {
        scrollToSection('nearby-stores');
      }, 500);
    } else {
      scrollToSection('nearby-stores');
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border shadow-sm"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-12 lg:h-14">
            {/* Logo */}
            <motion.div 
              className="flex items-center cursor-pointer group" 
              onClick={() => handleNavigate('home')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div 
                className="flex items-center justify-center w-8 h-8 bg-gradient-to-r from-accent to-blue-500 rounded-lg mr-2 shadow-md group-hover:shadow-lg transition-shadow duration-300"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-sm text-white font-bold">V</span>
              </motion.div>
              <motion.span 
                className="text-xl font-bold text-primary"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                CycloRooF
              </motion.span>
            </motion.div>

            {/* Desktop Menu */}
            <motion.div 
              className="hidden lg:flex items-center space-x-6"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, staggerChildren: 0.1 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant={currentPage === 'home' ? 'default' : 'ghost'}
                  onClick={() => handleNavigate('home')}
                  className={`transition-all duration-300 ${currentPage === 'home' ? 'bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg' : 'text-foreground hover:text-accent hover:bg-accent/10'}`}
                >
                  Home
                </Button>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant={currentPage === 'catalog' ? 'default' : 'ghost'}
                  onClick={() => handleNavigate('catalog')}
                  className={`transition-all duration-300 ${currentPage === 'catalog' ? 'bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg' : 'text-foreground hover:text-accent hover:bg-accent/10'}`}
                >
                  Browse
                </Button>
              </motion.div>

              {/* Services Dropdown */}
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="text-foreground hover:text-accent hover:bg-accent/10 transition-all duration-300">
                      <Sparkles className="w-4 h-4 mr-2 text-accent" />
                      Services
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-48 bg-card border-border shadow-xl backdrop-blur-sm">
                    {serviceItems.map((item, index) => (
                      <motion.div
                        key={item.label}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <DropdownMenuItem 
                          onClick={item.action}
                          className="flex items-center hover:bg-accent/10 transition-colors duration-200 cursor-pointer"
                        >
                          <item.icon className="w-4 h-4 mr-2 text-accent" />
                          {item.label}
                        </DropdownMenuItem>
                      </motion.div>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant={currentPage === 'rentals' ? 'default' : 'ghost'}
                  onClick={() => handleNavigate('rentals')}
                  className={`transition-all duration-300 ${currentPage === 'rentals' ? 'bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg' : 'text-foreground hover:text-accent hover:bg-accent/10'}`}
                >
                  Rentals
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="ghost"
                  onClick={handleEliteMembership}
                  className="text-foreground hover:text-accent hover:bg-accent/10 flex items-center transition-all duration-300 relative overflow-hidden group"
                >
                  {/* Liquid hover effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-accent/20 to-transparent"
                    initial={{ x: '-100%', skewX: -15 }}
                    whileHover={{ 
                      x: '200%', 
                      transition: { 
                        duration: 0.6, 
                        ease: "easeInOut" 
                      } 
                    }}
                  />
                  <Crown className="w-4 h-4 mr-1 text-accent" />
                  Elite Membership
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="ghost"
                  onClick={handleNearbyStores}
                  className="text-foreground hover:text-accent hover:bg-accent/10 flex items-center transition-all duration-300 relative overflow-hidden group"
                >
                  {/* Liquid hover effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-accent/20 to-transparent"
                    initial={{ x: '-100%', skewX: -15 }}
                    whileHover={{ 
                      x: '200%', 
                      transition: { 
                        duration: 0.6, 
                        ease: "easeInOut" 
                      } 
                    }}
                  />
                  <MapPin className="w-4 h-4 mr-1 text-accent" />
                  Nearby Stores
                </Button>
              </motion.div>
            </motion.div>

            {/* Right Side Actions */}
            <motion.div 
              className="flex items-center space-x-4"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              {/* Theme Toggle */}
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={toggleTheme}
                  className="text-foreground hover:text-accent hover:bg-accent/10 transition-all duration-300"
                >
                  <AnimatePresence mode="wait">
                    {theme === 'light' ? (
                      <motion.div
                        key="sun"
                        initial={{ rotate: -90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 90, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Sun className="w-5 h-5" />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="moon"
                        initial={{ rotate: 90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: -90, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Moon className="w-5 h-5" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Button>
              </motion.div>

              {/* Cart Button */}
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="ghost"
                  onClick={() => handleNavigate('cart')}
                  className="relative text-foreground hover:text-accent hover:bg-accent/10 hidden sm:flex transition-all duration-300"
                >
                  <ShoppingCart className="w-5 h-5" />
                  <AnimatePresence>
                    {cartCount > 0 && (
                      <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      >
                        <Badge className="absolute -top-2 -right-2 bg-accent text-accent-foreground text-xs px-1.5 py-0.5 shadow-lg">
                          {cartCount}
                        </Badge>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Button>
              </motion.div>

              {/* Compare Button */}
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="ghost"
                  onClick={() => handleNavigate('compare')}
                  className="relative text-foreground hover:text-accent hover:bg-accent/10 hidden sm:flex transition-all duration-300"
                >
                  <GitCompare className="w-5 h-5" />
                  <AnimatePresence>
                    {compareCount > 0 && (
                      <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      >
                        <Badge className="absolute -top-2 -right-2 bg-accent text-accent-foreground text-xs px-1.5 py-0.5 shadow-lg">
                          {compareCount}
                        </Badge>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Button>
              </motion.div>

              {/* Mobile Menu Trigger */}
              <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                <SheetTrigger asChild>
                  <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    <Button variant="ghost" size="icon" className="lg:hidden hover:bg-accent/10 transition-colors duration-300">
                      <motion.div
                        animate={isMobileMenuOpen ? { rotate: 90 } : { rotate: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Menu className="w-6 h-6" />
                      </motion.div>
                    </Button>
                  </motion.div>
                </SheetTrigger>
                <SheetContent side="left" className="w-80 bg-gradient-to-b from-background to-card border-border backdrop-blur-sm">
                  <SheetHeader>
                    <SheetTitle className="flex items-center text-left">
                      <motion.div 
                        className="flex items-center justify-center w-8 h-8 bg-gradient-to-r from-accent to-yellow-600 rounded-lg mr-3 shadow-lg"
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      >
                        <span className="text-sm text-primary font-bold">V</span>
                      </motion.div>
                      <motion.span
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        CycloRooF
                      </motion.span>
                    </SheetTitle>
                  </SheetHeader>
                  
                  <motion.div 
                    className="mt-6 space-y-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, staggerChildren: 0.1 }}
                  >
                    {menuItems.map((item, index) => (
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * index }}
                        whileHover={{ x: 5 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Button
                          variant="ghost"
                          onClick={() => handleNavigate(item.page)}
                          className={`w-full justify-start h-12 transition-all duration-300 ${
                            currentPage === item.page 
                              ? 'bg-accent/20 text-accent border-l-4 border-accent shadow-lg' 
                              : 'text-foreground hover:bg-accent/10 hover:translate-x-1'
                          }`}
                        >
                          <item.icon className="w-5 h-5 mr-3 text-accent" />
                          {item.label}
                        </Button>
                      </motion.div>
                    ))}
                    
                    {/* Cart in Mobile */}
                    <motion.div
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * menuItems.length }}
                      whileHover={{ x: 5 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                        variant="ghost"
                        onClick={() => handleNavigate('cart')}
                        className="w-full justify-start h-12 text-foreground hover:bg-accent/10 hover:translate-x-1 transition-all duration-300"
                      >
                        <ShoppingCart className="w-5 h-5 mr-3 text-accent" />
                        Shopping Cart
                        <AnimatePresence>
                          {cartCount > 0 && (
                            <motion.div
                              initial={{ scale: 0, opacity: 0 }}
                              animate={{ scale: 1, opacity: 1 }}
                              exit={{ scale: 0, opacity: 0 }}
                              className="ml-auto"
                            >
                              <Badge className="bg-accent text-accent-foreground">
                                {cartCount}
                              </Badge>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </Button>
                    </motion.div>

                    {/* Compare in Mobile */}
                    <motion.div
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * (menuItems.length + 1) }}
                      whileHover={{ x: 5 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                        variant="ghost"
                        onClick={() => handleNavigate('compare')}
                        className="w-full justify-start h-12 text-foreground hover:bg-accent/10 hover:translate-x-1 transition-all duration-300"
                      >
                        <GitCompare className="w-5 h-5 mr-3 text-accent" />
                        Compare Bikes
                        <AnimatePresence>
                          {compareCount > 0 && (
                            <motion.div
                              initial={{ scale: 0, opacity: 0 }}
                              animate={{ scale: 1, opacity: 1 }}
                              exit={{ scale: 0, opacity: 0 }}
                              className="ml-auto"
                            >
                              <Badge className="bg-accent text-accent-foreground">
                                {compareCount}
                              </Badge>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </Button>
                    </motion.div>

                    {/* Services in Mobile */}
                    <div className="space-y-1 ml-4">
                      <p className="text-sm font-medium text-primary px-3 py-2">Services</p>
                      {serviceItems.map((item) => (
                        <Button
                          key={item.label}
                          variant="ghost"
                          className="w-full justify-start h-10 text-muted-foreground hover:bg-accent/10"
                        >
                          <item.icon className="w-4 h-4 mr-3 text-accent" />
                          {item.label}
                        </Button>
                      ))}
                    </div>

                    <div className="border-t border-border pt-4 mt-4">
                      <motion.div
                        whileHover={{ x: 5 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Button
                          variant="ghost"
                          onClick={handleEliteMembership}
                          className="w-full justify-start h-12 text-foreground hover:bg-accent/10 transition-all duration-300 relative overflow-hidden group"
                        >
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-accent/10 to-transparent"
                            initial={{ x: '-100%' }}
                            whileHover={{ x: '100%' }}
                            transition={{ duration: 0.5 }}
                          />
                          <Crown className="w-5 h-5 mr-3 text-accent relative z-10" />
                          <span className="relative z-10">Elite Membership</span>
                        </Button>
                      </motion.div>
                      
                      <motion.div
                        whileHover={{ x: 5 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Button
                          variant="ghost"
                          onClick={handleNearbyStores}
                          className="w-full justify-start h-12 text-foreground hover:bg-accent/10 transition-all duration-300 relative overflow-hidden group"
                        >
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-accent/10 to-transparent"
                            initial={{ x: '-100%' }}
                            whileHover={{ x: '100%' }}
                            transition={{ duration: 0.5 }}
                          />
                          <MapPin className="w-5 h-5 mr-3 text-accent relative z-10" />
                          <span className="relative z-10">Nearby Stores</span>
                        </Button>
                      </motion.div>
                      
                      <Button
                        variant="ghost"
                        onClick={onLogout}
                        className="w-full justify-start h-12 text-destructive hover:bg-destructive/10"
                      >
                        <LogOut className="w-5 h-5 mr-3" />
                        Logout
                      </Button>
                    </div>
                  </motion.div>
                </SheetContent>
              </Sheet>

              {/* Desktop Logout */}
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="ghost"
                  onClick={onLogout}
                  className="hidden lg:flex text-foreground hover:text-destructive hover:bg-destructive/10 transition-all duration-300"
                >
                  <LogOut className="w-4 h-4 mr-1" />
                  Logout
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.nav>
    </>
  );
}