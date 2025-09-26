import React from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Separator } from './ui/separator';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { 
  ArrowLeft,
  Fuel, 
  Zap, 
  Calendar, 
  GitCompare,
  Car,
  Settings,
  Shield,
  Star,
  Heart,
  Share
} from 'lucide-react';
import type { Page, Bike } from '../App';

interface BikeDetailsProps {
  bike: Bike;
  onAddToCompare: (bike: Bike) => void;
  onNavigate: (page: Page) => void;
}

export function BikeDetails({ bike, onAddToCompare, onNavigate }: BikeDetailsProps) {
  const specifications = [
    { label: 'Engine', value: bike.engine, icon: Settings },
    { label: 'Power', value: bike.power, icon: Zap },
    { label: 'Torque', value: bike.torque, icon: Settings },
    { label: 'Max RPM', value: bike.rpm, icon: Settings },
    { label: 'Cylinders', value: bike.cylinders.toString(), icon: Settings },
    { label: 'Mileage', value: `${bike.mileage} km/l`, icon: Fuel },
    { label: 'Fuel Type', value: bike.fuelType, icon: Fuel },
  ];

  const features = [
    'ABS (Anti-lock Braking System)',
    'LED Headlights & Taillights',
    'Digital Instrument Cluster',
    'USB Charging Port',
    'Comfortable Riding Position',
    'Tubeless Tires',
    'Electric Start',
    'Disc Brakes (Front & Rear)'
  ];

  return (
    <div className="min-h-screen bg-gray-50 px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-7xl mx-auto">
        {/* Back Button */}
        <Button
          variant="ghost"
          onClick={() => onNavigate('catalog')}
          className="mb-6 hover:bg-yellow-50"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Catalog
        </Button>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Image */}
          <div className="space-y-6">
            <Card className="border-0 shadow-lg overflow-hidden bg-white">
              <div className="relative">
                <ImageWithFallback
                  src={bike.image}
                  alt={bike.name}
                  className="w-full h-96 object-cover"
                />
                <div className="absolute top-4 right-4 flex gap-2">
                  <Button size="icon" variant="secondary" className="bg-white/80 hover:bg-white">
                    <Heart className="w-4 h-4" />
                  </Button>
                  <Button size="icon" variant="secondary" className="bg-white/80 hover:bg-white">
                    <Share className="w-4 h-4" />
                  </Button>
                </div>
                {bike.fuelType === 'Electric' && (
                  <Badge className="absolute top-4 left-4 bg-green-500 text-white">
                    <Zap className="w-3 h-3 mr-1" />
                    Electric
                  </Badge>
                )}
              </div>
            </Card>

            {/* Gallery Thumbnails */}
            <div className="grid grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((index) => (
                <Card key={index} className="border-2 border-transparent hover:border-yellow-400 cursor-pointer transition-colors">
                  <ImageWithFallback
                    src={bike.image}
                    alt={`${bike.name} view ${index}`}
                    className="w-full h-20 object-cover rounded-lg"
                  />
                </Card>
              ))}
            </div>
          </div>

          {/* Right Column - Details */}
          <div className="space-y-8">
            {/* Basic Info */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="outline" className="text-orange-500 border-orange-200">
                  {bike.brand}
                </Badge>
                <div className="flex items-center">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <Star className="w-4 h-4 text-gray-300" />
                  <span className="text-sm text-gray-600 ml-2">(4.2)</span>
                </div>
              </div>
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">{bike.name}</h1>
              <div className="flex items-baseline gap-4">
                <span className="text-4xl font-bold text-gray-900">
                  ₹{bike.price.toLocaleString()}
                </span>
                <span className="text-lg text-gray-500 line-through">
                  ₹{(bike.price * 1.1).toLocaleString()}
                </span>
                <Badge className="bg-green-100 text-green-800">
                  Save ₹{(bike.price * 0.1).toLocaleString()}
                </Badge>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-2 gap-4">
              <Button 
                className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-white border-0 h-14 rounded-xl shadow-lg"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Book Test Ride
              </Button>
              <Button 
                onClick={() => onAddToCompare(bike)}
                variant="outline"
                className="border-gray-200 hover:bg-yellow-50 hover:border-yellow-300 h-14 rounded-xl"
              >
                <GitCompare className="w-5 h-5 mr-2 text-orange-500" />
                Add to Compare
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Button 
                className="bg-orange-500 hover:bg-orange-600 text-white border-0 h-14 rounded-xl"
              >
                <Car className="w-5 h-5 mr-2" />
                Rent Now
              </Button>
              <Button 
                variant="outline"
                className="border-gray-200 hover:bg-gray-50 h-14 rounded-xl"
              >
                <Shield className="w-5 h-5 mr-2 text-orange-500" />
                Check EMI
              </Button>
            </div>

            {/* Quick Specs */}
            <Card className="border-0 shadow-lg bg-white">
              <CardHeader>
                <CardTitle className="text-xl">Key Specifications</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                      <Settings className="w-5 h-5 text-orange-500" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Engine</p>
                      <p className="font-semibold text-gray-900">{bike.engine}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                      <Zap className="w-5 h-5 text-orange-500" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Power</p>
                      <p className="font-semibold text-gray-900">{bike.power}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                      <Fuel className="w-5 h-5 text-orange-500" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Mileage</p>
                      <p className="font-semibold text-gray-900">{bike.mileage} km/l</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                      <Settings className="w-5 h-5 text-orange-500" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Torque</p>
                      <p className="font-semibold text-gray-900">{bike.torque}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Detailed Sections */}
        <div className="grid lg:grid-cols-3 gap-8 mt-12">
          {/* About This Bike */}
          <Card className="lg:col-span-2 border-0 shadow-lg bg-white">
            <CardHeader>
              <CardTitle className="text-2xl">About This Bike</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed mb-6">
                {bike.description}
              </p>
              <p className="text-gray-700 leading-relaxed">
                Whether you're commuting through busy city streets or embarking on weekend adventures, 
                this bike delivers exceptional performance and reliability. With its modern design and 
                advanced features, it represents the perfect balance of style, comfort, and efficiency.
              </p>
              
              <Separator className="my-6" />
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Features</h3>
              <div className="grid md:grid-cols-2 gap-3">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Complete Specifications */}
          <Card className="border-0 shadow-lg bg-white">
            <CardHeader>
              <CardTitle className="text-xl">Complete Specifications</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {specifications.map((spec, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                    <div className="flex items-center space-x-2">
                      <spec.icon className="w-4 h-4 text-orange-500" />
                      <span className="text-gray-600">{spec.label}</span>
                    </div>
                    <span className="font-semibold text-gray-900">{spec.value}</span>
                  </div>
                ))}
              </div>
              
              <Separator className="my-6" />
              
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-900">Financing Options</h4>
                <div className="bg-yellow-50 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-700">EMI starts from</span>
                    <span className="font-bold text-gray-900">₹{Math.round(bike.price / 36).toLocaleString()}/month</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Down Payment</span>
                    <span className="font-bold text-gray-900">₹{Math.round(bike.price * 0.2).toLocaleString()}</span>
                  </div>
                </div>
                <Button 
                  onClick={() => onNavigate('calculators')}
                  variant="outline" 
                  className="w-full border-yellow-300 text-yellow-700 hover:bg-yellow-50"
                >
                  Calculate EMI
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Similar Bikes */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Similar Bikes You Might Like</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden bg-white cursor-pointer">
                <ImageWithFallback
                  src={bike.image}
                  alt={`Similar bike ${index}`}
                  className="w-full h-40 object-cover"
                />
                <CardContent className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-1">Similar Bike {index}</h3>
                  <p className="text-gray-600 text-sm mb-2">{bike.brand}</p>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-gray-900">₹{(bike.price + index * 10000).toLocaleString()}</span>
                    <Button size="sm" className="bg-yellow-400 hover:bg-yellow-500 text-white border-0">
                      View
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}