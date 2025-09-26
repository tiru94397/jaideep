import React from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { 
  ArrowLeft,
  X, 
  Fuel, 
  Zap, 
  Settings,
  Calendar,
  Car,
  Star
} from 'lucide-react';
import type { Page, Bike } from '../App';

interface ComparisonToolProps {
  bikes: Bike[];
  onRemove: (bikeId: string) => void;
  onNavigate: (page: Page) => void;
}

export function ComparisonTool({ bikes, onRemove, onNavigate }: ComparisonToolProps) {
  const comparisonSpecs = [
    { key: 'price', label: 'Price', format: (value: number) => `₹${value.toLocaleString()}` },
    { key: 'engine', label: 'Engine' },
    { key: 'power', label: 'Power' },
    { key: 'torque', label: 'Torque' },
    { key: 'rpm', label: 'Max RPM' },
    { key: 'mileage', label: 'Mileage', format: (value: number) => `${value} km/l` },
    { key: 'fuelType', label: 'Fuel Type' },
    { key: 'cylinders', label: 'Cylinders' },
  ];

  if (bikes.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-7xl mx-auto">
          <Button
            variant="ghost"
            onClick={() => onNavigate('catalog')}
            className="mb-6 hover:bg-yellow-50"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Catalog
          </Button>

          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Car className="w-12 h-12 text-gray-400" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">No Bikes to Compare</h2>
            <p className="text-gray-600 mb-8">Add bikes from the catalog to start comparing them</p>
            <Button 
              onClick={() => onNavigate('catalog')}
              className="bg-yellow-400 hover:bg-yellow-500 text-white border-0 px-8"
            >
              Browse Bikes
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center">
            <Button
              variant="ghost"
              onClick={() => onNavigate('catalog')}
              className="mr-4 hover:bg-yellow-50"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Catalog
            </Button>
            <div>
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900">Compare Bikes</h1>
              <p className="text-lg text-gray-600">Side-by-side comparison of your selected bikes</p>
            </div>
          </div>
          {bikes.length > 0 && (
            <Badge className="bg-yellow-100 text-yellow-800">
              {bikes.length} bike{bikes.length > 1 ? 's' : ''} selected
            </Badge>
          )}
        </div>

        {/* Comparison Grid */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Header Row with Bike Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-b border-gray-200">
            <div className="hidden lg:block p-6 bg-gray-50 border-r border-gray-200">
              <h3 className="font-semibold text-gray-900">Specifications</h3>
            </div>
            {bikes.map((bike) => (
              <div key={bike.id} className="relative p-6 border-r border-gray-200 last:border-r-0">
                <Button
                  size="icon"
                  variant="ghost"
                  onClick={() => onRemove(bike.id)}
                  className="absolute top-3 right-3 w-8 h-8 hover:bg-red-50 hover:text-red-600"
                >
                  <X className="w-4 h-4" />
                </Button>
                
                <div className="space-y-4">
                  <ImageWithFallback
                    src={bike.image}
                    alt={bike.name}
                    className="w-full h-32 object-cover rounded-lg"
                  />
                  <div>
                    <Badge variant="outline" className="text-orange-500 border-orange-200 mb-2">
                      {bike.brand}
                    </Badge>
                    <h3 className="font-bold text-gray-900 mb-1">{bike.name}</h3>
                    <div className="flex items-center mb-2">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <Star className="w-4 h-4 text-gray-300" />
                      <span className="text-sm text-gray-600 ml-2">(4.2)</span>
                    </div>
                    <div className="flex gap-2">
                      <Button 
                        size="sm"
                        className="bg-yellow-400 hover:bg-yellow-500 text-white border-0 flex-1"
                      >
                        <Calendar className="w-3 h-3 mr-1" />
                        Test Ride
                      </Button>
                      <Button 
                        size="sm"
                        variant="outline" 
                        className="border-gray-200 hover:bg-gray-50 flex-1"
                      >
                        <Car className="w-3 h-3 mr-1" />
                        Rent
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Comparison Rows */}
          {comparisonSpecs.map((spec) => (
            <div key={spec.key} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-b border-gray-200 last:border-b-0 hover:bg-gray-50/50 transition-colors">
              <div className="p-4 lg:p-6 bg-gray-50 border-r border-gray-200 font-medium text-gray-900">
                <div className="flex items-center">
                  {spec.key === 'price' && <Zap className="w-4 h-4 mr-2 text-orange-500" />}
                  {spec.key === 'mileage' && <Fuel className="w-4 h-4 mr-2 text-orange-500" />}
                  {(spec.key === 'engine' || spec.key === 'power' || spec.key === 'torque') && <Settings className="w-4 h-4 mr-2 text-orange-500" />}
                  {spec.label}
                </div>
              </div>
              {bikes.map((bike) => {
                const value = bike[spec.key as keyof Bike];
                const formattedValue = spec.format && typeof value === 'number' 
                  ? spec.format(value)
                  : value?.toString() || 'N/A';
                
                return (
                  <div key={bike.id} className="p-4 lg:p-6 border-r border-gray-200 last:border-r-0">
                    <span className="font-semibold text-gray-900">{formattedValue}</span>
                  </div>
                );
              })}
            </div>
          ))}

          {/* Performance Comparison */}
          <div className="p-6 bg-gradient-to-r from-yellow-50 to-orange-50">
            <h3 className="font-bold text-gray-900 mb-4">Performance Summary</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {bikes.map((bike) => (
                <div key={bike.id} className="bg-white rounded-lg p-4 shadow-sm">
                  <h4 className="font-semibold text-gray-900 mb-3">{bike.name}</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Value for Money:</span>
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className="w-3 h-3 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Fuel Efficiency:</span>
                      <div className="flex">
                        {[1, 2, 3, 4].map((star) => (
                          <Star key={star} className="w-3 h-3 text-yellow-400 fill-current" />
                        ))}
                        <Star className="w-3 h-3 text-gray-300" />
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Performance:</span>
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className="w-3 h-3 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8 bg-white rounded-2xl shadow-lg p-6">
          <h3 className="font-bold text-gray-900 mb-4">Quick Actions</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Button 
              onClick={() => onNavigate('calculators')}
              variant="outline"
              className="border-gray-200 hover:bg-yellow-50 hover:border-yellow-300"
            >
              EMI Calculator
            </Button>
            <Button 
              onClick={() => onNavigate('rentals')}
              variant="outline"
              className="border-gray-200 hover:bg-yellow-50 hover:border-yellow-300"
            >
              Check Rentals
            </Button>
            <Button 
              onClick={() => onNavigate('warranty')}
              variant="outline"
              className="border-gray-200 hover:bg-yellow-50 hover:border-yellow-300"
            >
              Warranty Info
            </Button>
            <Button 
              onClick={() => onNavigate('catalog')}
              className="bg-yellow-400 hover:bg-yellow-500 text-white border-0"
            >
              Add More Bikes
            </Button>
          </div>
        </div>

        {/* Pro Tip */}
        <div className="mt-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100">
          <div className="flex items-start">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
              <Star className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Pro Tip</h4>
              <p className="text-gray-700">
                Consider factors like after-sales service, spare parts availability, and resale value 
                when making your final decision. Book a test ride to experience the bikes firsthand!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}