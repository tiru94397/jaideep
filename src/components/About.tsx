import React from 'react';
import { Card, CardContent } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { 
  Target, 
  Users, 
  Award, 
  Globe,
  Shield,
  Zap,
  Heart,
  TrendingUp
} from 'lucide-react';

export function About() {
  const stats = [
    { icon: Users, label: 'Happy Customers', value: '50,000+', color: 'text-blue-600' },
    { icon: Globe, label: 'Cities Covered', value: '25+', color: 'text-green-600' },
    { icon: Award, label: 'Awards Won', value: '15+', color: 'text-yellow-600' },
    { icon: TrendingUp, label: 'Bikes Sold', value: '1,00,000+', color: 'text-purple-600' }
  ];

  const values = [
    {
      icon: Shield,
      title: 'Trust & Reliability',
      description: 'We ensure every bike meets our quality standards with comprehensive inspections and certifications.'
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'Embracing the latest technology to make two-wheeler buying, selling, and servicing seamless.'
    },
    {
      icon: Heart,
      title: 'Customer First',
      description: 'Your satisfaction is our priority. We go the extra mile to ensure you find your perfect ride.'
    },
    {
      icon: Globe,
      title: 'Sustainability',
      description: 'Promoting eco-friendly transportation solutions with a focus on electric and hybrid vehicles.'
    }
  ];

  const team = [
    {
      name: 'Rajesh Kumar',
      role: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx8fHwxNzU4NzAwNTU4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: '15+ years in automotive industry'
    },
    {
      name: 'Priya Sharma',
      role: 'Chief Technology Officer',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b2e0e3f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx8fHwxNzU4NzAwNTU4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: 'Former tech lead at major automotive companies'
    },
    {
      name: 'Amit Patel',
      role: 'Head of Operations',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx8fHwxNzU4NzAwNTU4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: 'Expert in supply chain and logistics'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">About Cycloroof</h1>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 leading-relaxed">
              Cycloroof is a next-generation two-wheeler marketplace bringing buying, comparing, renting, 
              selling, and servicing bikes, scooters, and EVs under one roof. With features like EMI calculators, 
              test ride bookings, and top picks, Cycloroof makes mobility smarter, faster, and hassle-free for every rider.
            </p>
          </div>
        </div>

        {/* Hero Image */}
        <div className="mb-16">
          <Card className="border-0 shadow-2xl overflow-hidden">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1600327713015-08077f65b388?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx8fHwxNzU4NzQ0MDAxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Cycloroof showroom"
              className="w-full h-64 lg:h-96 object-cover"
            />
          </Card>
        </div>

        {/* Stats */}
        <section className="mb-16">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="border-0 shadow-lg bg-white text-center hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className={`w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <stat.icon className={`w-8 h-8 ${stat.color}`} />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</h3>
                  <p className="text-gray-600">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="mb-16">
          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="border-0 shadow-lg bg-white">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mr-4">
                    <Target className="w-6 h-6 text-yellow-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  To revolutionize the two-wheeler industry by creating a comprehensive digital ecosystem 
                  that makes buying, selling, renting, and maintaining two-wheelers transparent, convenient, 
                  and accessible to everyone. We strive to connect riders with their perfect vehicles while 
                  promoting sustainable transportation solutions.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                    <Globe className="w-6 h-6 text-orange-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Our Vision</h2>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  To become India's most trusted and innovative two-wheeler marketplace, setting new standards 
                  for customer experience and technological advancement. We envision a future where every 
                  Indian has access to safe, reliable, and sustainable transportation options through our 
                  comprehensive platform.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Values */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-0 shadow-lg bg-white text-center hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Timeline */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-12">Our Journey</h2>
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="w-4 h-4 bg-yellow-400 rounded-full mr-6 mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">2020 - Foundation</h3>
                  <p className="text-gray-700">Cycloroof was founded with a vision to transform the two-wheeler marketplace in India.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-4 h-4 bg-orange-400 rounded-full mr-6 mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">2021 - Platform Launch</h3>
                  <p className="text-gray-700">Launched our digital platform with basic buying and selling features in 5 major cities.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-4 h-4 bg-green-400 rounded-full mr-6 mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">2022 - Expansion</h3>
                  <p className="text-gray-700">Expanded to 15 cities and introduced rental services and extended warranty programs.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-4 h-4 bg-blue-400 rounded-full mr-6 mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">2023 - Innovation</h3>
                  <p className="text-gray-700">Launched AI-powered recommendations, comparison tools, and mobile app with enhanced features.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-4 h-4 bg-purple-400 rounded-full mr-6 mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">2024 - Present</h3>
                  <p className="text-gray-700">Serving 50,000+ customers across 25+ cities with comprehensive two-wheeler solutions.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-12">Leadership Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="border-0 shadow-lg bg-white text-center hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <ImageWithFallback
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-orange-600 font-medium mb-2">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">Join the Cycloroof Family</h2>
          <p className="text-lg mb-6 opacity-90">
            Experience the future of two-wheeler mobility with us. Your perfect ride awaits!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-orange-500 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition-colors">
              Start Your Journey
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-orange-500 px-8 py-3 rounded-lg font-medium transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}