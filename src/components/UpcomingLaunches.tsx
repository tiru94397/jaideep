import React from 'react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { 
  Calendar, 
  Bell, 
  Star,
  Zap,
  Clock,
  TrendingUp
} from 'lucide-react';
import type { Page } from '../App';

interface UpcomingLaunchesProps {
  onNavigate: (page: Page) => void;
}

export function UpcomingLaunches({ onNavigate }: UpcomingLaunchesProps) {
  const upcomingBikes = [
    {
      id: '1',
      name: 'Thunder 450X',
      brand: 'PowerMax',
      expectedPrice: 320000,
      launchDate: '2025-03-15',
      image: 'https://images.unsplash.com/photo-1669905153773-4fab38326b7f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx8fHwxNzU4NjU1NjQ2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      features: ['450cc Engine', 'ABS', 'LED Lights', 'Digital Console'],
      description: 'A powerful sports bike designed for thrill seekers.',
      status: 'coming-soon'
    },
    {
      id: '2',
      name: 'EcoRide Pro Max',
      brand: 'GreenTech',
      expectedPrice: 180000,
      launchDate: '2025-02-28',
      image: 'https://images.unsplash.com/photo-1583322319396-08178ea4f8b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx8fHwxNzU4NzQzOTI3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      features: ['150km Range', 'Fast Charging', 'Smart Connectivity', 'App Control'],
      description: 'Next-generation electric scooter with AI features.',
      status: 'pre-launch'
    },
    {
      id: '3',
      name: 'Heritage Classic 500',
      brand: 'Royal Motors',
      expectedPrice: 285000,
      launchDate: '2025-04-10',
      image: 'https://images.unsplash.com/photo-1642418425655-7168f530b42d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx8fHwxNzU4NzQzOTI4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      features: ['500cc Engine', 'Retro Design', 'Chrome Finish', 'Comfortable Seat'],
      description: 'Classic styling meets modern engineering excellence.',
      status: 'announced'
    },
    {
      id: '4',
      name: 'Urban Commuter EV',
      brand: 'CityRide',
      expectedPrice: 95000,
      launchDate: '2025-02-15',
      image: 'https://images.unsplash.com/photo-1692668696811-90976b749459?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx8fHwxNzU4NzAwNTU4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      features: ['80km Range', 'Lightweight', 'Quick Charge', 'GPS Tracking'],
      description: 'Perfect for daily city commuting with zero emissions.',
      status: 'coming-soon'
    },
    {
      id: '5',
      name: 'Adventure Pro 650',
      brand: 'Explorer',
      expectedPrice: 450000,
      launchDate: '2025-05-20',
      image: 'https://images.unsplash.com/photo-1669905153773-4fab38326b7f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx8fHwxNzU4NjU1NjQ2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      features: ['650cc Twin Engine', 'Off-road Tires', 'Adventure Kit', 'Long Range Tank'],
      description: 'Built for long-distance touring and off-road adventures.',
      status: 'announced'
    },
    {
      id: '6',
      name: 'Sport Racer 300',
      brand: 'SpeedDemon',
      expectedPrice: 220000,
      launchDate: '2025-03-30',
      image: 'https://images.unsplash.com/photo-1642418425655-7168f530b42d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx8fHwxNzU4NzQzOTI4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      features: ['300cc Engine', 'Racing Position', 'Track Mode', 'Carbon Fiber'],
      description: 'Track-focused bike for racing enthusiasts.',
      status: 'pre-launch'
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'coming-soon':
        return <Badge className="bg-yellow-500 text-white">Coming Soon</Badge>;
      case 'pre-launch':
        return <Badge className="bg-orange-500 text-white">Pre-Launch</Badge>;
      case 'announced':
        return <Badge className="bg-blue-500 text-white">Announced</Badge>;
      default:
        return <Badge variant="outline">TBA</Badge>;
    }
  };

  const getDaysUntilLaunch = (launchDate: string) => {
    const today = new Date();
    const launch = new Date(launchDate);
    const diffTime = launch.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? diffDays : 0;
  };

  return (
    <div className="min-h-screen bg-gray-50 px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Upcoming Launches</h1>
          <p className="text-lg text-gray-600">Be the first to know about the latest two-wheelers hitting the market</p>
        </div>

        {/* Stats */}
        <div className="grid sm:grid-cols-3 gap-6 mb-12">
          <Card className="border-0 shadow-lg bg-gradient-to-r from-yellow-400 to-orange-500 text-white">
            <CardContent className="p-6 text-center">
              <Calendar className="w-10 h-10 mx-auto mb-3" />
              <h3 className="text-2xl font-bold">{upcomingBikes.length}</h3>
              <p>Bikes Launching</p>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-lg bg-gradient-to-r from-green-400 to-blue-500 text-white">
            <CardContent className="p-6 text-center">
              <Zap className="w-10 h-10 mx-auto mb-3" />
              <h3 className="text-2xl font-bold">3</h3>
              <p>Electric Models</p>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-lg bg-gradient-to-r from-purple-400 to-pink-500 text-white">
            <CardContent className="p-6 text-center">
              <TrendingUp className="w-10 h-10 mx-auto mb-3" />
              <h3 className="text-2xl font-bold">₹95K</h3>
              <p>Starting Price</p>
            </CardContent>
          </Card>
        </div>

        {/* Upcoming Bikes Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {upcomingBikes.map((bike) => {
            const daysLeft = getDaysUntilLaunch(bike.launchDate);
            return (
              <Card key={bike.id} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden bg-white group">
                <div className="relative">
                  <ImageWithFallback
                    src={bike.image}
                    alt={bike.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3">
                    {getStatusBadge(bike.status)}
                  </div>
                  <div className="absolute top-3 right-3 bg-white/90 rounded-lg px-2 py-1">
                    <div className="flex items-center text-xs">
                      <Clock className="w-3 h-3 mr-1 text-orange-500" />
                      <span className="font-medium">{daysLeft} days</span>
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div>
                      <Badge variant="outline" className="text-orange-500 border-orange-200 mb-2">
                        {bike.brand}
                      </Badge>
                      <h3 className="font-bold text-gray-900">{bike.name}</h3>
                      <p className="text-gray-600 text-sm">{bike.description}</p>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-xs text-gray-500">Expected Price</span>
                        <p className="font-bold text-gray-900">₹{bike.expectedPrice.toLocaleString()}</p>
                      </div>
                      <div className="text-right">
                        <span className="text-xs text-gray-500">Launch Date</span>
                        <p className="font-medium text-gray-900">
                          {new Date(bike.launchDate).toLocaleDateString('en-IN', {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric'
                          })}
                        </p>
                      </div>
                    </div>

                    {/* Features */}
                    <div>
                      <p className="text-xs text-gray-500 mb-2">Key Features</p>
                      <div className="flex flex-wrap gap-1">
                        {bike.features.slice(0, 3).map((feature, index) => (
                          <Badge key={index} variant="secondary" className="text-xs bg-gray-100 text-gray-700">
                            {feature}
                          </Badge>
                        ))}
                        {bike.features.length > 3 && (
                          <Badge variant="secondary" className="text-xs bg-gray-100 text-gray-700">
                            +{bike.features.length - 3} more
                          </Badge>
                        )}
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-white border-0 rounded-lg">
                        <Bell className="w-4 h-4 mr-1" />
                        Notify Me
                      </Button>
                      <Button 
                        variant="outline" 
                        className="flex-1 border-gray-200 hover:bg-gray-50 rounded-lg"
                      >
                        <Star className="w-4 h-4 mr-1" />
                        Wishlist
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">Stay Updated!</h2>
          <p className="text-lg mb-6 opacity-90">
            Get notified about new launches, exclusive previews, and special offers
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 border-0 focus:ring-2 focus:ring-white"
            />
            <Button className="bg-white text-orange-500 hover:bg-gray-100 border-0 px-6">
              Subscribe
            </Button>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Button 
            onClick={() => onNavigate('catalog')}
            variant="outline"
            className="border-gray-200 hover:bg-yellow-50 hover:border-yellow-300 h-14"
          >
            Browse Current Models
          </Button>
          <Button 
            onClick={() => onNavigate('calculators')}
            variant="outline"
            className="border-gray-200 hover:bg-yellow-50 hover:border-yellow-300 h-14"
          >
            EMI Calculator
          </Button>
          <Button 
            onClick={() => onNavigate('compare')}
            variant="outline"
            className="border-gray-200 hover:bg-yellow-50 hover:border-yellow-300 h-14"
          >
            Compare Bikes
          </Button>
          <Button 
            onClick={() => onNavigate('home')}
            className="bg-yellow-400 hover:bg-yellow-500 text-white border-0 h-14"
          >
            Back to Home
          </Button>
        </div>
      </div>
    </div>
  );
}