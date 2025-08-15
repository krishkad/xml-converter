import { Brain, Shield, Zap, FileCode, ArrowRight, Upload, RefreshCw, Download } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const WhyChooseUs = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Accuracy",
      description: "Trained on thousands of legal documents for precise extraction and formatting",
      color: "text-accent"
    },
    {
      icon: Shield,
      title: "Data Privacy First",
      description: "End-to-end encrypted processing with automatic file deletion after conversion",
      color: "text-primary"
    },
    {
      icon: Zap,
      title: "Fast & Efficient",
      description: "Complete document conversion in under 5 seconds with 99.9% uptime",
      color: "text-accent"
    },
    {
      icon: FileCode,
      title: "Human-Readable Output",
      description: "Clean, structured XML that's easy to parse and integrate with your systems",
      color: "text-primary"
    }
  ];

  const steps = [
    {
      number: "01",
      icon: Upload,
      title: "Upload your document",
      description: "Drag and drop or select your legal document in any supported format"
    },
    {
      number: "02",
      icon: RefreshCw,
      title: "We auto-convert it to structured XML",
      description: "Our AI processes and extracts all relevant information with high accuracy"
    },
    {
      number: "03",
      icon: Download,
      title: "Download your clean XML",
      description: "Get your formatted XML file ready for integration or further processing"
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="max-w-[1444px] mx-auto px-6 sm:px-8 ">
        {/* Why Choose Us */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground">
            Why Legal Professionals Trust Our Converter
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Built specifically for the legal industry with enterprise-grade security and accuracy
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-accent/20 h-full">
                <CardHeader className="text-center space-y-4">
                  <div className="mx-auto w-16 h-16 bg-secondary rounded-full flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                    <IconComponent className={`h-8 w-8 ${feature.color}`} />
                  </div>
                  <CardTitle className="text-lg font-bold text-foreground">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground text-center leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* How It Works */}
        <div className="bg-secondary/30 rounded-2xl p-8 lg:p-12">
          <div className="text-center space-y-4 mb-12">
            <h3 className="text-2xl lg:text-4xl font-bold text-foreground">
              How It Works
            </h3>
            <p className="text-lg text-muted-foreground">
              Simple, fast, and secure document conversion in three easy steps
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={index} className="relative">
                  <Card className="h-full bg-background border-2 hover:border-accent/20 transition-colors">
                    <CardHeader className="text-center space-y-4">
                      <div className="relative">
                        <div className="mx-auto w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center">
                          <IconComponent className="h-10 w-10 text-accent" />
                        </div>
                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                          {step.number}
                        </div>
                      </div>
                      <CardTitle className="text-xl font-bold text-foreground">
                        {step.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-center leading-relaxed">
                        {step.description}
                      </p>
                    </CardContent>
                  </Card>
                  
                  {/* Arrow between steps */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:flex absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                      <div className="w-8 h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center">
                        <ArrowRight className="h-4 w-4" />
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;