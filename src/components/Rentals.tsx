import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { 
  Car, 
  Clock, 
  MapPin, 
  Star,
  Calendar,
  Shield,
  Fuel,
  Search
} from 'lucide-react';
import type { Page } from '../App';

interface RentalsProps {
  onNavigate: (page: Page) => void;
}

export function Rentals({ onNavigate }: RentalsProps) {
  const [location, setLocation] = useState('');
  const [duration, setDuration] = useState('');
  const [bikeType, setBikeType] = useState('');

  const rentalBikes = [
    // Luxury / Sports / Adventure (10)
    { id: '1', name: 'Speed 400', brand: 'Triumph', fuelType: 'Petrol', hourlyRate: 150, dailyRate: 1200, weeklyRate: 7500, rating: 4.8, available: true, location: 'Mumbai Central', features: ['Helmet Included', 'Insurance Covered', 'Roadside Assistance'], image: '/bikes/speed.jpg' },
    { id: '2', name: 'Cafe Racer 650', brand: 'Vintage', fuelType: 'Petrol', hourlyRate: 200, dailyRate: 1500, weeklyRate: 9000, rating: 4.9, available: true, location: 'Bangalore', features: ['Premium Bike', 'Vintage Style', 'Performance Focused'], image: '/bikes/cf650.jpg' },
    { id: '3', name: 'Adventure 390', brand: 'Adventure', fuelType: 'Petrol', hourlyRate: 180, dailyRate: 1400, weeklyRate: 8500, rating: 4.7, available: true, location: 'Chennai', features: ['Off-road Ready', 'Long Distance', 'Adventure Gear'], image: '/bikes/ad390.jpg' },
    { id: '4', name: 'Ninja ZX-10R', brand: 'Kawasaki', fuelType: 'Petrol', hourlyRate: 220, dailyRate: 1600, weeklyRate: 9500, rating: 4.9, available: true, location: 'Delhi NCR', features: ['Sports Performance', 'High Speed', 'Premium Build'], image: '/bikes/ninja-400.jpg' },
    { id: '5', name: 'R1 Yamaha', brand: 'Yamaha', fuelType: 'Petrol', hourlyRate: 230, dailyRate: 1700, weeklyRate: 10000, rating: 4.8, available: true, location: 'Pune', features: ['Race Ready', 'Premium Suspension', 'Top Speed'], image: '/bikes/yzfr1.jpg' },
    { id: '6', name: 'Ducati Panigale V4', brand: 'Ducati', fuelType: 'Petrol', hourlyRate: 250, dailyRate: 1800, weeklyRate: 11000, rating: 4.9, available: true, location: 'Mumbai Central', features: ['Luxury Bike', 'Race Tech', 'High Performance'], image: '/bikes/ducati1.jpg' },
    { id: '7', name: 'BMW S1000RR', brand: 'BMW', fuelType: 'Petrol', hourlyRate: 240, dailyRate: 1750, weeklyRate: 10500, rating: 4.9, available: true, location: 'Hyderabad', features: ['Premium Sports', 'High Speed', 'Tech Loaded'], image: '/bikes/bmw.jpg' },
    { id: '8', name: 'KTM 1290 Super Duke', brand: 'KTM', fuelType: 'Petrol', hourlyRate: 210, dailyRate: 1600, weeklyRate: 9500, rating: 4.8, available: true, location: 'Chennai', features: ['Adventure Sports', 'High Performance', 'Powerful Engine'], image: '/bikes/1290.jpg' },
    { id: '9', name: 'Harley Davidson Street 750', brand: 'Harley', fuelType: 'Petrol', hourlyRate: 200, dailyRate: 1500, weeklyRate: 9000, rating: 4.7, available: true, location: 'Bangalore', features: ['Luxury Cruiser', 'Comfort Ride', 'Premium Style'], image: '/bikes/gsx750.jpg' },
    { id: '10', name: 'Royal Enfield Interceptor 650', brand: 'Royal Enfield', fuelType: 'Petrol', hourlyRate: 140, dailyRate: 1000, weeklyRate: 6000, rating: 4.6, available: true, location: 'Delhi NCR', features: ['Classic Bike', 'Comfortable Ride', 'Reliable'], image: '/bikes/int.jpg' },

    // Normal / Commuter / Electric (5)
    { id: '11', name: 'Electric Scooter Pro', brand: 'Modern', fuelType: 'Electric', hourlyRate: 80, dailyRate: 600, weeklyRate: 3500, rating: 4.6, available: true, location: 'Delhi NCR', features: ['Eco Friendly', 'Silent Operation', 'App Connected'], image: '/bikes/ondeelectric.jpg' },
    { id: '12', name: 'Urban E-Bike', brand: 'Electric', fuelType: 'Electric', hourlyRate: 50, dailyRate: 400, weeklyRate: 2500, rating: 4.4, available: true, location: 'Pune', features: ['Lightweight', 'City Commute', 'Budget Friendly'], image: '/bikes/iqube.jpg' },
    { id: '13', name: 'Classic 350', brand: 'Heritage', fuelType: 'Petrol', hourlyRate: 120, dailyRate: 900, weeklyRate: 5500, rating: 4.5, available: true, location: 'Hyderabad', features: ['Classic Style', 'Comfortable Ride', 'Reliable'], image: '/bikes/cl350.jpg' },
    { id: '14', name: 'Commuter 110', brand: 'Bajaj', fuelType: 'Petrol', hourlyRate: 60, dailyRate: 450, weeklyRate: 2500, rating: 4.3, available: true, location: 'Mumbai Central', features: ['Fuel Efficient', 'Lightweight', 'Daily Ride'], image: '/bikes/baj.jpg' },
    { id: '15', name: 'Hero Electric Flash', brand: 'Hero', fuelType: 'Electric', hourlyRate: 70, dailyRate: 500, weeklyRate: 3000, rating: 4.4, available: true, location: 'Chennai', features: ['Eco Friendly', 'Lightweight', 'City Commute'], image: '/bikes/iqube.jpg' },
  ];

  const locations = ['Mumbai Central', 'Delhi NCR', 'Bangalore', 'Pune', 'Chennai', 'Hyderabad'];
  const durations = ['Hourly', 'Daily', 'Weekly', 'Monthly'];
  const bikeTypes = ['All Types', 'Petrol', 'Electric', 'Sports', 'Commuter', 'Adventure'];

  const getRateByDuration = (bike: any, duration: string) => {
    switch (duration) {
      case 'Hourly': return `₹${bike.hourlyRate}/hr`;
      case 'Daily': return `₹${bike.dailyRate}/day`;
      case 'Weekly': return `₹${bike.weeklyRate}/week`;
      case 'Monthly': return `₹${bike.weeklyRate * 4}/month`;
      default: return `₹${bike.hourlyRate}/hr`;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Bike Rentals</h1>
          <p className="text-lg text-gray-600">Rent bikes by the hour, day, or week for your perfect ride</p>
        </div>

        {/* Search & Filters */}
        <Card className="border-0 shadow-lg bg-white mb-8">
          <CardContent className="p-6">
            <div className="grid lg:grid-cols-4 gap-4">
              <div>
                <Label className="text-sm font-medium text-gray-700 mb-2 block">Location</Label>
                <Select value={location} onValueChange={setLocation}>
                  <SelectTrigger className="border-gray-200 focus:border-yellow-400">
                    <SelectValue placeholder="Select location" />
                  </SelectTrigger>
                  <SelectContent>
                    {locations.map(loc => <SelectItem key={loc} value={loc}>{loc}</SelectItem>)}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label className="text-sm font-medium text-gray-700 mb-2 block">Duration</Label>
                <Select value={duration} onValueChange={setDuration}>
                  <SelectTrigger className="border-gray-200 focus:border-yellow-400">
                    <SelectValue placeholder="Select duration" />
                  </SelectTrigger>
                  <SelectContent>
                    {durations.map(dur => <SelectItem key={dur} value={dur}>{dur}</SelectItem>)}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label className="text-sm font-medium text-gray-700 mb-2 block">Bike Type</Label>
                <Select value={bikeType} onValueChange={setBikeType}>
                  <SelectTrigger className="border-gray-200 focus:border-yellow-400">
                    <SelectValue placeholder="All types" />
                  </SelectTrigger>
                  <SelectContent>
                    {bikeTypes.map(type => <SelectItem key={type} value={type}>{type}</SelectItem>)}
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-end">
                <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-white border-0 h-10">
                  <Search className="w-4 h-4 mr-2" />
                  Search
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Bikes Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rentalBikes.map(bike => (
            <Card key={bike.id} className={`border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden ${bike.available ? 'bg-white' : 'bg-gray-100'}`}>
              <div className="relative">
                <ImageWithFallback src={bike.image} alt={bike.name} className={`w-full h-48 object-cover ${bike.available ? '' : 'grayscale'}`} />
                <div className="absolute top-3 left-3">
                  {bike.available ? <Badge className="bg-green-500 text-white">Available</Badge> : <Badge className="bg-red-500 text-white">Rented</Badge>}
                </div>
                <div className="absolute top-3 right-3 bg-white/90 rounded-lg px-2 py-1">
                  <div className="flex items-center text-xs">
                    <Star className="w-3 h-3 mr-1 text-yellow-400 fill-current" />
                    <span className="font-medium">{bike.rating}</span>
                  </div>
                </div>
                {bike.fuelType === 'Electric' && (
                  <Badge className="absolute bottom-3 left-3 bg-green-500 text-white">
                    <Fuel className="w-3 h-3 mr-1" />
                    Electric
                  </Badge>
                )}
              </div>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <Badge variant="outline" className="text-orange-500 border-orange-200 mb-2">{bike.brand}</Badge>
                    <h3 className="font-bold text-gray-900">{bike.name}</h3>
                    <div className="flex items-center text-sm text-gray-600 mt-1">
                      <MapPin className="w-3 h-3 mr-1" />
                      {bike.location}
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-3">
                    <div className="grid grid-cols-3 gap-2 text-center">
                      <div><p className="text-xs text-gray-500">Hourly</p><p className="font-semibold text-gray-900">₹{bike.hourlyRate}</p></div>
                      <div><p className="text-xs text-gray-500">Daily</p><p className="font-semibold text-gray-900">₹{bike.dailyRate}</p></div>
                      <div><p className="text-xs text-gray-500">Weekly</p><p className="font-semibold text-gray-900">₹{bike.weeklyRate}</p></div>
                    </div>
                  </div>

                  <div>
                    <p className="text-xs text-gray-500 mb-2">Included</p>
                    <div className="flex flex-wrap gap-1">
                      {bike.features.map((f, i) => <Badge key={i} variant="secondary" className="text-xs bg-yellow-50 text-yellow-800 border-yellow-200">{f}</Badge>)}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button disabled={!bike.available} className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-white border-0 rounded-lg disabled:bg-gray-300 disabled:text-gray-500">
                      <Calendar className="w-4 h-4 mr-1" />
                      {bike.available ? 'Book Now' : 'Not Available'}
                    </Button>
                    <Button variant="outline" className="flex-1 border-gray-200 hover:bg-gray-50 rounded-lg">Details</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
