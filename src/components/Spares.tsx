import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Search, Filter, Star, ShoppingCart, Wrench, Settings, Zap, Disc, Eye } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { ImageWithFallback } from './figma/ImageWithFallback';
import type { SparePart, Page } from '../App';

interface SparesProps {
  onNavigate: (page: Page) => void;
  onAddToCart: (item: { id: string; name: string; price: number; image: string; type: 'bike' | 'spare' }) => void;
}

const spareParts: SparePart[] = [
  // Engine Parts
  {
    id: 'engine-1',
    name: 'High Performance Engine Block',
    category: 'Engine',
    price: 45000,
    image: 'https://images.unsplash.com/photo-1703181230250-c25802f3449b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3RvcmN5Y2xlJTIwZW5naW5lJTIwcGFydHMlMjBzcGFyZXxlbnwxfHx8fDE3NTg4MzA4Mzl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    brand: 'Honda',
    compatibleBikes: ['Honda CBR650R', 'Honda CB Shine'],
    description: 'Complete engine block assembly with enhanced performance.',
    stock: 5
  },
  {
    id: 'engine-2',
    name: 'Piston Ring Set',
    category: 'Engine',
    price: 2500,
    image: 'https://images.unsplash.com/photo-1703181230250-c25802f3449b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3RvcmN5Y2xlJTIwZW5naW5lJTIwcGFydHMlMjBzcGFyZXxlbnwxfHx8fDE3NTg4MzA4Mzl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    brand: 'Yamaha',
    compatibleBikes: ['Yamaha R15', 'Yamaha MT-15'],
    description: 'High-quality piston rings for optimal engine performance.',
    stock: 12
  },
  {
    id: 'engine-3',
    name: 'Cylinder Head Assembly',
    category: 'Engine',
    price: 18000,
    image: 'https://images.unsplash.com/photo-1703181230250-c25802f3449b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3RvcmN5Y2xlJTIwZW5naW5lJTIwcGFydHMlMjBzcGFyZXxlbnwxfHx8fDE3NTg4MzA4Mzl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    brand: 'KTM',
    compatibleBikes: ['KTM Duke 390', 'KTM RC 390'],
    description: 'Complete cylinder head with valves and camshaft.',
    stock: 8
  },
  {
    id: 'engine-4',
    name: 'Crankshaft Assembly',
    category: 'Engine',
    price: 22000,
    image: 'https://images.unsplash.com/photo-1703181230250-c25802f3449b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3RvcmN5Y2xlJTIwZW5naW5lJTIwcGFydHMlMjBzcGFyZXxlbnwxfHx8fDE3NTg4MzA4Mzl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    brand: 'Bajaj',
    compatibleBikes: ['Bajaj Pulsar NS200', 'Bajaj Dominar 400'],
    description: 'Forged crankshaft for enhanced durability and performance.',
    stock: 3
  },

  // Exhaust & Silencer
  {
    id: 'exhaust-1',
    name: 'Performance Silencer',
    category: 'Exhaust',
    price: 8500,
    image: 'https://images.unsplash.com/photo-1675247911627-0fb610250598?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3RvcmN5Y2xlJTIwc2lsZW5jZXIlMjBleGhhdXN0JTIwcGFydHN8ZW58MXx8fHwxNzU4ODMwODQyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    brand: 'Akrapovic',
    compatibleBikes: ['Universal'],
    description: 'High-flow performance silencer with titanium construction.',
    stock: 15
  },
  {
    id: 'exhaust-2',
    name: 'Carbon Fiber Exhaust Tip',
    category: 'Exhaust',
    price: 3500,
    image: 'https://images.unsplash.com/photo-1675247911627-0fb610250598?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3RvcmN5Y2xlJTIwc2lsZW5jZXIlMjBleGhhdXN0JTIwcGFydHN8ZW58MXx8fHwxNzU4ODMwODQyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    brand: 'Yoshimura',
    compatibleBikes: ['Universal'],
    description: 'Lightweight carbon fiber exhaust tip for sporty look.',
    stock: 20
  },
  {
    id: 'exhaust-3',
    name: 'Full Exhaust System',
    category: 'Exhaust',
    price: 25000,
    image: 'https://images.unsplash.com/photo-1675247911627-0fb610250598?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3RvcmN5Y2xlJTIwc2lsZW5jZXIlMjBleGhhdXN0JTIwcGFydHN8ZW58MXx8fHwxNzU4ODMwODQyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    brand: 'Two Brothers Racing',
    compatibleBikes: ['Kawasaki Ninja 300', 'Kawasaki Z400'],
    description: 'Complete exhaust system for maximum performance gain.',
    stock: 6
  },

  // Brake Parts
  {
    id: 'brake-1',
    name: 'Racing Brake Disc Set',
    category: 'Brakes',
    price: 12000,
    image: 'https://images.unsplash.com/photo-1736237277037-8727a931b049?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3RvcmN5Y2xlJTIwYnJha2UlMjBkaXNjJTIwcGFydHN8ZW58MXx8fHwxNzU4ODMwODQ0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    brand: 'Brembo',
    compatibleBikes: ['Universal 320mm'],
    description: 'High-performance floating brake discs for superior stopping power.',
    stock: 10
  },
  {
    id: 'brake-2',
    name: 'Performance Brake Pads',
    category: 'Brakes',
    price: 2800,
    image: 'https://images.unsplash.com/photo-1736237277037-8727a931b049?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3RvcmN5Y2xlJTIwYnJha2UlMjBkaXNjJTIwcGFydHN8ZW58MXx8fHwxNzU4ODMwODQ0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    brand: 'EBC',
    compatibleBikes: ['Universal'],
    description: 'Sintered brake pads for enhanced braking performance.',
    stock: 25
  },
  {
    id: 'brake-3',
    name: 'Brake Caliper Assembly',
    category: 'Brakes',
    price: 15000,
    image: 'https://images.unsplash.com/photo-1736237277037-8727a931b049?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3RvcmN5Y2xlJTIwYnJha2UlMjBkaXNjJTIwcGFydHN8ZW58MXx8fHwxNzU4ODMwODQ0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    brand: 'Nissin',
    compatibleBikes: ['Honda CBR series'],
    description: 'Radial mount brake caliper with 4-piston design.',
    stock: 7
  },

  // Chain & Sprocket
  {
    id: 'chain-1',
    name: 'X-Ring Chain Set',
    category: 'Drive Train',
    price: 4500,
    image: 'https://images.unsplash.com/photo-1741254231171-15a4154b5d8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3RvcmN5Y2xlJTIwY2hhaW4lMjBzcHJvY2tldCUyMHBhcnRzfGVufDF8fHx8MTc1ODgzMDg0N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    brand: 'DID',
    compatibleBikes: ['Universal 520 pitch'],
    description: 'Heavy-duty X-ring chain for extended life and smooth operation.',
    stock: 18
  },
  {
    id: 'chain-2',
    name: 'Aluminum Sprocket Set',
    category: 'Drive Train',
    price: 3200,
    image: 'https://images.unsplash.com/photo-1741254231171-15a4154b5d8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3RvcmN5Y2xlJTIwY2hhaW4lMjBzcHJvY2tldCUyMHBhcnRzfGVufDF8fHx8MTc1ODgzMDg0N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    brand: 'Renthal',
    compatibleBikes: ['Universal'],
    description: 'Lightweight aluminum sprockets for better acceleration.',
    stock: 22
  },

  // Lighting
  {
    id: 'light-1',
    name: 'LED Headlight Assembly',
    category: 'Lighting',
    price: 6500,
    image: 'https://images.unsplash.com/photo-1421344682218-763a7bcdf34b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3RvcmN5Y2xlJTIwaGVhZGxpZ2h0JTIwYXNzZW1ibHklMjBwYXJ0c3xlbnwxfHx8fDE3NTg4MzA4NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    brand: 'Philips',
    compatibleBikes: ['Universal H4'],
    description: 'High-intensity LED headlight with daylight visibility.',
    stock: 14
  },
  {
    id: 'light-2',
    name: 'RGB LED Strip Kit',
    category: 'Lighting',
    price: 2200,
    image: 'https://images.unsplash.com/photo-1421344682218-763a7bcdf34b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3RvcmN5Y2xlJTIwaGVhZGxpZ2h0JTIwYXNzZW1ibHklMjBwYXJ0c3xlbnwxfHx8fDE3NTg4MzA4NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    brand: 'Custom Dynamics',
    compatibleBikes: ['Universal'],
    description: 'Waterproof RGB LED strips with mobile app control.',
    stock: 30
  }
];

const categories = ['All', 'Engine', 'Exhaust', 'Brakes', 'Drive Train', 'Lighting'];
const brands = ['All', 'Honda', 'Yamaha', 'KTM', 'Bajaj', 'Akrapovic', 'Brembo', 'DID'];

export function Spares({ onNavigate, onAddToCart }: SparesProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedBrand, setSelectedBrand] = useState('All');
  const [priceRange, setPriceRange] = useState('All');

  const filteredParts = spareParts.filter(part => {
    const matchesSearch = part.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         part.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || part.category === selectedCategory;
    const matchesBrand = selectedBrand === 'All' || part.brand === selectedBrand;
    
    let matchesPrice = true;
    if (priceRange === 'Under 5000') matchesPrice = part.price < 5000;
    else if (priceRange === '5000-15000') matchesPrice = part.price >= 5000 && part.price <= 15000;
    else if (priceRange === 'Above 15000') matchesPrice = part.price > 15000;

    return matchesSearch && matchesCategory && matchesBrand && matchesPrice;
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Engine': return <Settings className="w-5 h-5" />;
      case 'Exhaust': return <Zap className="w-5 h-5" />;
      case 'Brakes': return <Disc className="w-5 h-5" />;
      case 'Drive Train': return <Wrench className="w-5 h-5" />;
      case 'Lighting': return <Eye className="w-5 h-5" />;
      default: return <Settings className="w-5 h-5" />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary to-accent text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Motorcycle Spare Parts</h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Genuine and aftermarket parts for all motorcycle brands. Quality guaranteed, performance enhanced.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search spare parts..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map(category => (
                    <SelectItem key={category} value={category}>{category}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedBrand} onValueChange={setSelectedBrand}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Brand" />
                </SelectTrigger>
                <SelectContent>
                  {brands.map(brand => (
                    <SelectItem key={brand} value={brand}>{brand}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={priceRange} onValueChange={setPriceRange}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Price Range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="All">All Prices</SelectItem>
                  <SelectItem value="Under 5000">Under ₹5,000</SelectItem>
                  <SelectItem value="5000-15000">₹5,000 - ₹15,000</SelectItem>
                  <SelectItem value="Above 15000">Above ₹15,000</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Spare Parts Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredParts.map((part, index) => (
              <motion.div
                key={part.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 group">
                  <CardHeader className="p-0">
                    <div className="relative overflow-hidden rounded-t-lg">
                      <ImageWithFallback
                        src={part.image}
                        alt={part.name}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute top-2 left-2">
                        {getCategoryIcon(part.category)}
                      </div>
                      <div className="absolute top-2 right-2">
                        <Badge variant={part.stock > 10 ? "default" : part.stock > 0 ? "secondary" : "destructive"}>
                          {part.stock > 0 ? `${part.stock} in stock` : 'Out of stock'}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4 flex-1 flex flex-col">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="outline">{part.category}</Badge>
                        <Badge variant="outline">{part.brand}</Badge>
                      </div>
                      <CardTitle className="text-lg mb-2 line-clamp-2">{part.name}</CardTitle>
                      <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
                        {part.description}
                      </p>
                      <div className="mb-3">
                        <p className="text-xs text-muted-foreground">Compatible with:</p>
                        <p className="text-sm">{part.compatibleBikes.join(', ')}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="text-xl font-bold text-primary">
                        ₹{part.price.toLocaleString()}
                      </div>
                      <Button 
                        size="sm"
                        disabled={part.stock === 0}
                        onClick={() => onAddToCart({
                          id: part.id,
                          name: part.name,
                          price: part.price,
                          image: part.image,
                          type: 'spare'
                        })}
                        className="gap-1"
                      >
                        <ShoppingCart className="w-4 h-4" />
                        Add to Cart
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {filteredParts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">No spare parts found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Categories Overview */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Shop by Category</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Find the right parts for your motorcycle across various categories
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {categories.slice(1).map((category, index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center group cursor-pointer"
                onClick={() => setSelectedCategory(category)}
              >
                <div className="bg-card rounded-xl p-6 hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                  <div className="text-primary mb-3 flex justify-center">
                    {getCategoryIcon(category)}
                  </div>
                  <h3 className="font-medium">{category}</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {spareParts.filter(part => part.category === category).length} items
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}