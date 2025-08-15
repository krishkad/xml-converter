"use client"
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  CheckCircle, 
  CreditCard, 
  Calendar, 
  TrendingUp,
  AlertCircle,
  Download
} from "lucide-react";

const plans = [
  {
    name: "Free Trial",
    price: "$0",
    period: "/month",
    description: "Perfect for trying out our service",
    features: [
      "10 conversions/month",
      "Access to all features",
      "Basic email support",
      "No credit card required"
    ],
    current: true,
    popular: false
  },
  {
    name: "Pro",
    price: "$19",
    period: "/month",
    description: "Best for small law firms and solo practitioners",
    features: [
      "Unlimited conversions",
      "Priority processing",
      "Conversion history & export",
      "24/7 support",
      "API access"
    ],
    current: false,
    popular: true
  },
  {
    name: "Agency",
    price: "$49",
    period: "/month",
    description: "Designed for large firms and agencies",
    features: [
      "All Pro features",
      "Bulk conversion (up to 50 files at once)",
      "CSV export & reporting",
      "Team login",
      "Dedicated account manager",
      "Custom integrations"
    ],
    current: false,
    popular: false
  }
];

const paymentHistory = [
  { date: "2024-01-01", amount: "$0.00", status: "Free", description: "Free Trial" },
  { date: "2023-12-01", amount: "$19.00", status: "Paid", description: "Pro Plan - Monthly" },
  { date: "2023-11-01", amount: "$19.00", status: "Paid", description: "Pro Plan - Monthly" },
];

export default function Subscription() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");

  return (
    <>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Subscription & Billing</h1>
          <p className="text-muted-foreground">
            Manage your subscription and view billing history
          </p>
        </div>

        {/* Current Plan */}
        <Card className="border-accent">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="h-5 w-5" />
                  Current Plan
                </CardTitle>
                <CardDescription>
                  Your active subscription details
                </CardDescription>
              </div>
              <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                Active
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold">Free Trial</h3>
                <p className="text-muted-foreground">$0.00 per month</p>
              </div>
              <Button variant="outline">Manage Billing</Button>
            </div>
            
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <h4 className="text-sm font-medium mb-2">Usage This Month</h4>
                <Progress value={94} className="mb-2" />
                <p className="text-xs text-muted-foreground">
                  47 of 50 conversions used
                </p>
              </div>
              <div>
                <h4 className="text-sm font-medium mb-2">Next Billing Date</h4>
                <p className="text-sm">Free plan - no billing</p>
                <p className="text-xs text-muted-foreground">
                  Upgrade to unlock unlimited conversions
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
              <AlertCircle className="h-4 w-4 text-yellow-600" />
              <p className="text-sm text-yellow-800">
                You're running low on conversions. Upgrade to Pro for unlimited access.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Available Plans */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Choose Your Plan</h2>
          <div className="grid gap-6 lg:grid-cols-3">
            {plans.map((plan) => (
              <Card 
                key={plan.name} 
                className={`relative ${plan.popular ? 'border-accent' : ''} ${plan.current ? 'bg-muted/30' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-accent text-accent-foreground">Most Popular</Badge>
                  </div>
                )}
                {plan.current && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge variant="outline" className="bg-background">Current Plan</Badge>
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {plan.name}
                    {plan.current && <CheckCircle className="h-5 w-5 text-green-500" />}
                  </CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                  <div className="flex items-baseline">
                    <span className="text-3xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className="w-full" 
                    variant={plan.current ? "outline" : plan.popular ? "default" : "outline"}
                    disabled={plan.current}
                  >
                    {plan.current ? "Current Plan" : `Upgrade to ${plan.name}`}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Billing History */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Billing History
                </CardTitle>
                <CardDescription>
                  View your past payments and invoices
                </CardDescription>
              </div>
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Export
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {paymentHistory.map((payment, index) => (
                <div key={index} className="flex items-center justify-between py-3 border-b last:border-b-0">
                  <div>
                    <p className="font-medium">{payment.description}</p>
                    <p className="text-sm text-muted-foreground">
                      {new Date(payment.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">{payment.amount}</p>
                    <Badge variant={payment.status === "Paid" ? "default" : "secondary"}>
                      {payment.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Upgrade CTA */}
        <Card className="border-accent bg-gradient-to-r from-accent/5 to-accent/10">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold mb-2">Ready to upgrade?</h3>
                <p className="text-muted-foreground mb-4">
                  Get unlimited conversions and premium features with our Pro plan.
                </p>
                <ul className="text-sm space-y-1">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Unlimited document conversions
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Priority processing and support
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Advanced features and API access
                  </li>
                </ul>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">$19</div>
                <p className="text-sm text-muted-foreground mb-4">per month</p>
                <Button size="lg">
                  <TrendingUp className="h-4 w-4 mr-2" />
                  Upgrade Now
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}