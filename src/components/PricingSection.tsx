import { Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const PricingSection = () => {
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
        "No credit card required",
        "File size up to 5MB",
      ],
      buttonText: "Start Free Trial",
      buttonVariant: "outline" as const,
      popular: false,
    },
    {
      name: "Pro",
      price: "$19",
      period: "/month",
      description: "Best for individual professionals",
      features: [
        "Unlimited conversions",
        "Priority processing",
        "Conversion history & export",
        "24/7 support",
        "API access",
        "File size up to 25MB",
        "Batch processing (up to 10 files)",
      ],
      buttonText: "Subscribe",
      buttonVariant: "cta" as const,
      popular: true,
    },
    {
      name: "Agency",
      price: "$49",
      period: "/month",
      description: "Ideal for law firms and agencies",
      features: [
        "All Pro features",
        "Bulk conversion (up to 50 files at once)",
        "CSV export & reporting",
        "Team login (up to 10 users)",
        "Dedicated account manager",
        "Custom integrations",
        "White-label option",
        "File size up to 100MB",
      ],
      buttonText: "Subscribe",
      buttonVariant: "trust" as const,
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-secondary/30">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 ">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose the plan that fits your legal document processing needs. No
            hidden fees, cancel anytime.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative group hover:shadow-2xl transition-all duration-300 ${
                plan.popular
                  ? "border-2 border-accent shadow-xl scale-105"
                  : "border-2 hover:border-accent/20"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-accent text-accent-foreground px-4 py-1 text-sm font-bold">
                    <Star className="h-3 w-3 mr-1" />
                    Most Popular
                  </Badge>
                </div>
              )}

              <CardHeader className="text-center space-y-4 pb-8">
                <CardTitle className="text-2xl font-bold text-foreground">
                  {plan.name}
                </CardTitle>
                <div className="space-y-2">
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl lg:text-5xl font-bold text-foreground">
                      {plan.price}
                    </span>
                    <span className="text-lg text-muted-foreground">
                      {plan.period}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {plan.description}
                  </p>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant={plan.buttonVariant}
                  className="w-full"
                  size="lg"
                >
                  {plan.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Guarantees */}
        <div className="text-center space-y-6">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <Check className="h-4 w-4 text-accent" />
              <span>Cancel anytime. No hidden fees.</span>
            </div>
            <div className="flex items-center space-x-2">
              <Check className="h-4 w-4 text-accent" />
              <span>30-day money-back guarantee – no questions asked.</span>
            </div>
          </div>

          <div className="bg-background rounded-lg p-6 border border-border inline-block">
            <p className="text-sm text-muted-foreground">
              <strong className="text-foreground">
                Enterprise plans available.
              </strong>{" "}
              Need custom solutions for large organizations?
              <a href="#contact" className="text-accent hover:underline ml-1">
                Contact our sales team.
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
