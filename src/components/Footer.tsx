import React from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Separator } from './ui/separator';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube,
  Mail,
  Phone,
  MapPin,
  Shield,
  FileText,
  HelpCircle
} from 'lucide-react';
import type { Page } from '../App';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const quickLinks = [
    { label: 'Home', page: 'home' as Page },
    { label: 'Browse Bikes', page: 'catalog' as Page },
    { label: 'Rentals', page: 'rentals' as Page },
    { label: 'Upcoming Launches', page: 'upcoming' as Page },
    { label: 'Calculators', page: 'calculators' as Page },
    { label: 'Compare Bikes', page: 'compare' as Page }
  ];

  const services = [
    'Bike Sales',
    'Bike Rentals',
    'Service & Maintenance',
    'Spare Parts',
    'Insurance',
    'Extended Warranty'
  ];

  const support = [
    { label: 'Warranty & Support', page: 'warranty' as Page },
    { label: 'About Us', page: 'about' as Page },
    'Help Center',
    'Contact Us',
    'Track Order',
    'Return Policy'
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', color: 'text-blue-600' },
    { icon: Twitter, href: '#', color: 'text-blue-400' },
    { icon: Instagram, href: '#', color: 'text-pink-600' },
    { icon: Youtube, href: '#', color: 'text-red-600' }
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Newsletter Section */}
      <div className="bg-accent py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-accent-foreground mb-4">
            Stay Updated with Latest Bikes & Offers
          </h2>
          <p className="text-lg text-accent-foreground/90 mb-8">
            Subscribe to our newsletter for exclusive deals and new launch updates
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 bg-card text-card-foreground border-0 h-12"
            />
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground border-0 h-12 px-8">
              <Mail className="w-4 h-4 mr-2" />
              Subscribe
            </Button>
          </div>
          <p className="text-sm text-accent-foreground/80 mt-4">
            Join 50,000+ riders who trust Cycloroof for their mobility needs
          </p>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center mb-6">
                <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-accent to-yellow-600 rounded-xl mr-3 shadow-lg">
                  <span className="text-lg text-primary">🏍️</span>
                </div>
                <span className="text-2xl font-bold">Cycloroof</span>
              </div>
              <p className="text-primary-foreground/80 mb-6 leading-relaxed">
                India's most trusted two-wheeler marketplace. Buy, compare, rent, and service 
                bikes, scooters, and EVs with complete confidence and transparency.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center text-primary-foreground/80">
                  <Phone className="w-4 h-4 mr-3 text-accent" />
                  <span>1800-CYCLOROOF (24/7 Support)</span>
                </div>
                <div className="flex items-center text-primary-foreground/80">
                  <Mail className="w-4 h-4 mr-3 text-accent" />
                  <span>support@cycloroof.com</span>
                </div>
                <div className="flex items-center text-primary-foreground/80">
                  <MapPin className="w-4 h-4 mr-3 text-accent" />
                  <span>25+ Cities across India</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4 mt-6">
                {socialLinks.map((social, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    size="icon"
                    className="bg-primary/20 hover:bg-primary/30 text-primary-foreground"
                  >
                    <social.icon className={`w-5 h-5 ${social.color}`} />
                  </Button>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-bold text-primary-foreground mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Button
                      variant="ghost"
                      onClick={() => onNavigate(link.page)}
                      className="text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary/20 p-0 h-auto justify-start"
                    >
                      {link.label}
                    </Button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-bold text-primary-foreground mb-6">Our Services</h3>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <span className="text-primary-foreground/80 hover:text-primary-foreground cursor-pointer transition-colors">
                      {service}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="font-bold text-primary-foreground mb-6">Support</h3>
              <ul className="space-y-3">
                {support.map((item, index) => (
                  <li key={index}>
                    {typeof item === 'object' ? (
                      <Button
                        variant="ghost"
                        onClick={() => onNavigate(item.page)}
                        className="text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary/20 p-0 h-auto justify-start"
                      >
                        {item.label}
                      </Button>
                    ) : (
                      <span className="text-primary-foreground/80 hover:text-primary-foreground cursor-pointer transition-colors">
                        {item}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Separator className="bg-primary-foreground/20" />

      {/* Bottom Footer */}
      <div className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            {/* Copyright */}
            <div className="text-primary-foreground/60 text-sm">
              © 2024 Cycloroof. All rights reserved. Making mobility smarter, safer, and sustainable.
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap items-center space-x-6 text-sm">
              <Button
                variant="ghost"
                className="text-primary-foreground/60 hover:text-primary-foreground p-0 h-auto"
              >
                <Shield className="w-4 h-4 mr-1" />
                Privacy Policy
              </Button>
              <Button
                variant="ghost"
                className="text-primary-foreground/60 hover:text-primary-foreground p-0 h-auto"
              >
                <FileText className="w-4 h-4 mr-1" />
                Terms of Service
              </Button>
              <Button
                variant="ghost"
                className="text-primary-foreground/60 hover:text-primary-foreground p-0 h-auto"
              >
                <HelpCircle className="w-4 h-4 mr-1" />
                Cookie Policy
              </Button>
            </div>
          </div>

          {/* Awards & Certifications */}
          <div className="mt-8 pt-8 border-t border-primary-foreground/20 text-center">
            <p className="text-primary-foreground/60 text-sm mb-4">Trusted by riders across India</p>
            <div className="flex flex-wrap justify-center items-center space-x-8 text-xs text-primary-foreground/50">
              <span className="flex items-center">
                <Shield className="w-3 h-3 mr-1" />
                ISO 9001:2015 Certified
              </span>
              <span className="flex items-center">
                <Shield className="w-3 h-3 mr-1" />
                SSL Secured
              </span>
              <span className="flex items-center">
                <Shield className="w-3 h-3 mr-1" />
                PCI DSS Compliant
              </span>
              <span className="flex items-center">
                <Shield className="w-3 h-3 mr-1" />
                RBI Approved Partners
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}