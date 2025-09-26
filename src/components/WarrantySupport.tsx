import React from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { 
  Shield, 
  Phone, 
  Mail, 
  Clock, 
  MapPin,
  Wrench,
  FileText,
  CheckCircle,
  AlertCircle,
  Headphones
} from 'lucide-react';

export function WarrantySupport() {
  const warrantyPlans = [
    {
      name: 'Basic Warranty',
      duration: '2 Years',
      price: 'Free',
      coverage: ['Engine & Transmission', 'Electrical Components', 'Manufacturing Defects'],
      color: 'bg-gray-100 text-gray-800'
    },
    {
      name: 'Extended Warranty',
      duration: '5 Years',
      price: '₹15,000',
      coverage: ['All Basic Coverage', 'Wear & Tear Parts', 'Accidental Damage', '24/7 Roadside Assistance'],
      color: 'bg-yellow-100 text-yellow-800'
    },
    {
      name: 'Premium Care',
      duration: '7 Years',
      price: '₹25,000',
      coverage: ['All Extended Coverage', 'Annual Maintenance', 'Pick & Drop Service', 'Replacement Bike'],
      color: 'bg-orange-100 text-orange-800'
    }
  ];

  const supportChannels = [
    {
      icon: Phone,
      title: 'Call Support',
      description: '24/7 helpline for immediate assistance',
      contact: '1800-CYCLOROOF',
      availability: 'Available 24/7'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Detailed support via email',
      contact: 'support@cycloroof.com',
      availability: 'Response within 24 hours'
    },
    {
      icon: Headphones,
      title: 'Live Chat',
      description: 'Instant chat with support agents',
      contact: 'Chat Now',
      availability: '9 AM - 9 PM'
    },
    {
      icon: MapPin,
      title: 'Service Centers',
      description: 'Visit our authorized service centers',
      contact: 'Find Nearest Center',
      availability: '200+ locations'
    }
  ];

  const faqItems = [
    {
      question: 'What does the basic warranty cover?',
      answer: 'Basic warranty covers manufacturing defects, engine issues, and electrical component failures for 2 years from purchase date.'
    },
    {
      question: 'How do I claim warranty service?',
      answer: 'Contact our support team or visit the nearest service center with your warranty card and purchase receipt.'
    },
    {
      question: 'Is roadside assistance available?',
      answer: 'Roadside assistance is included with Extended and Premium warranty plans, available 24/7 across India.'
    },
    {
      question: 'Can I extend my warranty after purchase?',
      answer: 'Yes, you can upgrade to extended warranty within the first year of purchase at a discounted rate.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Warranty & Support</h1>
          <p className="text-lg text-gray-600">Comprehensive coverage and support for your peace of mind</p>
        </div>

        {/* Warranty Plans */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Warranty Plans</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {warrantyPlans.map((plan, index) => (
              <Card key={index} className={`border-0 shadow-lg ${index === 1 ? 'ring-2 ring-yellow-400 scale-105' : ''} bg-white relative overflow-hidden`}>
                {index === 1 && (
                  <div className="absolute top-0 left-0 right-0 bg-yellow-400 text-white text-center py-2 text-sm font-medium">
                    Most Popular
                  </div>
                )}
                <CardHeader className={index === 1 ? 'pt-12' : ''}>
                  <div className="text-center">
                    <Shield className="w-12 h-12 text-orange-500 mx-auto mb-4" />
                    <CardTitle className="text-xl">{plan.name}</CardTitle>
                    <div className="mt-2">
                      <span className="text-3xl font-bold text-gray-900">{plan.price}</span>
                      <p className="text-gray-600">for {plan.duration}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {plan.coverage.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className={`w-full mt-6 ${index === 1 ? 'bg-yellow-400 hover:bg-yellow-500' : 'bg-gray-900 hover:bg-gray-800'} text-white border-0`}>
                    {plan.price === 'Free' ? 'Included' : 'Choose Plan'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Support Channels */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Get Support</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportChannels.map((channel, index) => (
              <Card key={index} className="border-0 shadow-lg bg-white hover:shadow-xl transition-all duration-300 text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <channel.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{channel.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">{channel.description}</p>
                  <div className="space-y-2">
                    <p className="font-medium text-gray-900">{channel.contact}</p>
                    <Badge variant="outline" className="text-xs">
                      {channel.availability}
                    </Badge>
                  </div>
                  <Button className="w-full mt-4 bg-yellow-400 hover:bg-yellow-500 text-white border-0">
                    Contact Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Service Features */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our Service Promise</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Quick Service</h3>
                <p className="text-gray-600 text-sm">Average service time under 2 hours</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Wrench className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Genuine Parts</h3>
                <p className="text-gray-600 text-sm">Only OEM and authorized parts used</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Service Warranty</h3>
                <p className="text-gray-600 text-sm">6 months warranty on all services</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Wide Network</h3>
                <p className="text-gray-600 text-sm">200+ service centers nationwide</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqItems.map((faq, index) => (
              <Card key={index} className="border-0 shadow-md bg-white">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">{faq.question}</h3>
                      <p className="text-gray-700">{faq.answer}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Emergency Support */}
        <div className="bg-gradient-to-r from-red-500 to-orange-600 rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">Emergency Roadside Assistance</h2>
          <p className="text-lg mb-6 opacity-90">
            Stuck on the road? Our 24/7 emergency support is just a call away
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-red-600 hover:bg-gray-100 border-0 px-8">
              <Phone className="w-4 h-4 mr-2" />
              Call Emergency: 1800-911-HELP
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-red-600 px-8">
              <MapPin className="w-4 h-4 mr-2" />
              Share Location
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}