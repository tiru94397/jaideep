import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from './ui/select';
import { Slider } from './ui/slider';
import { ImageWithFallback } from './figma/ImageWithFallback';
import {
  Search,
  Filter,
  Grid,
  List,
  Fuel,
  Zap,
  Star,
  Heart,
  GitCompare,
  Eye
} from 'lucide-react';
import type { Page, Bike } from '../App';

interface BikeCatalogProps {
  onNavigate: (page: Page, bike?: Bike) => void;
  onAddToCompare: (bike: Bike) => void;
  compareList: Bike[];
}

export function BikeCatalog({ onNavigate, onAddToCompare, compareList }: BikeCatalogProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [priceRange, setPriceRange] = useState([50000, 500000]);
  const [selectedBrand, setSelectedBrand] = useState('all-brands');
  const [selectedFuelType, setSelectedFuelType] = useState('all-types');
  const [sortBy, setSortBy] = useState('default');

const bikes: Bike[] = [
  // ===== Petrol Bikes =====
  {
    id: '1',
    name: 'Speed 400',
    brand: 'Triumph',
    price: 275000,
    image: '/bikes/speed.jpg',
    mileage: 35,
    fuelType: 'Petrol',
    engine: '398cc',
    power: '40 HP',
    torque: '37.5 Nm',
    rpm: '6500',
    cylinders: 1,
    description: 'Retro styling meets modern performance, perfect for city rides and weekend adventures.',
  },
  {
    id: '2',
    name: 'Cafe Racer 650',
    brand: 'Vintage',
    price: 320000,
    image: '/bikes/cf650.jpg',
    mileage: 28,
    fuelType: 'Petrol',
    engine: '648cc',
    power: '47 HP',
    torque: '52 Nm',
    rpm: '7250',
    cylinders: 2,
    description: 'Classic cafe racer design with modern engineering, ideal for enthusiasts who value style and performance.',
  },
  {
    id: '3',
    name: 'Classic 350',
    brand: 'Royal Enfield',
    price: 195000,
    image: '/bikes/cl350.jpg',
    mileage: 35,
    fuelType: 'Petrol',
    engine: '349cc',
    power: '20 HP',
    torque: '27 Nm',
    rpm: '5250',
    cylinders: 1,
    description: 'Timeless design with modern reliability. Perfect for purist riders.',
  },
  {
    id: '4',
    name: 'Meteor 350',
    brand: 'Royal Enfield',
    price: 220000,
    image: '/bikes/met350.jpg',
    mileage: 36,
    fuelType: 'Petrol',
    engine: '349cc',
    power: '20 HP',
    torque: '28 Nm',
    rpm: '5250',
    cylinders: 1,
    description: 'A smooth cruiser for city and highway tours with classic styling.',
  },
  {
    id: '5',
    name: 'Adventure 390',
    brand: 'KTM',
    price: 295000,
    image: '/bikes/rc3901.jpg',
    mileage: 32,
    fuelType: 'Petrol',
    engine: '373cc',
    power: '44 HP',
    torque: '37 Nm',
    rpm: '9000',
    cylinders: 1,
    description: 'Built for adventure seekers, handles city streets and mountain trails with confidence.',
  },
  {
    id: '6',
    name: 'CBR650R',
    brand: 'Honda',
    price: 885000,
    image: '/bikes/cbr650r.jpg',
    mileage: 22,
    fuelType: 'Petrol',
    engine: '648cc',
    power: '87 HP',
    torque: '60 Nm',
    rpm: '12000',
    cylinders: 4,
    description: 'Mid-weight sports bike with aggressive styling and Honda reliability.',
  },
  {
    id: '7',
    name: 'GSX-R750',
    brand: 'Suzuki',
    price: 1200000,
    image: '/bikes/gsx750.jpg',
    mileage: 20,
    fuelType: 'Petrol',
    engine: '750cc',
    power: '148 HP',
    torque: '86 Nm',
    rpm: '13000',
    cylinders: 4,
    description: 'Legendary supersport bike combining superbike performance and lightweight handling.',
  },
  {
    id: '8',
    name: 'RC 390',
    brand: 'KTM',
    price: 285000,
    image: '/bikes/rc-390.jpg',
    mileage: 23,
    fuelType: 'Petrol',
    engine: '373cc',
    power: '43 HP',
    torque: '37 Nm',
    rpm: '9000',
    cylinders: 1,
    description: 'Race-ready bike designed for agility and precision, loved by enthusiasts.',
  },
  {
    id: '9',
    name: 'Duke 200',
    brand: 'KTM',
    price: 200000,
    image: '/bikes/duke200.jpg',
    mileage: 30,
    fuelType: 'Petrol',
    engine: '199cc',
    power: '25 HP',
    torque: '19 Nm',
    rpm: '10000',
    cylinders: 1,
    description: 'Lightweight sport bike, perfect for city commuting with sharp handling.',
  },
  {
    id: '10',
    name: 'Duke 390',
    brand: 'KTM',
    price: 285000,
    image: '/bikes/duke390.jpg',
    mileage: 32,
    fuelType: 'Petrol',
    engine: '373cc',
    power: '44 HP',
    torque: '37 Nm',
    rpm: '9000',
    cylinders: 1,
    description: 'Powerful and lightweight bike with aggressive styling and excellent handling.',
  },
  // ===== Electric Bikes =====
  {
    id: '11',
    name: 'Electric Scooter Pro',
    brand: 'Modern',
    price: 150000,
    image: '/bikes/e-scooter.jpg',
    mileage: 120,
    fuelType: 'Electric',
    engine: '3kW Motor',
    power: '4 HP',
    torque: '25 Nm',
    rpm: 'N/A',
    cylinders: 0,
    description: 'Zero-emission, low-maintenance, smart connectivity features make it perfect for urban commuting.',
  },
  {
    id: '12',
    name: 'iQube Electric',
    brand: 'TVS',
    price: 140000,
    image: '/bikes/iqube.jpg',
    mileage: 140,
    fuelType: 'Electric',
    engine: '1.5kW Motor',
    power: '2 HP',
    torque: '15 Nm',
    rpm: 'N/A',
    cylinders: 0,
    description: 'Lightweight, efficient, and packed with smart features for city commuting.',
  },
  {
    id: '13',
    name: 'Ather 450X',
    brand: 'Ather',
    price: 160000,
    image: '/bikes/ather450.jpg',
    mileage: 150,
    fuelType: 'Electric',
    engine: '2kW Motor',
    power: '3 HP',
    torque: '20 Nm',
    rpm: 'N/A',
    cylinders: 0,
    description: 'High-performance electric scooter with smart features and modern design.',
  },
  {
    id: '14',
    name: 'Revolt RV400',
    brand: 'Revolt',
    price: 125000,
    image: '/bikes/revolt.jpg',
    mileage: 120,
    fuelType: 'Electric',
    engine: '3kW Motor',
    power: '3.5 HP',
    torque: '25 Nm',
    rpm: 'N/A',
    cylinders: 0,
    description: 'Affordable electric bike with smart app integration and eco-friendly performance.',
  },
  {
    id: '15',
    name: 'Ola S1 Pro',
    brand: 'Ola',
    price: 160000,
    image: '/bikes/ondeelectric.jpg',
    mileage: 130,
    fuelType: 'Electric',
    engine: '3.3kW Motor',
    power: '4 HP',
    torque: '26 Nm',
    rpm: 'N/A',
    cylinders: 0,
    description: 'High-tech electric scooter with long-range and smart dashboard features.',
  },
  {
    id: '16',
    name: 'Ampere Magnus Pro',
    brand: 'Ampere',
    price: 110000,
    image: '/bikes/ampere.jpg',
    mileage: 100,
    fuelType: 'Electric',
    engine: '2kW Motor',
    power: '2.5 HP',
    torque: '18 Nm',
    rpm: 'N/A',
    cylinders: 0,
    description: 'Reliable electric scooter with decent range and smooth performance.',
  },
  // ===== Superbikes / Performance =====
  {
    id: '17',
    name: 'Ninja ZX-10R',
    brand: 'Kawasaki',
    price: 1800000,
    image: '/bikes/ninja-300.jpg',
    mileage: 15,
    fuelType: 'Petrol',
    engine: '998cc',
    power: '203 HP',
    torque: '114 Nm',
    rpm: '14000',
    cylinders: 4,
    description: 'Top-tier superbike with unmatched performance and aggressive styling.',
  },
  // ... Continue with bikes 18–30 in the same format
    {
    id: '18',
    name: 'Panigale V4',
    brand: 'Ducati',
    price: 3500000,
    image: '/bikes/ducati.jpg',
    mileage: 14,
    fuelType: 'Petrol',
    engine: '1103cc',
    power: '214 HP',
    torque: '124 Nm',
    rpm: '13000',
    cylinders: 4,
    description: 'Italian masterpiece combining speed, power, and iconic design.',
  },
  {
    id: '19',
    name: 'YZF-R1',
    brand: 'Yamaha',
    price: 2300000,
    image: '/bikes/yzfr1.jpg',
    mileage: 16,
    fuelType: 'Petrol',
    engine: '998cc',
    power: '200 HP',
    torque: '112 Nm',
    rpm: '13500',
    cylinders: 4,
    description: 'Legendary superbike engineered for track and street performance.',
  },
  {
    id: '20',
    name: 'MT-09',
    brand: 'Yamaha',
    price: 1050000,
    image: '/bikes/mt09.jpg',
    mileage: 20,
    fuelType: 'Petrol',
    engine: '889cc',
    power: '119 HP',
    torque: '93 Nm',
    rpm: '10000',
    cylinders: 3,
    description: 'Versatile naked bike with powerful engine and comfortable ergonomics.',
  },
  {
    id: '21',
    name: 'Street Triple RS',
    brand: 'Triumph',
    price: 1200000,
    image: '/bikes/street.jpg',
    mileage: 22,
    fuelType: 'Petrol',
    engine: '765cc',
    power: '121 HP',
    torque: '79 Nm',
    rpm: '11500',
    cylinders: 3,
    description: 'Aggressive naked sports bike with excellent handling and high-end components.',
  },
  {
    id: '22',
    name: 'CB500X',
    brand: 'Honda',
    price: 650000,
    image: '/bikes/cbx500.jpg',
    mileage: 25,
    fuelType: 'Petrol',
    engine: '471cc',
    power: '47 HP',
    torque: '43 Nm',
    rpm: '8500',
    cylinders: 2,
    description: 'Adventure-ready mid-weight bike, suitable for city and light off-road touring.',
  },
  {
    id: '23',
    name: 'Africa Twin',
    brand: 'Honda',
    price: 1600000,
    image: '/bikes/africatwin.jpg',
    mileage: 20,
    fuelType: 'Petrol',
    engine: '998cc',
    power: '101 HP',
    torque: '105 Nm',
    rpm: '7500',
    cylinders: 2,
    description: 'Legendary adventure tourer, perfect for long rides and rugged terrains.',
  },
  {
    id: '24',
    name: 'Tiger 900',
    brand: 'Triumph',
    price: 1700000,
    image: '/bikes/tig900.jpg',
    mileage: 21,
    fuelType: 'Petrol',
    engine: '888cc',
    power: '95 HP',
    torque: '87 Nm',
    rpm: '8750',
    cylinders: 3,
    description: 'Adventure sport bike, offering long-range comfort and sporty handling.',
  },
  {
    id: '25',
    name: 'Dominar 400',
    brand: 'Bajaj',
    price: 220000,
    image: '/bikes/dominar.jpg',
    mileage: 32,
    fuelType: 'Petrol',
    engine: '373cc',
    power: '40 HP',
    torque: '35 Nm',
    rpm: '8750',
    cylinders: 1,
    description: 'Power cruiser designed for highways and urban streets with style and performance.',
  },
  {
    id: '26',
    name: 'Pulsar NS200',
    brand: 'Bajaj',
    price: 160000,
    image: '/bikes/baj.jpg',
    mileage: 35,
    fuelType: 'Petrol',
    engine: '199cc',
    power: '24 HP',
    torque: '18.6 Nm',
    rpm: '9000',
    cylinders: 1,
    description: 'Aggressive street bike for urban enthusiasts, lightweight and fast.',
  },
  {
    id: '27',
    name: 'Apache RTR 200',
    brand: 'TVS',
    price: 140000,
    image: '/bikes/apache.jpg',
    mileage: 38,
    fuelType: 'Petrol',
    engine: '197cc',
    power: '20 HP',
    torque: '18.1 Nm',
    rpm: '8500',
    cylinders: 1,
    description: 'Popular street bike, sporty and comfortable for daily commuting.',
  },
  {
    id: '28',
    name: 'MT-15',
    brand: 'Yamaha',
    price: 170000,
    image: '/bikes/mt15.jpg',
    mileage: 40,
    fuelType: 'Petrol',
    engine: '155cc',
    power: '18 HP',
    torque: '13.9 Nm',
    rpm: '10000',
    cylinders: 1,
    description: 'Compact naked bike with modern styling and aggressive performance.',
  },
  {
    id: '29',
    name: 'FZ25',
    brand: 'Yamaha',
    price: 160000,
    image: '/bikes/fz25.jpg',
    mileage: 38,
    fuelType: 'Petrol',
    engine: '249cc',
    power: '20 HP',
    torque: '20 Nm',
    rpm: '8000',
    cylinders: 1,
    description: 'Versatile street bike with balanced performance and comfortable ergonomics.',
  },
  {
    id: '30',
    name: 'Ninja 400',
    brand: 'Kawasaki',
    price: 600000,
    image: '/bikes/ninja-400.jpg',
    mileage: 30,
    fuelType: 'Petrol',
    engine: '399cc',
    power: '47 HP',
    torque: '38 Nm',
    rpm: '10000',
    cylinders: 2,
    description: 'Popular lightweight sports bike combining sporty handling with reliability.',
  },
];


  const brands = Array.from(new Set(bikes.map(bike => bike.brand)));
  const fuelTypes = Array.from(new Set(bikes.map(bike => bike.fuelType)));

  const filteredBikes = bikes.filter(bike => {
    const matchesSearch =
      bike.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      bike.brand.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesPrice = bike.price >= priceRange[0] && bike.price <= priceRange[1];
    const matchesBrand = selectedBrand === 'all-brands' || bike.brand === selectedBrand;
    const matchesFuelType = selectedFuelType === 'all-types' || bike.fuelType === selectedFuelType;

    return matchesSearch && matchesPrice && matchesBrand && matchesFuelType;
  });

  const sortedBikes = [...filteredBikes].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'mileage':
        return b.mileage - a.mileage;
      case 'brand':
        return a.brand.localeCompare(b.brand);
      default:
        return 0;
    }
  });

  const isInCompareList = (bikeId: string) => compareList.some(bike => bike.id === bikeId);

  const handleViewDetails = (bike: Bike) => onNavigate('details', bike);

  return (
    <div className="min-h-screen bg-background px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl lg:text-4xl font-bold text-primary mb-4">Browse Bikes</h1>
          <p className="text-lg text-muted-foreground">
            Find your perfect two-wheeler from our extensive collection
          </p>
        </div>

        {/* Search & Filters */}
        <div className="bg-card rounded-2xl shadow-lg p-6 mb-8">
          <div className="grid lg:grid-cols-6 gap-4 items-end">
            {/* Search */}
            <div className="lg:col-span-2">
              <label className="block text-sm font-medium text-card-foreground mb-2">Search</label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Search bikes..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 border-border focus:border-accent focus:ring-accent"
                />
              </div>
            </div>

            {/* Brand Filter */}
            <div>
              <label className="block text-sm font-medium text-card-foreground mb-2">Brand</label>
              <Select value={selectedBrand} onValueChange={setSelectedBrand}>
                <SelectTrigger className="border-border focus:border-accent">
                  <SelectValue placeholder="All Brands" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all-brands">All Brands</SelectItem>
                  {brands.map(brand => (
                    <SelectItem key={brand} value={brand}>{brand}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Fuel Type Filter */}
            <div>
              <label className="block text-sm font-medium text-card-foreground mb-2">Fuel Type</label>
              <Select value={selectedFuelType} onValueChange={setSelectedFuelType}>
                <SelectTrigger className="border-border focus:border-accent">
                  <SelectValue placeholder="All Types" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all-types">All Types</SelectItem>
                  {fuelTypes.map(type => (
                    <SelectItem key={type} value={type}>{type}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Sort By */}
            <div>
              <label className="block text-sm font-medium text-card-foreground mb-2">Sort By</label>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="border-border focus:border-accent">
                  <SelectValue placeholder="Default" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="default">Default</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="mileage">Best Mileage</SelectItem>
                  <SelectItem value="brand">Brand A-Z</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* View Toggle */}
            <div className="flex gap-2">
              <Button
                variant={viewMode === 'grid' ? 'default' : 'outline'}
                size="icon"
                onClick={() => setViewMode('grid')}
                className={viewMode === 'grid' ? 'bg-yellow-400 hover:bg-yellow-500 text-white' : ''}
              >
                <Grid className="w-4 h-4" />
              </Button>
              <Button
                variant={viewMode === 'list' ? 'default' : 'outline'}
                size="icon"
                onClick={() => setViewMode('list')}
                className={viewMode === 'list' ? 'bg-yellow-400 hover:bg-yellow-500 text-white' : ''}
              >
                <List className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Price Range Filter */}
          <div className="mt-6 pt-6 border-t border-gray-200 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Price Range: ₹{priceRange[0].toLocaleString()} - ₹{priceRange[1].toLocaleString()}
              </label>
              <Slider
                value={priceRange}
                onValueChange={setPriceRange}
                min={Math.min(...bikes.map(bike => bike.price))}
                max={Math.max(...bikes.map(bike => bike.price))}
                step={10000}
                className="w-full max-w-md"
              />
            </div>

            {/* Note Box */}
            <div className="bg-yellow-100 border-l-4 border-yellow-400 text-yellow-700 p-3 rounded-md max-w-sm">
              <p className="text-sm">
                Note: To see all bikes, set the slider maximum to ₹{Math.max(...bikes.map(bike => bike.price)).toLocaleString()}.
              </p>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="flex justify-between items-center mb-6">
          <p className="text-gray-600">
            Showing {sortedBikes.length} of {bikes.length} bikes
          </p>
          {compareList.length > 0 && (
            <Button onClick={() => onNavigate('compare')} className="bg-orange-500 hover:bg-orange-600 text-white">
              <GitCompare className="w-4 h-4 mr-2" />
              Compare ({compareList.length})
            </Button>
          )}
        </div>

        {/* Bikes Grid/List */}
        <div className={`grid gap-6 ${viewMode === 'grid' ? 'md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' : 'grid-cols-1'}`}>
          {sortedBikes.map(bike => (
            <Card key={bike.id} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden bg-white group">
              {viewMode === 'grid' ? (
                <>
                  <div className="relative">
                    <ImageWithFallback
                      src={bike.image}
                      alt={bike.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 right-3 flex gap-2">
                      <Button size="icon" variant="secondary" className="w-8 h-8 bg-white/80 hover:bg-white">
                        <Heart className="w-4 h-4" />
                      </Button>
                      {bike.fuelType === 'Electric' && (
                        <Badge className="bg-green-500 text-white">
                          <Zap className="w-3 h-3 mr-1" />
                          EV
                        </Badge>
                      )}
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="space-y-3">
                      <div>
                        <h3 className="font-bold text-gray-900">{bike.name}</h3>
                        <p className="text-gray-600">{bike.brand}</p>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-gray-900">₹{bike.price.toLocaleString()}</span>
                        <div className="flex items-center text-sm text-gray-600">
                          <Fuel className="w-4 h-4 mr-1 text-orange-500" />
                          {bike.mileage} km/l
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button
                          onClick={() => handleViewDetails(bike)}
                          className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-white border-0 rounded-lg"
                        >
                          <Eye className="w-4 h-4 mr-1" /> View
                        </Button>
                        <Button
                          onClick={() => onAddToCompare(bike)}
                          disabled={isInCompareList(bike.id) || compareList.length >= 3}
                          variant="outline"
                          className={`flex-1 border-gray-200 hover:bg-gray-50 rounded-lg ${isInCompareList(bike.id) ? 'bg-orange-50 text-orange-600 border-orange-200' : ''}`}
                        >
                          <GitCompare className="w-4 h-4 mr-1" />
                          {isInCompareList(bike.id) ? 'Added' : 'Compare'}
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </>
              ) : (
                <div className="flex p-6">
                  <ImageWithFallback
                    src={bike.image}
                    alt={bike.name}
                    className="w-32 h-24 object-cover rounded-lg mr-6"
                  />
                  <div className="flex-1 space-y-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-bold text-gray-900">{bike.name}</h3>
                        <p className="text-gray-600">{bike.brand}</p>
                      </div>
                      <div className="text-right">
                        <span className="text-2xl font-bold text-gray-900">₹{bike.price.toLocaleString()}</span>
                        <div className="flex items-center text-sm text-gray-600 mt-1">
                          <Fuel className="w-4 h-4 mr-1 text-orange-500" />
                          {bike.mileage} km/l
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm">{bike.description}</p>
                    <div className="flex gap-2 pt-2">
                      <Button onClick={() => handleViewDetails(bike)} className="bg-yellow-400 hover:bg-yellow-500 text-white border-0 rounded-lg">
                        View Details
                      </Button>
                      <Button
                        onClick={() => onAddToCompare(bike)}
                        disabled={isInCompareList(bike.id) || compareList.length >= 3}
                        variant="outline"
                        className={`border-gray-200 hover:bg-gray-50 rounded-lg ${isInCompareList(bike.id) ? 'bg-orange-50 text-orange-600 border-orange-200' : ''}`}
                      >
                        <GitCompare className="w-4 h-4 mr-1" />
                        {isInCompareList(bike.id) ? 'Added to Compare' : 'Add to Compare'}
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </Card>
          ))}
        </div>

        {/* No Results */}
        {sortedBikes.length === 0 && (
          <div className="text-center py-12">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-xl font-medium text-gray-900 mb-2">No bikes found</h3>
            <p className="text-gray-600">Try adjusting your search criteria or filters</p>
          </div>
        )}
      </div>
    </div>
  );
}
