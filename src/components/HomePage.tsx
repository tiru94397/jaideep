import React, { useState, useRef } from 'react';
import { motion, useInView, useAnimation } from 'motion/react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { 
  Star, 
  Zap, 
  Shield, 
  Calculator, 
  Calendar, 
  ShoppingCart,
  Fuel,
  Award,
  ArrowRight,
  Search,
  Sparkles,
  TrendingUp,
  Crown,
  MapPin,
  Users,
  Phone,
  Clock,
  CheckCircle,
  Percent,
  Car,
  Settings,
  Wrench,
  Navigation,
  Headphones,
  Smartphone,
  Truck,
  Heart,
  Globe,
  ChevronLeft,
  ChevronRight,
  Package
} from 'lucide-react';
import type { Page } from '../App';

interface HomePageProps {
  onNavigate: (page: Page) => void;
  onAddToCart: (item: { id: string; name: string; price: number; image: string; type: 'bike' | 'spare' }) => void;
}

export function HomePage({ onNavigate, onAddToCart }: HomePageProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Featured Bikes (Hero Section)
  const featuredBikes = [
    {
      id: 'hero-1',
      name: 'Speed 400',
      brand: 'Triumph',
      price: 275000,
      image: '/bikes/speed.jpg',
      mileage: 35,
      badge: 'New Launch'
    },
    {
      id: 'hero-2',
      name: 'Electric Scooter Pro',
      brand: 'Modern',
      price: 150000,
      image: 'https://images.unsplash.com/photo-1583322319396-08178ea4f8b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx8fHwxNzU4NzQzOTI3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      mileage: 120,
      badge: 'Eco Friendly'
    },
    {
      id: 'hero-3',
      name: 'Cafe Racer 650',
      brand: 'Vintage',
      price: 320000,
      image: 'https://images.unsplash.com/photo-1648780306637-c0e9f2d91faf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXRybyUyMHZpbnRhZ2UlMjBtb3RvcmN5Y2xlJTIwY2xhc3NpY3xlbnwxfHx8fDE3NTg4MzExMjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      mileage: 28,
      badge: 'Trending'
    }
  ];

  // Sport Bikes Section (12 bikes in 3x4 grid with horizontal scroll)
  const sportBikes = [
    {
      id: 'sport-1',
      name: 'Ninja 300',
      brand: 'Kawasaki',
      price: 325000,
      image: '/bikes/ninja-300.jpg',
      mileage: 25
    },
    {
      id: 'sport-2',
      name: 'CBR650R',
      brand: 'Honda',
      price: 885000,
      image: '/bikes/u2.jpg',
      mileage: 22
    },
    {
      id: 'sport-3',
      name: 'YZF-R15',
      brand: 'Yamaha',
      price: 175000,
      image: '/bikes/up3.jpg',
      mileage: 40
    },
    {
      id: 'sport-4',
      name: 'RC 390',
      brand: 'KTM',
      price: 285000,
      image: '/bikes/rc-390.jpg',
      mileage: 23
    },
    {
      id: 'sport-5',
      name: 'Panigale V2',
      brand: 'Ducati',
      price: 1650000,
      image: '/bikes/ducati.jpg',
      mileage: 18
    },
    {
      id: 'sport-6',
      name: 'GSX-R750',
      brand: 'Suzuki',
      price: 1200000,
      image: '/bikes/gsx.jpg',
      mileage: 20
    },
    {
      id: 'sport-7',
      name: 'Street Triple',
      brand: 'Triumph',
      price: 950000,
      image: '/bikes/street.jpg',
      mileage: 22
    },
    {
      id: 'sport-8',
      name: 'Apache RR 310',
      brand: 'TVS',
      price: 260000,
      image: '/bikes/rr.jpg',
      mileage: 35
    },
    {
      id: 'sport-9',
      name: 'Z900',
      brand: 'Kawasaki',
      price: 850000,
      image: '/bikes/z900.jpg',
      mileage: 20
    },
    {
      id: 'sport-10',
      name: 'Monster 821',
      brand: 'Ducati',
      price: 1100000,
      image: '/bikes/ducati1.jpg',
      mileage: 18
    },
    {
      id: 'sport-11',
      name: 'FZ25',
      brand: 'Yamaha',
      price: 155000,
      image: '/bikes/fz25.jpg',
      mileage: 43
    },
    {
      id: 'sport-12',
      name: 'CB300R',
      brand: 'Honda',
      price: 275000,
      image: '/bikes/cbr.jpg',
      mileage: 30
    }
  ];

  // Cruiser Bikes Section
  const cruiserBikes = [
    {
      id: 'cruiser-1',
      name: 'Classic 350',
      brand: 'Royal Enfield',
      price: 195000,
      image: '/bikes/cl350.jpg',
      mileage: 35
    },
    {
      id: 'cruiser-2',
      name: 'Meteor 350',
      brand: 'Royal Enfield',
      price: 220000,
      image: '/bikes/met350.jpg',
      mileage: 36
    },
    {
      id: 'cruiser-3',
      name: 'Bonneville T120',
      brand: 'Triumph',
      price: 950000,
      image: '/bikes/bonni.jpg',
      mileage: 23
    },
    {
      id: 'cruiser-4',
      name: 'Interceptor 650',
      brand: 'Royal Enfield',
      price: 295000,
      image: '/bikes/int.jpg',
      mileage: 25
    },
    {
      id: 'cruiser-5',
      name: 'Bajaj Avenger',
      brand: 'Bajaj',
      price: 125000,
      image: '/bikes/baj.jpg',
      mileage: 45
    },
    {
      id: 'cruiser-6',
      name: 'Rebel 300',
      brand: 'Honda',
      price: 195000,
      image: '/bikes/reb.jpg',
      mileage: 30
    },
    {
      id: 'cruiser-7',
      name: 'Vulcan S',
      brand: 'Kawasaki',
      price: 580000,
      image: '/bikes/vul.jpg',
      mileage: 22
    },
    {
      id: 'cruiser-8',
      name: 'Scout Bobber',
      brand: 'Indian',
      price: 1550000,
      image: '/bikes/bob.jpg',
      mileage: 18
    },
    {
      id: 'cruiser-9',
      name: 'Intruder 150',
      brand: 'Suzuki',
      price: 135000,
      image: '/bikes/int150.jpg',
      mileage: 50
    },
    {
      id: 'cruiser-10',
      name: 'V-Strom 650',
      brand: 'Suzuki',
      price: 850000,
      image: '/bikes/vst.jpg',
      mileage: 20
    },
    {
      id: 'cruiser-11',
      name: 'Tiger 900',
      brand: 'Triumph',
      price: 1350000,
      image: "/bikes/tig900.jpg",
      mileage: 19
    },
    {
      id: 'cruiser-12',
      name: 'Himalayan',
      brand: 'Royal Enfield',
      price: 235000,
      image: '/bikes/him.jpg',
      mileage: 32
    }
  ];

  // Electric Bikes Section
  const electricBikes = [
  {
    id: 'electric-1',
    name: 'iQube Electric',
    brand: 'TVS',
    price: 140000,
    image: '/bikes/iqube.jpg',
    mileage: 140
  },
  {
    id: 'electric-2',
    name: 'Ather 450X',
    brand: 'Ather',
    price: 160000,
    image: '/bikes/ather450.jpg',
    mileage: 150
  },
  {
    id: 'electric-3',
    name: 'Chetak Electric',
    brand: 'Bajaj',
    price: 175000,
    image: '/bikes/chetak.jpg',
    mileage: 95
  },
  {
    id: 'electric-4',
    name: 'One Electric',
    brand: 'Simple',
    price: 145000,
    image: '/bikes/ondeelectric.jpg',
    mileage: 203
  },
  {
    id: 'electric-5',
    name: 'Gen 3',
    brand: 'Ola Electric',
    price: 130000,
    image: '/bikes/gen3.jpg',
    mileage: 181
  },
  {
    id: 'electric-6',
    name: 'Revolt RV400',
    brand: 'Revolt',
    price: 135000,
    image: '/bikes/revolt.jpg',
    mileage: 150
  },
  {
    id: 'electric-7',
    name: 'EV6000',
    brand: 'Okinawa',
    price: 90000,
    image: '/bikes/ev6000.jpg',
    mileage: 100
  },
  {
    id: 'electric-8',
    name: 'Ampere Magnus',
    brand: 'Ampere',
    price: 85000,
    image: '/bikes/ampere.jpg',
    mileage: 121
  },
  {
    id: 'electric-9',
    name: 'Hero Vida V1',
    brand: 'Hero',
    price: 155000,
    image: '/bikes/via.jpg',
    mileage: 165
  },
  {
    id: 'electric-10',
    name: 'BGauss B8',
    brand: 'BGauss',
    price: 95000,
    image: '/bikes/bgauss.jpg',
    mileage: 120
  },
  {
    id: 'electric-11',
    name: 'Access 125',
    brand: 'Suzuki',
    price: 110000,
    image: '/bikes/access.jpg',
    mileage: 130
  },
  {
    id: 'electric-12',
    name: 'Jupiter Electric',
    brand: 'TVS',
    price: 125000,
    image: '/bikes/jupiter.jpg',
    mileage: 145
  }
]

  const HorizontalScrollSection = ({ 
    title, 
    bikes, 
    sectionId 
  }: { 
    title: string; 
    bikes: any[]; 
    sectionId: string;
  }) => {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
      if (scrollRef.current) {
        const scrollAmount = 320; // Width of one card plus gap
        scrollRef.current.scrollBy({
          left: direction === 'left' ? -scrollAmount : scrollAmount,
          behavior: 'smooth'
        });
      }
    };

    return (
      <section className="py-12" data-section={sectionId}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <motion.h2 
              className="text-3xl font-bold"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              {title}
            </motion.h2>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => scroll('left')}
                className="p-2"
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => scroll('right')}
                className="p-2"
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
          
          <div 
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {bikes.map((bike, index) => (
              <motion.div
                key={bike.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex-none w-80"
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="relative">
                      <ImageWithFallback
                        src={bike.image}
                        alt={bike.name}
                        className="w-full h-48 object-cover rounded-t-lg"
                      />
                      <div className="absolute top-2 right-2">
                        <Badge className="bg-primary/90 text-primary-foreground">
                          {bike.mileage} km/l
                        </Badge>
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="mb-2">
                        <Badge variant="outline" className="text-xs">
                          {bike.brand}
                        </Badge>
                      </div>
                      <h3 className="font-semibold text-lg mb-2">{bike.name}</h3>
                      <p className="text-2xl font-bold text-primary mb-4">
                        ₹{bike.price.toLocaleString()}
                      </p>
                      <div className="flex gap-2">
                        <Button 
                          size="sm" 
                          className="flex-1"
                          onClick={() => onAddToCart({
                            id: bike.id,
                            name: bike.name,
                            price: bike.price,
                            image: bike.image,
                            type: 'bike'
                          })}
                        >
                          <ShoppingCart className="w-4 h-4 mr-1" />
                          Add to Cart
                        </Button>
                        <Button 
                          size="sm" 
                          variant="outline"
                          onClick={() => onNavigate('details')}
                        >
                          View Details
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary to-accent text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Welcome to <span className="text-accent-foreground">CycloRoof</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Your Ultimate Two-Wheeler Marketplace
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                onClick={() => onNavigate('catalog')}
              >
                Browse All Bikes
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                size="lg"
                className="bg-accent hover:bg-accent/90"
                onClick={() => onNavigate('spares')}
              >
                Shop Spare Parts
                <Settings className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Bikes Carousel */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-4xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Featured Bikes
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredBikes.map((bike, index) => (
              <motion.div
                key={bike.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <CardContent className="p-0">
                    <div className="relative">
                      <ImageWithFallback
                        src={bike.image}
                        alt={bike.name}
                        className="w-full h-64 object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-accent text-accent-foreground">
                          {bike.badge}
                        </Badge>
                      </div>
                      <div className="absolute top-4 right-4">
                        <Badge variant="outline" className="bg-background/90">
                          {bike.mileage} km/l
                        </Badge>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="mb-3">
                        <Badge variant="outline">{bike.brand}</Badge>
                      </div>
                      <h3 className="font-bold text-xl mb-3">{bike.name}</h3>
                      <p className="text-3xl font-bold text-primary mb-4">
                        ₹{bike.price.toLocaleString()}
                      </p>
                      <div className="flex gap-3">
                        <Button 
                          className="flex-1"
                          onClick={() => onAddToCart({
                            id: bike.id,
                            name: bike.name,
                            price: bike.price,
                            image: bike.image,
                            type: 'bike'
                          })}
                        >
                          <ShoppingCart className="w-4 h-4 mr-2" />
                          Add to Cart
                        </Button>
                        <Button variant="outline" onClick={() => onNavigate('details')}>
                          Details
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Horizontal Scrolling Sections */}
      <HorizontalScrollSection title="Sport Bikes" bikes={sportBikes} sectionId="sport-bikes" />
      
      <div className="bg-muted/20">
        <HorizontalScrollSection title="Cruiser & Adventure" bikes={cruiserBikes} sectionId="cruiser-bikes" />
      </div>
      
      <HorizontalScrollSection title="Electric Bikes" bikes={electricBikes} sectionId="electric-bikes" />

      {/* Services Section */}
      <section className="py-16 bg-gradient-to-r from-accent/10 to-primary/10" data-section="services">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-4xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our Services
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Calculator, title: "EMI Calculator", desc: "Calculate your bike loan EMI" },
              { icon: Calendar, title: "Book Test Ride", desc: "Experience before you buy" },
              { icon: Shield, title: "Warranty Support", desc: "Comprehensive coverage" },
              { icon: Wrench, title: "Service Center", desc: "Expert maintenance services" }
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <Card className="p-6 hover:shadow-lg transition-all duration-300">
                  <service.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.desc}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Elite Membership Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-accent text-primary-foreground" data-section="elite-membership">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Crown className="w-16 h-16 mx-auto mb-6 text-accent-foreground" />
            <h2 className="text-4xl font-bold mb-6">CycloRoof Elite Membership</h2>
            <p className="text-xl mb-8 opacity-90">
              Exclusive benefits, priority service, and special discounts for our premium members
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {[
                { icon: Percent, title: "Exclusive Discounts", desc: "Up to 15% off on purchases" },
                { icon: Award, title: "Priority Service", desc: "Skip the queue at service centers" },
                { icon: Package, title: "Special Offers", desc: "Early access to new launches" }
              ].map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <benefit.icon className="w-10 h-10 mx-auto mb-3 text-accent-foreground" />
                  <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                  <p className="opacity-90">{benefit.desc}</p>
                </motion.div>
              ))}
            </div>
            <Button 
              size="lg" 
              variant="outline"
              className="bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              Join Elite Membership
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Nearby Stores Section */}
      <section className="py-16" data-section="nearby-stores">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-4xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Find Stores Near You
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { city: "Mumbai", stores: 25, icon: MapPin },
              { city: "Delhi", stores: 32, icon: MapPin },
              { city: "Bangalore", stores: 18, icon: MapPin }
            ].map((location, index) => (
              <motion.div
                key={location.city}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-6 text-center hover:shadow-lg transition-all duration-300">
                  <location.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-xl mb-2">{location.city}</h3>
                  <p className="text-muted-foreground mb-4">{location.stores} Stores Available</p>
                  <Button variant="outline" size="sm">
                    Find Locations
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}