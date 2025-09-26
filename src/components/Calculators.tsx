import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Slider } from './ui/slider';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Separator } from './ui/separator';
import { 
  Calculator, 
  Fuel, 
  PiggyBank,
  TrendingUp,
  Info
} from 'lucide-react';

export function Calculators() {
  // EMI Calculator State
  const [loanAmount, setLoanAmount] = useState(250000);
  const [interestRate, setInterestRate] = useState(9.5);
  const [loanTenure, setLoanTenure] = useState(36);

  // Fuel Calculator State
  const [distance, setDistance] = useState(100);
  const [mileage, setMileage] = useState(35);
  const [fuelPrice, setFuelPrice] = useState(110);
  const [daysPerMonth, setDaysPerMonth] = useState(25);

  // EMI Calculation
  const monthlyRate = interestRate / 12 / 100;
  const emiAmount = monthlyRate > 0 
    ? (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, loanTenure)) / (Math.pow(1 + monthlyRate, loanTenure) - 1)
    : loanAmount / loanTenure;
  const totalAmount = emiAmount * loanTenure;
  const totalInterest = totalAmount - loanAmount;

  // Fuel Cost Calculation
  const dailyFuelCost = (distance / mileage) * fuelPrice;
  const monthlyFuelCost = dailyFuelCost * daysPerMonth;
  const yearlyFuelCost = monthlyFuelCost * 12;

  return (
    <div className="min-h-screen bg-background px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl lg:text-4xl font-bold text-primary mb-4">Financial Calculators</h1>
          <p className="text-lg text-muted-foreground">Make informed decisions with our easy-to-use calculators</p>
        </div>

        <Tabs defaultValue="emi" className="w-full">
          <TabsList className="grid w-full grid-cols-2 bg-card shadow-sm border border-border mb-8">
            <TabsTrigger 
              value="emi" 
              className="data-[state=active]:bg-accent data-[state=active]:text-accent-foreground"
            >
              <Calculator className="w-4 h-4 mr-2" />
              EMI Calculator
            </TabsTrigger>
            <TabsTrigger 
              value="fuel" 
              className="data-[state=active]:bg-accent data-[state=active]:text-accent-foreground"
            >
              <Fuel className="w-4 h-4 mr-2" />
              Fuel Cost Calculator
            </TabsTrigger>
          </TabsList>

          {/* EMI Calculator */}
          <TabsContent value="emi">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Input Section */}
              <Card className="border-0 shadow-lg bg-white">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <PiggyBank className="w-5 h-5 mr-2 text-orange-500" />
                    EMI Calculator
                  </CardTitle>
                  <p className="text-gray-600">Calculate your monthly EMI for bike loans</p>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Loan Amount */}
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <Label>Loan Amount</Label>
                      <span className="font-semibold text-gray-900">₹{loanAmount.toLocaleString()}</span>
                    </div>
                    <Slider
                      value={[loanAmount]}
                      onValueChange={(value) => setLoanAmount(value[0])}
                      max={1000000}
                      min={50000}
                      step={10000}
                      className="w-full"
                    />
                    <div className="flex justify-between text-sm text-gray-500">
                      <span>₹50K</span>
                      <span>₹10L</span>
                    </div>
                  </div>

                  {/* Interest Rate */}
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <Label>Interest Rate (per annum)</Label>
                      <span className="font-semibold text-gray-900">{interestRate}%</span>
                    </div>
                    <Slider
                      value={[interestRate]}
                      onValueChange={(value) => setInterestRate(value[0])}
                      max={20}
                      min={5}
                      step={0.1}
                      className="w-full"
                    />
                    <div className="flex justify-between text-sm text-gray-500">
                      <span>5%</span>
                      <span>20%</span>
                    </div>
                  </div>

                  {/* Loan Tenure */}
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <Label>Loan Tenure (months)</Label>
                      <span className="font-semibold text-gray-900">{loanTenure} months</span>
                    </div>
                    <Slider
                      value={[loanTenure]}
                      onValueChange={(value) => setLoanTenure(value[0])}
                      max={60}
                      min={12}
                      step={6}
                      className="w-full"
                    />
                    <div className="flex justify-between text-sm text-gray-500">
                      <span>1 year</span>
                      <span>5 years</span>
                    </div>
                  </div>

                  {/* Manual Input */}
                  <div className="space-y-4 pt-4 border-t border-gray-200">
                    <p className="text-sm font-medium text-gray-700">Or enter values manually:</p>
                    <div className="grid grid-cols-3 gap-3">
                      <div>
                        <Label className="text-xs">Amount</Label>
                        <Input
                          type="number"
                          value={loanAmount}
                          onChange={(e) => setLoanAmount(Number(e.target.value))}
                          className="text-sm"
                        />
                      </div>
                      <div>
                        <Label className="text-xs">Rate %</Label>
                        <Input
                          type="number"
                          step="0.1"
                          value={interestRate}
                          onChange={(e) => setInterestRate(Number(e.target.value))}
                          className="text-sm"
                        />
                      </div>
                      <div>
                        <Label className="text-xs">Tenure</Label>
                        <Input
                          type="number"
                          value={loanTenure}
                          onChange={(e) => setLoanTenure(Number(e.target.value))}
                          className="text-sm"
                        />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Results Section */}
              <Card className="border-0 shadow-lg bg-white">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <TrendingUp className="w-5 h-5 mr-2 text-orange-500" />
                    EMI Breakdown
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {/* EMI Amount */}
                  <div className="text-center mb-8">
                    <div className="w-24 h-24 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Calculator className="w-10 h-10 text-white" />
                    </div>
                    <p className="text-sm text-gray-600 mb-2">Monthly EMI</p>
                    <p className="text-4xl font-bold text-gray-900">₹{Math.round(emiAmount).toLocaleString()}</p>
                  </div>

                  <Separator className="mb-6" />

                  {/* Breakdown */}
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-3 bg-gray-50 rounded-lg px-4">
                      <span className="text-gray-700">Principal Amount</span>
                      <span className="font-semibold text-gray-900">₹{loanAmount.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center py-3 bg-gray-50 rounded-lg px-4">
                      <span className="text-gray-700">Total Interest</span>
                      <span className="font-semibold text-gray-900">₹{Math.round(totalInterest).toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center py-3 bg-yellow-50 rounded-lg px-4 border border-yellow-200">
                      <span className="text-gray-700 font-medium">Total Amount</span>
                      <span className="font-bold text-gray-900">₹{Math.round(totalAmount).toLocaleString()}</span>
                    </div>
                  </div>

                  {/* Additional Info */}
                  <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <div className="flex items-start">
                      <Info className="w-4 h-4 text-blue-600 mr-2 mt-0.5" />
                      <div className="text-sm text-blue-800">
                        <p className="font-medium mb-1">Note:</p>
                        <p>This is an approximate calculation. Actual EMI may vary based on bank policies, processing fees, and other charges.</p>
                      </div>
                    </div>
                  </div>

                  <Button className="w-full mt-6 bg-yellow-400 hover:bg-yellow-500 text-white border-0">
                    Apply for Loan
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Fuel Calculator */}
          <TabsContent value="fuel">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Input Section */}
              <Card className="border-0 shadow-lg bg-white">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Fuel className="w-5 h-5 mr-2 text-orange-500" />
                    Fuel Cost Calculator
                  </CardTitle>
                  <p className="text-gray-600">Calculate your monthly and yearly fuel expenses</p>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Daily Distance */}
                  <div className="space-y-2">
                    <Label>Daily Distance (km)</Label>
                    <Input
                      type="number"
                      value={distance}
                      onChange={(e) => setDistance(Number(e.target.value))}
                      placeholder="Enter daily distance"
                      className="border-gray-200 focus:border-yellow-400 focus:ring-yellow-400"
                    />
                  </div>

                  {/* Bike Mileage */}
                  <div className="space-y-2">
                    <Label>Bike Mileage (km/l)</Label>
                    <Input
                      type="number"
                      value={mileage}
                      onChange={(e) => setMileage(Number(e.target.value))}
                      placeholder="Enter bike mileage"
                      className="border-gray-200 focus:border-yellow-400 focus:ring-yellow-400"
                    />
                  </div>

                  {/* Fuel Price */}
                  <div className="space-y-2">
                    <Label>Fuel Price (₹/liter)</Label>
                    <Input
                      type="number"
                      value={fuelPrice}
                      onChange={(e) => setFuelPrice(Number(e.target.value))}
                      placeholder="Enter current fuel price"
                      className="border-gray-200 focus:border-yellow-400 focus:ring-yellow-400"
                    />
                  </div>

                  {/* Working Days */}
                  <div className="space-y-2">
                    <Label>Working Days per Month</Label>
                    <Input
                      type="number"
                      value={daysPerMonth}
                      onChange={(e) => setDaysPerMonth(Number(e.target.value))}
                      placeholder="Enter working days"
                      className="border-gray-200 focus:border-yellow-400 focus:ring-yellow-400"
                    />
                  </div>

                  {/* Quick Presets */}
                  <div className="space-y-3 pt-4 border-t border-gray-200">
                    <p className="text-sm font-medium text-gray-700">Quick Presets:</p>
                    <div className="grid grid-cols-2 gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          setDistance(50);
                          setMileage(45);
                          setDaysPerMonth(22);
                        }}
                        className="text-xs"
                      >
                        City Commute
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          setDistance(100);
                          setMileage(35);
                          setDaysPerMonth(25);
                        }}
                        className="text-xs"
                      >
                        Highway Travel
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Results Section */}
              <Card className="border-0 shadow-lg bg-white">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <TrendingUp className="w-5 h-5 mr-2 text-orange-500" />
                    Fuel Cost Breakdown
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {/* Daily Cost */}
                  <div className="text-center mb-8">
                    <div className="w-24 h-24 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Fuel className="w-10 h-10 text-white" />
                    </div>
                    <p className="text-sm text-gray-600 mb-2">Daily Fuel Cost</p>
                    <p className="text-4xl font-bold text-gray-900">₹{Math.round(dailyFuelCost)}</p>
                  </div>

                  <Separator className="mb-6" />

                  {/* Cost Breakdown */}
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-3 bg-gray-50 rounded-lg px-4">
                      <span className="text-gray-700">Daily Fuel Consumption</span>
                      <span className="font-semibold text-gray-900">{(distance / mileage).toFixed(2)} liters</span>
                    </div>
                    <div className="flex justify-between items-center py-3 bg-gray-50 rounded-lg px-4">
                      <span className="text-gray-700">Monthly Cost</span>
                      <span className="font-semibold text-gray-900">₹{Math.round(monthlyFuelCost).toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center py-3 bg-orange-50 rounded-lg px-4 border border-orange-200">
                      <span className="text-gray-700 font-medium">Yearly Cost</span>
                      <span className="font-bold text-gray-900">₹{Math.round(yearlyFuelCost).toLocaleString()}</span>
                    </div>
                  </div>

                  {/* Fuel Efficiency Tips */}
                  <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
                    <div className="flex items-start">
                      <Info className="w-4 h-4 text-green-600 mr-2 mt-0.5" />
                      <div className="text-sm text-green-800">
                        <p className="font-medium mb-1">Fuel Saving Tips:</p>
                        <ul className="list-disc list-inside space-y-1 text-xs">
                          <li>Maintain steady speeds and avoid aggressive acceleration</li>
                          <li>Keep tires properly inflated</li>
                          <li>Regular servicing improves fuel efficiency</li>
                          <li>Use engine oil of the right grade</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <Button className="w-full mt-6 bg-green-500 hover:bg-green-600 text-white border-0">
                    Compare Fuel Efficient Bikes
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}