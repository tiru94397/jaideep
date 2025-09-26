import React from 'react';
import { motion } from 'motion/react';
import { Minus, Plus, Trash2, ShoppingBag, ArrowLeft, CreditCard } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Separator } from './ui/separator';
import { ImageWithFallback } from './figma/ImageWithFallback';
import type { CartItem, Page } from '../App';

interface CartProps {
  items: CartItem[];
  onRemove: (itemId: string) => void;
  onUpdateQuantity: (itemId: string, quantity: number) => void;
  onNavigate: (page: Page) => void;
}

export function Cart({ items, onRemove, onUpdateQuantity, onNavigate }: CartProps) {
  const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const tax = subtotal * 0.18; // 18% GST
  const shipping = subtotal > 50000 ? 0 : 500; // Free shipping above ₹50,000
  const total = subtotal + tax + shipping;

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-background py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <ShoppingBag className="w-16 h-16 text-muted-foreground mx-auto mb-6" />
              <h1 className="text-2xl font-bold mb-4">Your Cart is Empty</h1>
              <p className="text-muted-foreground mb-6">
                Add some amazing motorcycles or spare parts to get started!
              </p>
              <div className="space-y-3">
                <Button onClick={() => onNavigate('catalog')} className="w-full">
                  Browse Motorcycles
                </Button>
                <Button onClick={() => onNavigate('spares')} variant="outline" className="w-full">
                  Shop Spare Parts
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <Button
            variant="ghost"
            onClick={() => onNavigate('home')}
            className="mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Continue Shopping
          </Button>
          <h1 className="text-3xl font-bold">Shopping Cart</h1>
          <p className="text-muted-foreground">{items.length} {items.length === 1 ? 'item' : 'items'} in your cart</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card>
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      <div className="relative">
                        <ImageWithFallback
                          src={item.image}
                          alt={item.name}
                          className="w-24 h-24 object-cover rounded-lg"
                        />
                        <Badge 
                          variant={item.type === 'bike' ? 'default' : 'secondary'}
                          className="absolute -top-2 -right-2 text-xs"
                        >
                          {item.type === 'bike' ? 'Bike' : 'Part'}
                        </Badge>
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-2">{item.name}</h3>
                        <p className="text-primary font-bold text-xl mb-4">
                          ₹{item.price.toLocaleString()}
                        </p>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                              disabled={item.quantity <= 1}
                            >
                              <Minus className="w-4 h-4" />
                            </Button>
                            <span className="font-medium min-w-[2rem] text-center">
                              {item.quantity}
                            </span>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                            >
                              <Plus className="w-4 h-4" />
                            </Button>
                          </div>
                          
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => onRemove(item.id)}
                            className="text-destructive hover:text-destructive"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Order Summary */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <Card className="sticky top-8">
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>₹{subtotal.toLocaleString()}</span>
                </div>
                
                <div className="flex justify-between">
                  <span>Tax (GST 18%)</span>
                  <span>₹{tax.toLocaleString()}</span>
                </div>
                
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span className={shipping === 0 ? 'text-green-600' : ''}>
                    {shipping === 0 ? 'FREE' : `₹${shipping.toLocaleString()}`}
                  </span>
                </div>
                
                {shipping > 0 && (
                  <p className="text-sm text-muted-foreground">
                    Add ₹{(50000 - subtotal).toLocaleString()} more for free shipping
                  </p>
                )}
                
                <Separator />
                
                <div className="flex justify-between font-bold text-lg">
                  <span>Total</span>
                  <span>₹{total.toLocaleString()}</span>
                </div>
                
                <Button className="w-full" size="lg">
                  <CreditCard className="w-4 h-4 mr-2" />
                  Proceed to Checkout
                </Button>
                
                <div className="text-center">
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => onNavigate('catalog')}
                  >
                    Continue Shopping
                  </Button>
                </div>
                
                {/* Payment Options */}
                <div className="pt-4 border-t">
                  <p className="text-sm font-medium mb-3">We Accept:</p>
                  <div className="grid grid-cols-3 gap-2">
                    <div className="bg-muted rounded p-2 text-center text-xs">
                      Credit Card
                    </div>
                    <div className="bg-muted rounded p-2 text-center text-xs">
                      UPI
                    </div>
                    <div className="bg-muted rounded p-2 text-center text-xs">
                      Net Banking
                    </div>
                  </div>
                </div>
                
                {/* Security Info */}
                <div className="pt-4 border-t">
                  <div className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="text-green-600">🔒</span>
                    <p>Your payment information is processed securely. We do not store credit card details.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Recommended Items */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16"
        >
          <h2 className="text-2xl font-bold mb-6">You might also like</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* This would show recommended items based on cart contents */}
            <Card className="cursor-pointer hover:shadow-lg transition-shadow">
              <CardContent className="p-4">
                <div className="bg-muted rounded-lg h-32 mb-3"></div>
                <h3 className="font-medium mb-2">Helmet with Bluetooth</h3>
                <p className="text-primary font-bold">₹8,999</p>
              </CardContent>
            </Card>
            
            <Card className="cursor-pointer hover:shadow-lg transition-shadow">
              <CardContent className="p-4">
                <div className="bg-muted rounded-lg h-32 mb-3"></div>
                <h3 className="font-medium mb-2">Riding Gloves</h3>
                <p className="text-primary font-bold">₹2,499</p>
              </CardContent>
            </Card>
            
            <Card className="cursor-pointer hover:shadow-lg transition-shadow">
              <CardContent className="p-4">
                <div className="bg-muted rounded-lg h-32 mb-3"></div>
                <h3 className="font-medium mb-2">Bike Cover</h3>
                <p className="text-primary font-bold">₹1,299</p>
              </CardContent>
            </Card>
            
            <Card className="cursor-pointer hover:shadow-lg transition-shadow">
              <CardContent className="p-4">
                <div className="bg-muted rounded-lg h-32 mb-3"></div>
                <h3 className="font-medium mb-2">Phone Mount</h3>
                <p className="text-primary font-bold">₹899</p>
              </CardContent>
            </Card>
          </div>
        </motion.section>
      </div>
    </div>
  );
}